FROM node:alpine as builder
WORKDIR '/docker-demo'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /docker-demo/build /usr/share/nginx/html
