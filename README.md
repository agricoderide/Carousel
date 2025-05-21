# 🚀 Deploy de Aplicação React + Vite no GitHub Pages

Este projeto utiliza [Vite](https://vitejs.dev/) para desenvolvimento e é publicado via [GitHub Pages](https://pages.github.com/).

## 📦 Instalação da dependência

```bash
npm install --save-dev gh-pages
```

## 🔧 Configuração

### 1. `package.json`

Adiciona a propriedade `homepage` (no topo do ficheiro):

```json
"homepage": "https://<UTILIZADOR>.github.io/<NOME_DO_REPOSITORIO>"
```

Exemplo:

```json
"homepage": "https://agricoderide.github.io/Carousel"
"homepage": "https://palhinhax.github.io/Carousel"
```

Adiciona também os seguintes scripts:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 2. `vite.config.ts`

Adiciona a base com o nome do repositório:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/<NOME_DO_REPOSITORIO>/',
})
```

Exemplo:

```ts
base: '/Carousel/',
```

## 🚀 Deploy

Para fazer o deploy da aplicação, corre:

```bash
npm run deploy
```

## 🌐 Acesso

Depois do deploy, a aplicação estará disponível em:

```
https://<UTILIZADOR>.github.io/<NOME_DO_REPOSITORIO>
```

Exemplo:

```
https://agricoderide.github.io/Carousel
https://palhinhax.github.io/Carousel
```
