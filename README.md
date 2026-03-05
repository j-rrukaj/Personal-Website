# John CV Profile

Personal website built with React and Vite.

## Prerequisites

- Node.js `20.x` (recommended)
- npm `10+`

## Run Locally

```bash
nvm use || nvm install
npm ci
npm start
```

Open `http://localhost:5173`.

## Validation

```bash
npm run build
npm test
```

## Docker

```bash
docker build -t skywalker .
docker run --rm -p 8080:80 skywalker
```

Open `http://localhost:8080`.
