FROM node:alpine AS build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --non-interactive
COPY . .
ARG NODE_ENV=production
RUN yarn build

FROM node:alpine
WORKDIR /app
COPY --from=build /app/build ./
RUN yarn global add serve

ENV NODE_ENV=production

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]