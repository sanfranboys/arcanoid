FROM node:12
WORKDIR /app
COPY . .
RUN npm ci && npm run prod
