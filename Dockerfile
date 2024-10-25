FROM node:20.10

WORKDIR /src/

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 3000

CMD ["npm", "run", "start"]