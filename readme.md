# Project Setup and Installation

## Description

This code challenge given by
REMWaste is a redesign of the page "Skip Size", it is built as a react app running on Vite.
The live demo : https://2zlnh3-3000.csb.app/

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Start Project](#start-project)

## Prerequisites

Ensure you have the following tools installed:

- **Docker**: To run the project in containers.
- **Docker Compose**: For managing multi-container applications.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AyoubTougui/REMWaste-redesign.git
   cd REMWaste-redesign
   ```

2. **Build docker images**

   ```bash
   docker-compose up --build
   ```

3. **Setup .env file**

   ```bash
   cp app/.env.example app/.env
   ```

4. **Install packages**

   ```bash
   docker exec -it react-app sh
   yarn install
   ```

## Start Project

```bash
docker exec -it react-app sh
yarn dev
```

Open => http://localhost:3000
