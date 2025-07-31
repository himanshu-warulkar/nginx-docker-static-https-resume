FROM node:14

WORKDIR /app

COPY server.js .
COPY package.json .
COPY index.html .
COPY images ./images

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]
