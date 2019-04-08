FROM node:9.6.1
RUN mkdir /app/
RUN mkdir /app/backend/
WORKDIR /app/backend/
RUN npm install nodemon -g
RUN npm install
COPY . .
EXPOSE 8626
CMD [ "nodemon", "server.js" ]
