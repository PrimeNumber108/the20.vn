npm run build
scp -r ./out/* aws-main:~/the20-vn

ssh aws-main << EOF
    sudo scp -r ~/the20-vn/* /var/www/the20-vn
EOF

