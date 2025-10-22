#!/bin/bash

# Build the project
npm run build

# Copy the built files to the root directory for GitHub Pages
cp -r out/* .

# Add all files
git add .

# Commit
git commit -m "Deploy to GitHub Pages"

# Push
git push origin main
