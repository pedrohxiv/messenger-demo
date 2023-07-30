# Projeto Demo Messenger

Este é um projeto demo do Messenger desenvolvido em TypeScript, utilizando Next.js 13, Tailwind CSS, Prisma com MongoDB, Pusher, NextAuth e Cloudinary.

## Descrição

Este projeto é uma demonstração de como criar uma aplicação semelhante ao Messenger, onde os usuários podem trocar mensagens em tempo real. Ele utiliza tecnologias modernas, como React e Next.js, para fornecer uma experiência de usuário rica e responsiva.

Além disso, o projeto utiliza o Tailwind CSS para facilitar o desenvolvimento e a estilização do aplicativo. O Tailwind CSS é uma biblioteca utilitária que permite criar estilos personalizados de forma rápida e eficiente.

O Prisma em conjunto com o MongoDB é utilizado para gerenciar os dados da aplicação. O Prisma é um ORM (Object-Relational Mapping) que simplifica a interação com o banco de dados, permitindo uma fácil manipulação dos dados da aplicação.

O Pusher é uma ferramenta utilizada para implementar a funcionalidade de mensagens em tempo real. Com o Pusher, os usuários podem enviar e receber mensagens instantaneamente sem a necessidade de atualizar a página.

O NextAuth é uma biblioteca que oferece suporte à autenticação em várias plataformas, permitindo que os usuários façam login com suas contas de mídia social ou endereços de e-mail.

O Cloudinary é utilizado para realizar o upload de imagens na aplicação. Ele oferece uma solução fácil e escalável para lidar com o upload de imagens.

## Funcionalidades

- Troca de mensagens em tempo real entre os usuários.
- Autenticação de usuários com NextAuth, permitindo login com várias opções.
- Upload de imagens com Cloudinary.
- Uso de Prisma com MongoDB para gerenciar os dados da aplicação.

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter as seguintes dependências instaladas:

- Node.js
- npm ou Yarn

## Instalação

1. Faça o clone deste repositório para o seu ambiente local.
2. Navegue até o diretório do projeto no terminal.
3. Execute o comando `npm install` ou `yarn install` para instalar as dependências do projeto.

## Configuração

Antes de iniciar o projeto, você precisará configurar as seguintes variáveis de ambiente:

- `DATABASE_URL`: URL de sua database do mongoDB.
- `NEXTAUTH_SECRET`: Qualquer valor para criptografar o JWT e para fazer hash de tokens de verificação de e-mail.
- `GITHUB_ID`: ID do Github para fornecer a autenticação.
- `GITHUB_SECRET`: Chave de API do Github para fornecer a autenticação.
- `GOOGLE_CLIENT_ID`: ID do Google para fornecer a autenticação.
- `GOOGLE_CLIENT_SECRET`: Chave de API do Google para fornecer a autenticação.
- `PUSHER_APP_KEY`: Chave de API do Pusher. Você pode obter uma chave gratuitamente no site do Pusher.
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`: Nome da sua conta Cloudinary. Crie uma conta no site do Cloudinary para obter essas informações.
- `NEXT_PUBLIC_PUSHER_APP_KEY`: Chave de API da Cloudinary.
- `PUSHER_APP_ID`: ID da sua conta Pusher.
- `PUSHER_SECRET`: Chave de API do Pusher.

Certifique-se de criar um arquivo `.env` na raiz do projeto e adicionar as variáveis de ambiente necessárias.

## Uso

Após a instalação e configuração, execute o seguinte comando para iniciar o servidor de desenvolvimento:

```
npm run dev
```

Isso iniciará o servidor de desenvolvimento do Next.js e você poderá acessar o aplicativo no seu navegador através do endereço `http://localhost:3000`.
