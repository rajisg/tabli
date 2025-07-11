/**
 * Abstraction around connection to background service worker that can deal with retries
 * and suspension of background service worker
 */
import { log } from './globals';
import browser from 'webextension-polyfill';

export class WorkerConnection {
    private portName: string;
    private port: browser.runtime.Port | null;

    private sendQueue: any[] = [];
    private messageHandler?: (msg: any) => void;
    private receiveQueue: any[] = [];

    private reconnectTimeout: number = 1000;

    constructor(portName: string, messageHandler?: (msg: any) => void) {
        this.portName = portName;
        this.port = null;
        this.messageHandler = messageHandler;
        this.connect();
    }

    public rawSend(msg: any): boolean {
        try {
            if (!this.port) {
                log.log('WorkerConnection: rawSend: no port');
                return false;
            }
            this.port.postMessage(msg);
            return true;
        } catch (e) {
            log.log('WorkerConnection: send failed: ', e);
            return false;
        }
    }

    private emptySendQueue() {
        if (this.port != null) {
            while (this.sendQueue.length > 0) {
                log.debug('emptySendQueue: sending queued message');
                const msg = this.sendQueue.shift();
                if (msg != null) {
                    if (!this.rawSend(msg)) {
                        this.sendQueue.unshift(msg);
                        break;
                    }
                }
            }
        }
    }

    send(msg: any) {
        if (this.port != null) {
            if (!this.rawSend(msg)) {
                this.sendQueue.push(msg);
                this.reconnect();
            }
        } else {
            this.sendQueue.push(msg);
            this.reconnect();
        }
    }

    private connect() {
        try {
            log.debug('WorkerConnection: connecting...');
            this.port = browser.runtime.connect({ name: this.portName });
            if (browser.runtime.lastError) {
                this.port = null;
                log.log(
                    'WorkerConnection: connect failed: ',
                    browser.runtime.lastError,
                );
                this.reconnect();
                return;
            }
            log.debug('WorkerConnection: connected');
            this.port.onDisconnect.addListener(() => {
                log.log('WorkerConnection: port disconnected');
                if (browser.runtime.lastError) {
                    log.log(
                        'WorkerConnection: port disconnected lastError: ',
                        browser.runtime.lastError,
                    );
                }
                this.port = null;
                this.reconnect();
            });
            if (this.messageHandler !== null) {
                this.port.onMessage.addListener((msg) => {
                    this.messageHandler?.(msg);
                });
            }
            this.emptySendQueue();
        } catch (e) {
            log.log('WorkerConnection: connect failed: ', e);
            this.reconnect();
        }
    }

    private reconnect() {
        if (this.port != null) {
            return;
        }
        log.debug('reconnect: setting timer for reconnection attempt...');
        setTimeout(() => {
            this.connect();
        }, this.reconnectTimeout);
    }
}
