@echo off
echo Building Fabli Firefox Extension - Simple Version
echo ================================================

REM Create build directory structure
if not exist "build" mkdir build
if not exist "build\css" mkdir build\css
if not exist "build\js" mkdir build\js
if not exist "build\images" mkdir build\images
if not exist "build\fonts" mkdir build\fonts

echo Copying static files...

REM Copy manifest and HTML files
copy "src\manifest.json" "build\manifest.json" >nul
copy "src\html\*.html" "build\" >nul

REM Copy CSS files
copy "src\css\*" "build\css\" >nul

REM Copy images
xcopy "src\images\*" "build\images\" /E /I /Y >nul

REM Copy service worker
copy "src\service-worker.js" "build\js\service-worker.js" >nul

echo Static files copied successfully!

REM Check if TypeScript is available
tsc --version >nul 2>&1
if %errorlevel% == 0 (
    echo TypeScript found, compiling...
    tsc --project tsconfig.json
    if %errorlevel% == 0 (
        echo TypeScript compilation successful!
    ) else (
        echo TypeScript compilation failed, but static files are ready
    )
) else (
    echo TypeScript not found globally
    echo You can install it with: npm install -g typescript
    echo Or use the existing compiled files if available
)

echo.
echo Build complete! 
echo To load in Firefox:
echo 1. Open Firefox
echo 2. Go to about:debugging
echo 3. Click "This Firefox"
echo 4. Click "Load Temporary Add-on"
echo 5. Select build\manifest.json
echo.
pause