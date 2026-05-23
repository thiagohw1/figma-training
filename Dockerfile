FROM nginx:alpine

COPY . /usr/share/nginx/html/

RUN rm -rf /usr/share/nginx/html/.claude \
           /usr/share/nginx/html/.git \
           /usr/share/nginx/html/README.md

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
