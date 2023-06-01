FROM node:latest AS deps
WORKDIR /app
COPY . ./
RUN npm ci && npm run build
CMD ["npm", "run", "start"]


