#!/bin/bash

echo "Started"
echo "================================================="

echo "Switching to Master Branch"
git checkout main
echo "================================================="

echo "Pulling"
git pull https://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@github.com/dezohanbrbgroup/taxpert.git
echo "Pull complete"
echo "================================================="

echo "Installing node_modules/ packages"
npm install
echo "================================================="
echo "Node modules installed"
echo "================================================="

echo "Building Application"
npm start build
echo "================================================="

echo "Building Complete, Now copying to build location"

# Copy files to the remote server
echo "Copying files to remote server"
scp -r build/* administrator@203.130.9.165:/var/www/taxpert-fe/
echo "================================================="

# Restart Nginx on the remote server
echo "Restarting nginx now!"
ssh administrator@203.130.9.165 'sudo systemctl restart nginx'
echo "================================================="

echo "Deployment has been Completed"