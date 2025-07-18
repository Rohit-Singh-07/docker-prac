#base image (Alpine is lightweight)
FROM node:alpine

#Set working directory inside the container
WORKDIR /app

#copy package.json and package-lock.json first (for efficient caching)
COPY package*.json ./

#Install dependencies (npm packages)
RUN npm install

#Copy all the app source code into the container
COPY . .

#Define the command to run your app when container starts
CMD ["node", "index.js"]
