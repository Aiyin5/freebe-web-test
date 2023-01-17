FROM nginx
COPY ./.next /usr/share/nginx/html
EXPOSE 80