# Pilas

O Pila é uma moeda digital criada e utilizada internamente na Act Tecnologia, com a proposta de paridade com o BRL. Todo mês os colaboradores da Act recebem uma determinada quantidade de Pila e podem comprar os diversos produtos alimentícios que são fornecidos toda semana, custeados pela própria empresa.

A intenção do presente aplicativo, é justamente proporcionar uma forma de controle do que é consumido mês a mês por cada colaborador.

Cada um deverá ter sua própia conta, onde poderá verificar seu saldo, extrato e claro, realizar compras dos produtos disponíveis. Dito isso, as principais funcionalidades do sistema são:

- Login do usuário;
- Logout do usuário;
- Exibição de saldo em Pila;
- Exibição de extrato de Pilas gastos;
- Listagem de produtos disponíveis para consumo;
- Função para compra de um produto;
- Visualização de informações de conta do usuário.

## Protótipos de telas

### Tela 1: Splash screen (ou Tela de abertura)

![Tela 1](/docs/splash.png)

### Tela 2: Login

![Tela 2](/docs/login.png)

### Tela 3: Homepage

![Tela 3](/docs/homepage.png)

### Tela 4: Listagem de produtos

![Tela 4](/docs/products.png)

### Tela 5: Informações de conta do usuário

![Tela 5](/docs/account.png)

### Tela 6: Extrato de consumo

![Tela 6](/docs/extract.png)

## Cronograma:

- Criar projeto com telas iniciais, até dia 25/04
- React navigation, até dia 25/04
- Fazer integração com API REST, até dia 30/05
- Fazer persistência de dados, até dia 30/05
- Finalizar CRUD de Usuários e Produtos, até dia 13/06
- Fazer validação de autenticação para Admin, prefeito e usuário comum, até dia 17/06
- Possibilitar compra de produtos, até dia 20/06
- Integrar uso de câmera, até dia 24/06
- Integrar API de leitura de código de barras, até dia 30/06

## Backlog

### Correções da AA1

Deveria ter implementado uma Flatlist, acabei não finalizando pois não fiz a recuperação dos dados persistido para que fossem exibidos.

### Método de persistência

Estou utilizando o Firebase para armazenas os dados da aplicação e realizar a autenticação de usuário.

No firebase estão sendo armazenados até o momento os dados de usuários, que podem ser cadastrados a partir da interface do aplicativo.

### Uso do Alert

O Alert está sendo utilizado para exibir uma mensagem de sucesso ou erro no cadastro de usuário. E será utilizado também para o cadastro de Produtos.

### API remota e recurso inédito

Pretendo utilizar a API de de leitura de código de barras do Firebase:
https://firebase.google.com/docs/ml-kit/read-barcodes?hl=pt-br

Essa API será utilizada para realizar a leitura de código de barras dos produtos que serão cadastrados no aplicativo.
Para utilização dessa, será necessário integração com a câmera do celular, que entrará como o recurso inédito necessário no projeto final.
