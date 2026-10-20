import express from 'express'
import 'dotenv/config';

const PORTA = process.env.PORTA;


const produtos = [
    {
        id: 1,
        nome: "Mouse Gemer",
        preco: 99.9,
        categoria: informatica,

    },
      {
        id: 2,
        nome: "teclado",
        preco: 89.9,
        categoria: informatica,

    },
      {
        id: 3,
        nome: "Monitor",
        preco: 2399.9,
        categoria: informatica,

    },
];

const app = express()

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.get("/produtos", (req, res)=>{
    res.json("produtos");
});

app.get("/produtos/:id", (req, res)=>{
    const id= req.params.id;

    const idConvertido = Number(id);

    if(isNaN(idConvertido)) {
        res.status(400).send("Parãmetro id invâlido")

        if (!produto){
            res.status(404).json({erro: "Produto não encontrado"})
        }
    }

    const produto = produtos.find(p => p.id == id);

    res.send(`Dados do produtos ${id}`);
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${PORTA}`)
})