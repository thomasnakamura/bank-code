# Bank API 💰
## ☁️ Deploy

-  [PRODUCTION DEPLOY](https://bank-code-api.herokuapp.com/api-docs)

## 💻  Technologies
* [NodeJs](https://nodejs.org/en/)
* [Express](https://expressjs.com/pt-br/)
* [Jest](https://jestjs.io/pt-BR/)
* [Typescript](https://www.typescriptlang.org/)

## 🔍 Requirements
| Dependencies                                 | Description               |
| -------------------------------------------- | ------------------------- |
| [![node-version]][node-download]             | Javascript Runtime        |
| [![docker-version]][docker-download]         | Virtualization containers |

## 🔨 Project setup

```bash
# Clone repository
git clone https://github.com/thomasnakamura/bank-code.git
```

```bash
# Install the dependencies
npm install
```

## 🐳 Running with docker

```bash
docker build -t bank-code .
docker run -p 3000:3000 -d bank-code
```

## ▶️ Running locally

```bash
npm run start
```

## 🧪️ Running unit tests

```bash
npm run test
```

## 🔬 Running coverage

```bash
npm run test:cov
```

## 🧹 Running linter

```bash
npm run lint
```


[node-download]: https://nodejs.org/download/release/v14.14.0/
[node-version]: https://img.shields.io/badge/node-latest-blue
[docker-download]: https://docs.docker.com/engine/install/
[docker-version]: https://img.shields.io/badge/docker-v14.x.x-blue
