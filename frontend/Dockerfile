FROM node:14-alpine

WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

ENV NODE_ENV production
ENV API_URL "http://backend:1337"
ENV IMAGE_BASE_URL ""
ENV IMAGE_DOMAINS "backend,localhost"

EXPOSE 3000

CMD [ "sh", "-c", "yarn build && yarn start" ]
