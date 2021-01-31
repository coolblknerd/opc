FROM node:12.20.1-alpine3.12

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --silent

COPY . ./

CMD ["yarn", "start"]