#!/bin/bash

# Exit on error
set -e

# Enable debug logging
set -x

echo "--- Setting up environment ---"
pwd
ls -la

# Install dependencies
echo "--- Installing dependencies ---"
npm install --legacy-peer-deps

# Build application
echo "--- Building application ---"
npm run build

# Verify build output
echo "--- Verifying build output ---"
ls -la dist/

echo "--- Build completed successfully ---"
