#!/bin/bash

# Exit on error
set -e

# Enable debug logging
set -x

echo "--- Setting up environment ---"
pwd
ls -la

# Set NODE_ENV to production if not set
export NODE_ENV=${NODE_ENV:-production}

# Install dependencies
echo "--- Installing dependencies ---"
npm install --legacy-peer-deps --prefer-offline --no-audit --progress=false

# Build application
echo "--- Building application ---"
npm run build

# Verify build output
echo "--- Verifying build output ---"
ls -la dist/

# Create _redirects file for SPA routing
echo "/* /index.html 200" > dist/_redirects

# Verify _redirects file was created
cat dist/_redirects

echo "--- Build completed successfully ---"

exit 0
