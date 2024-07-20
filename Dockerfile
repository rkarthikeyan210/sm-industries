# Use the official Node.js 16 base image
FROM node:20

# Set environment variables
ENV NVM_DIR=/usr/local/nvm
ENV AIO_CLI_ACCEPT_LICENSES=y
ENV AIO_CLI_ANALYTICS=false

# Create the NVM directory
RUN mkdir -p $NVM_DIR

# Install dependencies
RUN apt-get update && apt-get install -y \
    curl \
    build-essential \
    libssl-dev \
    && apt-get clean

# Install NVM
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

# Install vercel
npm install -g vercel

# Set working directory
WORKDIR /app

# Command to keep the container running
CMD ["bash"]

