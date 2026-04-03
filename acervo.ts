// Interface que define a estrutura de um Livro
interface Livro {
  id: number;
  titulo: string;
  autor: string;
  ano: number;
  disponivel: boolean;
}

// Array que armazena os livros cadastrados
const acervo: Livro[] = [];

// Função 1: Adiciona um novo livro ao acervo
function adicionarLivro(livro: Livro): void {
  acervo.push(livro);
  console.log(`Livro "${livro.titulo}" adicionado com sucesso!`);
}

// Função 2: Lista todos os livros do acervo
function listarLivros(): void {
  if (acervo.length === 0) {
    console.log("Nenhum livro cadastrado.");
    return;
  }
  console.log("\n=== ACERVO DE LIVROS ===");
  acervo.forEach((livro) => {
    console.log(`ID: ${livro.id} | Título: ${livro.titulo} | Autor: ${livro.autor} | Ano: ${livro.ano} | Disponível: ${livro.disponivel ? "Sim" : "Não"}`);
  });
}

// Função 3 (Extra): Empresta um livro pelo ID
function emprestarLivro(id: number): void {
  const livro = acervo.find((l) => l.id === id);
  if (!livro) {
    console.log(`Livro com ID ${id} não encontrado.`);
    return;
  }
  if (!livro.disponivel) {
    console.log(`O livro "${livro.titulo}" já está emprestado.`);
    return;
  }
  livro.disponivel = false;
  console.log(`Livro "${livro.titulo}" emprestado com sucesso!`);
}

// Testando o sistema
adicionarLivro({ id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954, disponivel: true });
adicionarLivro({ id: 2, titulo: "Harry Potter", autor: "J.K. Rowling", ano: 1997, disponivel: true });
adicionarLivro({ id: 3, titulo: "1984", autor: "George Orwell", ano: 1949, disponivel: true });

listarLivros();

emprestarLivro(1);

listarLivros();