<!-- # Desafio 02 - Conceitos do SOLID -->
<h1 align="center" >API Cadastro de usuários</h1>

<p align="center">
  <a href="#-projeto">Projeto</a> •
  <a href="#-tecnologias-e-ferramentas">Tecnologias e ferramentas</a> •
  <a href="#-como-utilizar">Como utilizar</a>
</p>

---

## 💻 Projeto

Desafio do segundo modulo da trilha de Node.js do Bootcamp Ignite da Rocketseat. Deve ser criada uma API para listagem e cadastro de usuários, para aplicar alguns conceitos dos princípios do SOLID, como:

- Responsabilidade única
- Substituição de Liskov
- Inversão de dependência

Também foi utilizada o swagger para documentar as rotas da aplicação

---

## 🛠 Tecnologias e ferramentas

- [Nodejs](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express)

---

## 🚀 Como utilizar

Para clonar e rodar esse projeto, é necessário ter o [Git](https://git-scm.com), e o [Node.js](https://nodejs.org/en/download/) instalados em seu computador.

Clone este repositório

```bash
git clone https://github.com/ilismarque/ignite-introducao-ao-SOLID.git
```

ou

```bash
git clone git@github.com:ilismarque/ignite-introducao-ao-SOLID.git
```

Instale as dependências (utilizei o yarn, mas sinta-se à vontade para utilizar outro gerenciador)

```bash
yarn
```

Inicie o servidor

```bash
yarn run dev
```

Para visualizar a documentação da API acesse

```bash
http://localhost:3333/api-docs/
```

---

>O projeto esta configurado para rodar na porta _3333_, caso ela esteja indisponível em sua máquina, altere o arquivo ```server.ts``` na pasta _src_, para uma porta disponível.

---

>Para testar as rotas da API, podem ser utilizadas ferramentas como [Insomnia](https://insomnia.rest/), [Postman](https://www.postman.com/), [Hoppscotch](https://hoppscotch.io/), entre outras.
