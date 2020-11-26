# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets

# stage1 - build react app first 
FROM node:alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/
RUN yarn --silent
COPY . /app
RUN yarn build

# stage 2 - build the final image and copy the react build files
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]