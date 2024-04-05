FROM node:alpine

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install  --silent
COPY . ./
EXPOSE 5000
