FROM nginx:1.9-alpine

COPY nginx/vhost /etc/nginx/conf.d
COPY public /usr/share/nginx/html