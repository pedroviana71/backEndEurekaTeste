# Backend em NodeJs

O backend faz requisições na API ViaCEP. Tem a
implementação do cache utilizando o Redis. Também
tem a implementação de testes.

Por simplicidade decidi fazer testes assincronos sem mocks.
Optei por deixar o redis sem tempo de expiração pois CEP é
um tipo de dado que raramente vai se mudar. As estruturas de
pastas tentei deixar o mais simples possível pelo escopo do projeto
ser pequeno.

## Instalação

É preciso ter NodeJs e Redis instalado
no sistema.

Se voce utilizar npm:

```bash
  npm install
  npm start
```

ou se voce utilizar yarn:

```bash
  yarn
  yarn start
```

## Pacotes e techs utilizadas

- Axios
- Cors
- dotEnv
- Express
- Mongoose
- Redis

## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm test
```

ou

```bash
  yarn test
```

Resultado dos testes aplicados:

![image](https://user-images.githubusercontent.com/86496233/194789447-96ab3c1f-13ef-4a9a-be97-3f6111e39d7e.png)
