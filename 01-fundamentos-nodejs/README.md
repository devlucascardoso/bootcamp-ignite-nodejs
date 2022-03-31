# 🏛 FinAPI - Financeira

FINAPI - API financeira para transações bancarias, podendo criar uma conta, ver o extrato bancário,
realizar um saque etc.

## 💻 Sobre o Projeto

Esse é o Primeiro projeto do bootcamp do Ignite da Rocketseat, desenvolvida nas aulas do primeiro capitulo do curso Ignite, com o intuito de colocar em prática os fundamentos do NodeJs.

### 🧪 Tecnologias

- NodeJs (https://nodejs.org/)
- Express (https://expressjs.com/)
- Uuidv4 (https://www.npmjs.com/package/uuidv4)

### 🛠 Features

- Cadastro de conta.
- Atualizar dados de conta.
- Desativar uma conta.
- Realizar depósito.
- Realizar saque.
- Buscar extrato bancário.
- Buscar extrato bancário por data.

### 🟢 Requisitos

- [x] Deve ser possível criar uma conta.
- [x] Deve ser possível buscar o extrato bancário do cliente.
- [x] Deve ser possível realizar um depósito.
- [x] Deve ser possível realizar um saque.
- [x] Deve ser possível buscar o extrato bancário do cliente por data.
- [x] Deve ser possível atualizar dados da conta do cliente.
- [x] Deve ser possível obter dados da conta do cliente.
- [x] Deve ser possível deletar uma conta

### 🔴 Regras de negócio

- [x] Não deve ser possível cadastrar uma conta com CPF já existente.
- [x] Não deve ser possível buscar estrato em uma conta não existente.
- [x] Não deve ser possível fazer depósito em uma conta não existente.
- [x] Não deve ser possível fazer saque em uma conta não existente.
- [x] Não deve ser possível excluir uma conta não existente.
- [x] Não deve ser possível fazer saque quando o saldo for insuficiente.

### 🎲 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disso é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 📌 Como rodar o Projeto

```bash
    # 1º Clonar o repositório
    $ git clone https://github.com/devlucascardoso/bootcamp-ignite-nodejs.git

    # 2º Entrar no diretório
    $ cd bootcamp-ignite-nodejs/01-fundamentos-nodejs

    # 3º Instalar as dependências
    $ yarn i

    # 4º Iniciar o projeto
    $ yarn dev
```

### 🚀 Contatos

<h4>LinkedIn: <a href="https://www.linkedin.com/in/lucas-cardoso-5a041a114/">https://www.linkedin.com/in/lucas-cardoso-5a041a114/</a></h4>
<h4>E-mail: <a href="mailto://lucascardoso946@gmailcom/">lucascardoso946@gmail.com</a></h4>
<h4 align=center>Desenvolvido por @devlucascardoso</h4>
