<div align="center">
<h1><b>ExpressDockerize</b></h1>
<p>Express.js-based API for sales data with Docker bootstrapping</p>
<p>
  <a href="https://medium.com/@hendurhance/how-to-create-a-dockerized-environment-for-developing-and-testing-node-js-apis-b9e4c22cf464">Read the article on Medium</a>
    ·
  <a href="https://github.com/sponsors/hendurhance">Sponsor</a>
    ·
  <a href="https://twitter.com/hendurhance">Follow me on Twitter</a>
</p>
</div>

**Note: An article on this project is available on [Medium](https://medium.com/@hendurhance/how-to-create-a-dockerized-environment-for-developing-and-testing-node-js-apis-b9e4c22cf464), check it out.**

## Table of Contents
- [Overview](#overview)
  - [Introduction](#introduction)
  - [API](#api)
- [Usage](#usage)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)
- [Support](#support)

## Overview
### Introduction
This project is a simple Express.js-based API for sales data with Docker bootstrapping. It is intended to be used as a starting point for building a more complex API. The API is built with Node.js, Express.js, and PostgreSQL. The Docker bootstrapping is done with Docker Compose.

### API
The API is a simple sales data API with two endpoints: `api/sales` and `api/sales/:id`. The `/sales` endpoint returns a list of sales data, and the `api/sales/:id` endpoint returns a single sale data object. The API is built with Node.js, Express.js, and PostgreSQL.

| Endpoint | Method | Description |
| --- | --- | --- |
| `api/sales` | `GET` | Returns a list of sales data |
| `api/sales/:id` | `GET` | Returns a single sale data object |
| `api/sales` | `POST` | Creates a new sale data object |

## Usage
### Prerequisites
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)

### Installation
1. Clone the repo
```sh
git clone https://github.com/hendurhance/express-dockerize.git
```
2. Change directory to the project directory
```sh
cd express-dockerize
```
3. Start the Docker containers
```sh
 docker-compose up --build -d
```
4. Visit `http://localhost:3000/api/sales` in your browser

## Contributing
Feel free to contribute to this project by opening issues or submitting pull requests. Your feedback and contributions are highly appreciated.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author
- Endurance - [Github](https://github.com/hendurhance) - [Twitter](https://twitter.com/hendurhance) - [LinkedIn](https://www.linkedin.com/in/hendurhance/)

## Support
If you found this project useful, please consider starring it. You can also [buy me a coffee](https://www.buymeacoffee.com/hendurhance) ☕️ or become a sponsor using the links below ➡️ [github sponsors](https://www.github.com/sponsors/hendurhance). Thanks a bunch for your support!