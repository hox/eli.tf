FROM node:18-alpine-slim

LABEL org.opencontainers.image.source https://github.com/hox/eli.tf

WORKDIR /opt/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]
