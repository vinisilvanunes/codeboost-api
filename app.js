const express = require('express');
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res)=>{
	res.status(200).json("Bem-vindo à API Codeboost 🚀")
})

app.listen(PORT, () => {
	console.log(`🚀 Servidor rodando na porta ${PORT} - Ambiente: ${process.env.NODE_ENV}`);
})