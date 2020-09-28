# base image
FROM node:alpine

#install 
WORKDIR /usr/app
COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]