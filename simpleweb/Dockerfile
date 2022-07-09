#Specify a base image
FROM node

#set workdirectory
WORKDIR /usr/app

#copy souce file
COPY ./package.json ./

# Install some dependencies
RUN npm install

COPY ./ ./

# Default Command
CMD [ "npm","start" ]
