FROM node:latest AS deps
WORKDIR /app
COPY . ./
RUN npm ci && npm install && npm run build
CMD ["npm", "run", "start"]


