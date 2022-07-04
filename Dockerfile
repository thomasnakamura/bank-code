FROM node:14

RUN mkdir /api
WORKDIR /api

COPY ./package.json package.json
COPY ./package-lock.json package-lock.json

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
