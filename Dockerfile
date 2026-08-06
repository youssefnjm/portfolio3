FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

# Port Vite actually uses (change if your vite.config.js sets a different one)
EXPOSE 5173

CMD ["npm", "run", "dev"]