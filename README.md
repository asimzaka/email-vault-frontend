# email-vault-frontend

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

### Install NVM (Node Version Manager)

To install NVM, follow the instructions from the [NVM GitHub repository](https://github.com/nvm-sh/nvm#installing-and-updating).

### Install Node.js Version 18 or Above

Once NVM is installed, you can install Node.js version 18 or above using the following commands:

```sh
nvm install 18
nvm use 18

```

### Setup Envoirnment Variables

Copy example.env file to .env file.<br>
Replace **VITE_API_BASE_URL** with your own Backend API URL.

```sh
cp example.env .env

VITE_API_BASE_URL=http://localhost:5000
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
