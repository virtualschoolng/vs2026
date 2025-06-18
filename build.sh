#!/bin/bash

# Exit on error
set -e

echo "--- Installing dependencies ---"
cd frontend
npm install --legacy-peer-deps

echo "--- Building application ---"
npm run build

echo "--- Build completed successfully ---"

# Copy build output to the expected location
cp -r dist/* ../.vercel/output/static/
