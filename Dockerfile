FROM node:alpine

LABEL org.opencontainers.image.source https://github.com/hox/eli.tf

RUN mkdir -p /usr/src/app

ENV PORT 80

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm install --production && npm install --save-dev typescript @types/react @types/node

COPY . /usr/src/app

RUN npm run build

EXPOSE 80

CMD [ "npm", "start" ]
