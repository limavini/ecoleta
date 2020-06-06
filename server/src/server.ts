import express from "express";
import routes from "./routes";
import path from "path";
import cors from "cors";
const app = express();

app.use(cors())

// Entender o body como JSON
app.use(express.json());

app.use(routes);

// Rota: endereço completo da requisicao
// Recurso: qual entidade estamos acessando

// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/user/5 = Buscar dados de um usuário com ID 5

// Request param (request.params): parametros que vem na propria rota que identificam um recurso
// Query param (request.query): parametros que vem na propria rota, geralmente opcionais (filtros, paginacao) 
// Request body (request.body): parametros para criação/atualizacao de informacoes

// Para servir as imagens
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.listen(3333);
