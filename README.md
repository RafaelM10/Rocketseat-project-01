# Projeto desenvolvido com

## Knex
é um query builder, onde contribui para a construção das consultas sql.

## Fastify
Já possui integração com typescript e lida com assincronismo mais moderno do javascript 
possui também manutenção mas frequente que o express.
por padrão o fastify já cuida dos erros sendo um microframework que traz diversos beneficios como esses citados acima.

## Sqlite3
Utilizado como banco de dados do projeto

## Testes unitário com vitest
framework de teste assim como o Jest, vitest utiliza uma ferramenta ESbuild. 
eles precisam ser convertidos por debaixo do pano em javascript, 
vitest suporta ecmascript models, typescript e o JSX também. 
vitest é muito mais rapido que o jest

# Regra de negócio
RF
 - [x] O usuário deve poder criar uma nova transação;
 - [x] O usuário deve poder obter um resumo da sua conta;
 - [x] O usuário deve poder listar todas transações que já ocorreram;
 - [x] O usuário deve poder visualizar uma transação única;

RN
 - [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito subtrairá;
 - [x] Deve ser possível identificarmos o usuário entre as requisições;
 - [x] O usuário só pode visualizar transações o qual ele criou;
