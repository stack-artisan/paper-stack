# =========================
# 1️⃣  Builder
# =========================
FROM node:24-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build


# =========================
# 2️⃣  Development Runner
# =========================
FROM node:24-alpine AS runner

WORKDIR /app

ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1

# Copy from builder
COPY --from=builder /app /app

# Fix permissions for Next.js dev cache
RUN mkdir -p .next && chown -R node:node /app

USER node
EXPOSE 3000

CMD ["npm", "run", "dev"]
