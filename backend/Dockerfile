FROM node:9.10.0
RUN mkdir /app/
RUN mkdir /app/backend/
WORKDIR /app/backend/
RUN npm install nodemon -g
RUN npm install
COPY . .
EXPOSE 8626
CMD [ "nodemon", "server.js" ]
