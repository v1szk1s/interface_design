FROM node:21-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3333

EXPOSE 3333

RUN npm run build

CMD ["node", "build/index.js"]
