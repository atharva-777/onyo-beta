# base
FROM node:20-alpine AS base

RUN npm install -g pnpm

# install dependencies and copy files
FROM base AS dependencies

WORKDIR /home/app

COPY package.json .

RUN pnpm install

COPY . .

# build application
FROM base AS builder

WORKDIR /home/app

COPY --from=dependencies /home/app .

RUN pnpm build

# run application
FROM base AS runner

WORKDIR /home/app

COPY --from=Builder /home/app .

EXPOSE 3000

CMD [ "pnpm", "start" ]