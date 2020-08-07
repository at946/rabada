FROM node:14.7.0-alpine3.11

ENV HOME=/app     \
    LANG=C.UTF-8  \
    TZ=Asia/Tokyo \
    HOST=0.0.0.0

WORKDIR ${HOME}
COPY package.json ${HOME}

RUN apk update && \
    apk upgrade && \
    yarn add bulma node-sass sass-loader

COPY . ${HOME}

EXPOSE 3000
