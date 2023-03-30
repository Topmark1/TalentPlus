FROM node:14-alphine

# RUN mkdir -p /usr/app/
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .
# RUN npm run dev

EXPOSE 3000
CMD ["npm","run","dev"]

# FROM node:16-alphine

# RUN mkdir -p /user/app/
# WORKDIR /user/app

# COPY package.json package-lock.json ./
# RUN npm install

# COPY next.config.js ./next.config.js
# COPY app ./app
# COPY public ./public
# COPY styles ./styles
# COPY components ./components

# CMD ["npm","run","dev"]