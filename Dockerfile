# stage 1 build

FROM node:20-alpine AS build

WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json ./
RUN npm ci

COPY . . 
RUN npm run build 

# stage 2: serve

FROM nginx:alpine

# Remove default nginx content
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy Vite build output (dist)
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]