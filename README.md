<h1 align="center">
    🚀  IGNITE SHOP
</h1>


Essa aplicação tem como objetivo criar um mini e-commerce de venda de camisetas, isso tudo com recursos para validação de meios de pagamentos consumindo a API [Stripe](https://stripe.com/docs/api)

### Features

- Listagem de produtos
- Adicionar produto no carrinho
- Exibir o valor total da compra
- Excluir produtos do carrinho
- Serviço de pagamentos via cartão de crédito

![IgniteShop](https://i.imgur.com/aepAuP3.png)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

### Como rodar a aplicação

# Clone este repositório
```bash
$ git clone https://github.com/gomessgbr/ignite-shop
```
# Acesse a pasta do projeto no terminal/cmd
```bash 
$ cd ignite-shop
```
# Instale as dependências do projeto
```bash 
$ npm install ou yarn install
```
# Execute a aplicação
```
bash
$ npm run dev
```


O pagamento por cartão é feito pela api do Stripe, que disponibiliza [números de cartão para teste](https://stripe.com/docs/testing?locale=pt-BR) ou se preferir, use o seguinte:

```bash
# Coloque uma data posterior atual, qualquer número de CVV
5555555555554444
```

![Exemplo de pagamento com cartão](https://i.imgur.com/LulhbPg.png)

### 🛠 Bibliotecas

As seguintes ferramentas foram usadas na construção do projeto:

- [NextJS](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ContexAPI](https://reactjs.org/docs/context.html)
- [Stitches](https://stitches.dev/)
- [Radix](https://www.radix-ui.com/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [KeenSlider](https://github.com/colinhacks/zod)
- [StripeAPI](https://stripe.com/docs/api)

### Deploy

![App Screenshot](https://i.imgur.com/BWNACtA.png)

[Acesse aqui o projeto online](https://ignite-shop-three-navy.vercel.app/)
