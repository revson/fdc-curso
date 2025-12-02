# fdc-curso

Curso de aprendizado full stack

# instalando jest

npm install --save-dev jest@versao

no package.js na sessao scripts são adicionados comandos
"test": "jest",
"test:watch": "jest --watch"

e no termina: npm run test ou npm test

-- docker
docker compose -f infra/compose.yaml up -d
docker compose -f infra/compose.yaml down

instalar o client psql

conexao com o banco de dados
psql --host=localhost --username=postgres --port=5432

instalar o modulo pg (client postgres para o node)
npm install pg@8.11.3
