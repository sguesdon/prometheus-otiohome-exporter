FROM node:18-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm ci
CMD [ "node", "dist/main.js" ]
