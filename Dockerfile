FROM node:22-alpine AS build
WORKDIR /app

RUN corepack enable

COPY . ./

ENV CI=true
RUN pnpm i

# Build the project
RUN pnpm build

# Serve
CMD [ "pnpm", "prod" ]
