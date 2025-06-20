#!/bin/bash

# Exit on error
set -e

echo "--- Setting up environment ---"

# Fix permissions
chmod -R 777 .

# Install dependencies
echo "--- Installing dependencies ---"
npm install --legacy-peer-deps

# Build application
echo "--- Building application ---"
npm run build

echo "--- Build completed successfully ---"
