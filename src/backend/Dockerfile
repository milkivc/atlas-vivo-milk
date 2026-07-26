# ============================================
# ATLAS VIVO MILK - SWH Integration Dockerfile
# ============================================
#
# Multi-stage build for production deployment
# Supports both TypeScript development and JavaScript production
#
# ============================================

# Stage 1: Development (TypeScript)
FROM node:20-alpine AS development

# Set working directory
WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=development

# Copy source files
COPY . .

# Switch to non-root user
USER nodejs

# Expose port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=development
ENV PORT=3000

# Run development server
CMD ["npm", "run", "dev"]

# ============================================

# Stage 2: Builder (TypeScript compilation)
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (production only)
RUN npm ci --only=production

# Copy source files
COPY . .

# Build TypeScript
RUN npm run build

# ============================================

# Stage 3: Production (JavaScript)
FROM node:20-alpine AS production

# Set working directory
WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Copy built files from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/app.js .
COPY --from=builder /app/package.json .

# Copy other necessary files
COPY .env.example .

# Switch to non-root user
USER nodejs

# Expose port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/api/swh/health || exit 1

# Run production server
CMD ["node", "app.js"]

# ============================================

# Stage 4: Minimal production image
FROM node:20-alpine AS minimal

WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Install only production dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy built files
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/app.js .

# Switch to non-root user
USER nodejs

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000

CMD ["node", "app.js"]

# ============================================
