# Desafio FullStack CashForce

Esta é uma aplicação FullStack para gerenciamento de notas fiscais, desenvolvida como parte do Desafio FullStack CashForce.

## Estrutura da Aplicação

A aplicação está dockerizada e utiliza 3 containers:

- **Frontend**: Servido na porta `8080`
- **Backend**: Servido na porta `3001`
- **Database**: Servido na porta `3306`

## Instruções para Rodar a Aplicação

A aplicação está Dockerizada
Para iniciar a aplicação, execute o seguinte comando:


docker compose up -d --build

Acesse http://localhost:8080 para visualizar a interface da aplicação.