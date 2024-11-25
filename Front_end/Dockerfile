FROM node:16 AS build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build 

FROM nginx:alpine

# COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80