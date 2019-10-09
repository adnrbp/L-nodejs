FROM node

ENV APP_HOME /usr/src/app

# Create app directory
WORKDIR $APP_HOME

# Install app dependencies
COPY package*.json $APP_HOME/
RUN npm install

# Copy app Source 
COPY . $APP_HOME

EXPOSE 3001

CMD ["npm", "run", "dev"]