FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
RUN apk add --no-cache \
    openssl \
    zlib \
    libgcc \
    && ln -s /usr/lib/libssl.so.1.1 /usr/lib/libssl.so
WORKDIR /app
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./
RUN npm ci

# Builder stage
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1


# Runner stage
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/public ./public

RUN adduser -D ghost
COPY --from=builder --chown=ghost:ghost /app/.next/standalone ./
COPY --from=builder --chown=ghost:ghost /app/.next/static ./

USER ghost
EXPOSE 4005
ENV PORT=4005
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
