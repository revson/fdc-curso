function status(request, response) {
  response.status(200).json({ return: "Fox é um bom aluno" });
}

export default status;
