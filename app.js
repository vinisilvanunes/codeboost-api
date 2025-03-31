const express = require('express');
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json())

app.get("/", (req, res)=>{
	res.status(200).json("Bem-vindo à API Codeboost 🚀")
})

app.post("/login", async(req,res)=>{
	const user = req.body
	
	if(!user.email || !user.password){
		return res.status(500).json({"message":"Dados não preenchidos corretamente."})
	}

	const result = await pool.query(`select * from users where email = '${user.email}'`)

	console.log(result.rowCount)

	if(result.rowCount == 0){
		return res.status(500).json({"message":"Usuário ou senha incorretos."})
	}

	//to do: implementar tokenização jwt 
	return res.status(200).json({"message":"Login efetuado com sucesso."})

})

app.listen(PORT, () => {
	console.log(`🚀 Servidor rodando na porta ${PORT} - Ambiente: ${process.env.NODE_ENV}`);
})