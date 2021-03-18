FROM node:15.11.0-alpine3.13
WORKDIR /unleash
RUN npm init -y
RUN npm install unleash-server --save
RUN npm install cors --save
ADD server.js server.js
ADD basic-auth-hook.js basic-auth-hook.js
CMD node server.js