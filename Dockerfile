FROM node:6.11-alpine
RUN mkdir -p /app
WORKDIR /app
COPY package.json .
RUN npm install
COPY server.js .
EXPOSE 8626
CMD [ "node", "server.js" ]
