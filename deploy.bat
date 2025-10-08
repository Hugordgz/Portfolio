@echo off
echo 🚀 Hugo Rodriguez Tristancho Portfolio Deployment Script
echo ================================================

echo.
echo ✅ Step 1: Building production version...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed! Please fix errors and try again.
    pause
    exit /b 1
)

echo.
echo ✅ Step 2: Adding changes to git...
git add .

echo.
echo ✅ Step 3: Committing changes...
set /p commit_message="Enter commit message (or press Enter for default): "
if "%commit_message%"=="" set commit_message=Update portfolio for deployment

git commit -m "%commit_message%"

echo.
echo ✅ Step 4: Pushing to GitHub...
git push origin main

echo.
echo 🎉 Deployment preparation complete!
echo.
echo Next steps:
echo 1. Go to https://vercel.com
echo 2. Import your GitHub repository: https://github.com/Hugordgz/Portfolio
echo 3. Deploy with default Vite settings
echo.
echo Your portfolio will be live in minutes!
pause
