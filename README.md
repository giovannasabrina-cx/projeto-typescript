\# 📚 Sistema de Acervo de Livros



Projeto desenvolvido em TypeScript como parte do \*\*Pré Claude Code\*\* do Gogroup.



\## 📋 Sobre o Projeto



Script que gerencia um acervo de livros, permitindo adicionar, listar e emprestar livros. O projeto utiliza o fluxo completo do Git com branches, commits padronizados e integração com GitHub.



\## 🛠️ Tecnologias Utilizadas



\- \[TypeScript](https://www.typescriptlang.org/)

\- \[Node.js](https://nodejs.org/)

\- Git + GitHub



\## 📁 Estrutura do Projeto

projeto-typescript/

├── acervo.ts        # Código fonte principal

├── acervo.js        # Código compilado (gerado automaticamente)

├── tsconfig.json    # Configurações do TypeScript

├── package.json     # Dependências do projeto

└── .gitignore       # Arquivos ignorados pelo Git



\## ⚙️ Como Rodar o Projeto



\*\*Pré-requisitos:\*\* Node.js e Git instalados.



\*\*1. Clone o repositório:\*\*

```bash

git clone https://github.com/giovannasabrina-cx/projeto-typescript.git

cd projeto-typescript

```



\*\*2. Instale as dependências:\*\*

```bash

npm install

```



\*\*3. Compile o TypeScript:\*\*

```bash

npx tsc --ignoreConfig acervo.ts

```



\*\*4. Execute:\*\*

```bash

node acervo.js

```



\## 🔧 Funcionalidades



\### Interface `Livro`

Define a estrutura de um livro no sistema:

| Campo | Tipo | Descrição |

|-------|------|-----------|

| id | number | Identificador único |

| titulo | string | Título do livro |

| autor | string | Nome do autor |

| ano | number | Ano de publicação |

| disponivel | boolean | Status de disponibilidade |



\### Funções



\- \*\*`adicionarLivro(livro)`\*\* — Adiciona um novo livro ao acervo

\- \*\*`listarLivros()`\*\* — Exibe todos os livros cadastrados no console

\- \*\*`emprestarLivro(id)`\*\* — Marca um livro como indisponível pelo ID \*(função extra)\*



\## 📊 Exemplo de Output

Livro "O Senhor dos Anéis" adicionado com sucesso!

Livro "Harry Potter" adicionado com sucesso!

Livro "1984" adicionado com sucesso!

=== ACERVO DE LIVROS ===

ID: 1 | Título: O Senhor dos Anéis | Autor: J.R.R. Tolkien | Ano: 1954 | Disponível: Sim

ID: 2 | Título: Harry Potter | Autor: J.K. Rowling | Ano: 1997 | Disponível: Sim

ID: 3 | Título: 1984 | Autor: George Orwell | Ano: 1949 | Disponível: Sim

Livro "O Senhor dos Anéis" emprestado com sucesso!

=== ACERVO DE LIVROS ===

ID: 1 | Título: O Senhor dos Anéis | Autor: J.R.R. Tolkien | Ano: 1954 | Disponível: Não

ID: 2 | Título: Harry Potter | Autor: J.K. Rowling | Ano: 1997 | Disponível: Sim

ID: 3 | Título: 1984 | Autor: George Orwell | Ano: 1949 | Disponível: Sim



\## 🌿 Fluxo Git Utilizado

master

└── feature-logica   ← desenvolvimento das funções

└── merge → master



\## 👩‍💻 Autora



\*\*Giovanna Sabrina\*\* — Time de CX | Gogroup

