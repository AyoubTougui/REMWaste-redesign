# Use official Node.js image (Alpine for smaller size)
FROM node:18-alpine

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies with pnpm
# COPY package.json pnpm-lock.yaml ./
# RUN pnpm install

# Copy all files into the container
COPY . .

# Keep the container running
CMD ["sh"]