FROM node:18
 
 #Create app directory
 WORKDIR /usr/src/app
 
 #Install app dependenices
 COPY package*.json ./

 RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node","server.js" ] 
