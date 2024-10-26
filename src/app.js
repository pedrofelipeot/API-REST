import express from 'express'
import routes from './routes.js'
const app = express()

app.use(express.json())

app.use(routes)

app.use((erro,req,res,next)=>{
    console.log(erro)
    res.status(500).json({erro: "Erro no servidor"}).send()
})

export default app
