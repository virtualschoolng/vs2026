#!/bin/bash

# Exit on error
set -e

echo "--- Setting up environment ---"

# Install dependencies
echo "--- Installing dependencies ---"
cd frontend
npm install --legacy-peer-deps

# Build application
echo "--- Building application ---"
npm run build

echo "--- Build completed successfully ---"

# Create output directory if it doesn't exist
mkdir -p ../.vercel/output/static

# Copy build output to the expected location
cp -r dist/* ../.vercel/output/static/

# Ensure proper permissions for Vercel
chmod -R 777 ../.vercel/output
