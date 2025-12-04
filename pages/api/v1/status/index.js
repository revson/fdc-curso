/*import database from "../../../../infra/database";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 sum");
  console.log(result.rows);
  response.status(200).json({ return: "Fox é um bom aluno" });
}

export default status;*/

import database from "infra/database";
async function status(request, response) {
  const result = await database.query("SELECT 1+1 as sum;");
  console.log(result);
  response.status(200).json({ chave: "teste funcionando" });
}

export default status;
