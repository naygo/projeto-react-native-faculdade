# Projeto 2 - Aplicação React-Native

**Nome da aplicação:** My Books

**Criadora:** Nayla Cristina Gomes Carvalho da Silva

Esta aplicação tem como objetivo cadastrar e listar os livros que uma pessoa está lendo para ajudar a controlar sua leitura e guardar os livros que já. Além de cadastrar e listar, ela também permite a edição das informções de um livro já cadastrado, exclusão do mesmo. Também há a possibilidade de marcar livros como lidos através de um checkbox e também filtrá-los por livros já lidos ou não.

### Tela 1

A primeira tela apresentada é a tela de login, clique em 'ENTRAR' para realizar o login e você será direcionado para dentro da aplicação.

![Tela Login](/assets/readme-imgs/tela-login.png)

### Tela 2

A tela dois é a tela inicial do projeto, ela exibe a lista de livros já cadastrados. Caso não tenha nenhum livro cadastro aparecerá a mensagem "No books to show". 

A primeira barra verde (header do projeto) contém o nome da aplicação e um botão para adicionar novos livros na lista.

Na barra verde acima da listagem, é possível (através da marcação do checkbox) mostrar apenas os livros lidos ou não.

![Tela Inicial](/assets/readme-imgs/tela-inicial-livro-cadastrado.jpeg)

Na listagem de livros as seguintes informações são exibidas:
- Checkbox: o checkbox informa se o livro foi lido ou não. Marcado significa que foi lido, desmarcado significa que não.
- Author: nome do autor do livro.
- Pages: número de páginas.
- Ícone de lápis: acesso à tela de edição.
- Ícone de lixeira: deleta o livro da listagem.

### Tela de adição de livros

A tela de adição de livros pode ser acessada clicando no botão que contém a label (+) na header do projeto. Essa tela possui três campos para preenchimento, que são as informações dispostas na listagem, e um botão para confirmar o cadastro. Caso deseje voltar atrás, basta clicar no nome do projeto na header (My Books).

![Tela de adição](/assets/readme-imgs/tela-add-book.jpeg)

### Tela de atualizar livro

Esta tela é acessada clicando no ícone de lápis, disponível ao lado do nome dos livros na listagem. A tela de atualizar os dados do livro é a mesma de adição, a diferença é que esta tela já inicia com os valores do livro preenchidos para a alteração. Aqui, também, se desejar voltar basta clicar no nome da aplicação.

![Tela de edição](/assets/readme-imgs/tela-update-book.jpeg)

### Excluir livro
É possível deletar o livro clicando no ícone de lixeira disponível ao lado do título do livro na tela inicial de listagem.

## Componentes
### Book
Esse componente é responsável por exibir as informações do livro e os ícones de tarefa.

![Componente book](/assets/readme-imgs/componente-book.png)

### Books
Esse componente é responsável por renderizar a lista de livros, ele pega todos os livros disponíveis e renderiza na tela através do componente "Book".

### BookHeader
Esse componente exibe a barra verde que contém o checkbox que altera a listagem de livros para apenas os lidos e o título "Books".

![Componente book header](/assets/readme-imgs/componente-header-book.png)

### FormBook
Esse componente renderiza e configura o formulário responsável por adicionar e editar livros.

![Componente form book](/assets/readme-imgs/componente-form-book.png)

#### Perguntas
A aplicação é original e não uma cópia da aplicação de um colega ou de uma aplicação já existente?
**Sim**
A aplicação tem pelo menos duas interfaces (telas) independentes?
**Sim**
A aplicação armazena e usa de forma relevante dados complexos do usuário?
**Sim**
A aplicação tem pelo menos dois componentes além do componente principal?
**Sim**
A aplicação tem um componente com rolagem?
**Sim**
A aplicação tem um campo de formulário que é devidamente tratado?
**Sim**
A aplicação foi desenvolvida com o React Native?
**Sim**
O código da minha aplicação possui comentários explicando cada operação?
**Sim**
A aplicação está funcionando corretamente?
**Sim**
A aplicação está completa?
**Sim**