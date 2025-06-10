FROM node:slim

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm ci 
# Bundle app source
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "run" , "start"]