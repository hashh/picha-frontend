# picha-front

Pré-requisitos:
	* Node.js;
	* npm;

 - Primeiramente vamos clonar o nosso projeto. Para tal, devemos lembrar que este é o front do projeto Picha, e que seria interessante clonarmos o repositório na mesma pasta do projeto da API.
	* Para clonar: git clone https://github.com/hashh/picha-frontend.git
 - Após clonarmos nosso projeto, vamos instalar as dependencias rodando o comando "npm install" dentro da pasta rais do projeto. Este comando instalará todas dependencias existente em nosso package.json.
 - Após a instalação, podemos rodar nosso projeto com "npm run server". Abra seu anvegador na url informada no console.
 - Em src/services/config.js, temos uma url configurada: baseURL: 'http://127.0.0.1:8000/'. Esta é a url da API. Pode ser que ao rodar a API, esta url seja diferente, então verifique ao rodar.
 - Caso ocorra algum problema para rodar seu projeto, as dúvidas podem ser tiradas através do email: mateusnascimento40@gmail.com.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
