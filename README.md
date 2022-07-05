# Bank API 💰

## <a name="Technologies"></a> 💻  Technologies
* [NodeJs](https://nodejs.org/en/)
* [Express](https://expressjs.com/pt-br/)
* [Jest](https://jestjs.io/pt-BR/)
* [Typescript](https://www.typescriptlang.org/)

## <a name="requirements"></a> 🔍 Requirements
| Dependencies                                 | Description               |
| -------------------------------------------- | ------------------------- |
| [![node-version]][node-download]             | Javascript Runtime        |
| [![docker-version]][docker-download]         | Virtualization containers |

## <a name="project-setup"></a> 🔨 Project setup

```bash
# Clone repository
git clone https://github.com/thomasnakamura/bank-code.git
```

```bash
# Install the dependencies
npm install
```

## <a name="running-docker"></a> 🐳 Running with docker

```bash
docker build -t bank-code .
docker run -p 3000:3000 -d bank-code
```

## <a name="running-locally"></a> ▶️ Running locally

```bash
npm run start
```

## <a name="running-tests"></a> 🧪️ Running unit tests

```bash
npm run test
```

## <a name="running-coverage"></a> 🔬 Running coverage

```bash
npm run test:cov
```

## <a name="running-linter"></a> 🧹 Running linter

```bash
npm run lint
```


[node-download]: https://nodejs.org/download/release/v14.14.0/
[node-version]: https://img.shields.io/badge/node-latest-blue
[docker-download]: https://docs.docker.com/engine/install/
[docker-version]: https://img.shields.io/badge/docker-v14.x.x-blue
