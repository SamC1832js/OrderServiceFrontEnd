#!/bin/sh

# Replace environment variables in the built JavaScript files
find /usr/share/nginx/html -type f -name "main.*.js" -exec sed -i "s|process.env\['API_URL'\]|'${API_URL}'|g" {} \;

# Start nginx
nginx -g 'daemon off;' 