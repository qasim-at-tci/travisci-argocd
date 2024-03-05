FROM node:21.6.2-alpine
WORKDIR /app
COPY package.json yarn.lock app.js /app/
RUN npm install --omit=dev
EXPOSE 8000
CMD [ "npm", "start" ]