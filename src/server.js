import app from "./app.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na rota http://localhost:${port}`);
});
