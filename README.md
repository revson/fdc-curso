# fdc-curso

Curso de aprendizado full stack

# instalando jest

npm install --save-dev jest@versao

no package.js na sessao scripts são adicionados comandos
"test": "jest",
"test:watch": "jest --watch"

e no termina: npm run test ou npm test

subindo o docker
docker compose -f infra/compose.yaml up

conexao com o banco de dados
psql --host=localhost --username=postgres --port=5432
