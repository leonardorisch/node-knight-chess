FROM node:9.10.0
RUN mkdir /app
RUN mkdir /app/client
WORKDIR /app/client
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
COPY . /app/client

EXPOSE 3000
RUN yarn
CMD ["yarn", "start"]
