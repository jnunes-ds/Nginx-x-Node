# Desafio Node com MySql e Nginx

O presente projeto tem por objetivo cumprir um desafio técnico proposto pelo curso Full Cycle.
O desafio consiste em utilizar o docker-compose para gerar três containtes interdependentes, um container rodando uma aplicação nodejs, outro rodando o banco de dados MySQL e o terceiro roda o nginx que utilizaremos para acessar a aplicação node.

O resultado esperdo é que a aplicação node consiga interagir com o banco de dados, criando nele uma tabela chamada people e, dentro dessa tabela criar pessoas (Um objeto contendo apenas nome e id).

O resultado do sucesso da escrita no banco de dados deve ser espelhado na própria aplicação node que, abaixo de um título h1 tendo o nome do curso, deve ter também uma lista com os nomes já cadastrados no banco de dados.
Tudo isso deve ser acessado pelo usuário através do Nginx, pois o container nodejs não pode fornecer acesso direto ao usuário.