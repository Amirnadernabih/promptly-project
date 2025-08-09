FROM node:18

WORKDIR /app

COPY package*.json ./

# Install dependencies (full install so devDeps are included if you need nest at runtime)
RUN npm install

# Install Nest CLI globally
RUN npm install -g @nestjs/cli

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
