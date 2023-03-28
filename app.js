const express = require("express");
const { randomUUID } = require("crypto")

const app = express();

app.use(express.json());

const products = [];

/**
 * POST => Inserir um dado
 * GET => Buscar um/mais dados
 * PUT => Alterar um dado
 * DELETE => Remover um dado
 */

/**
 * Body => Sempre que eu quiser enviar dados para minha aplicação
 * Params => /product/571573240758347
 * Query => /product?id=5734897593&value=57834957348
 */

app.post("/products", (req, res) => {
    // Nome e preço
    const { name, price } = req.body;

    const product = {
        name,
        price,
        id: randomUUID()
    }

    products.push(product)

    console.log(product)

})


app.get("/products", (request, response)=>{
    return response.json(products);
})

app.get("/products/:id", (req, res) => {
    const { id } = req.params;
    const product = products.find(product => product.id === id);
    return res.json(product);
});

app.put("/products/:id", (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

    const productIndex = products.findIndex((product) => product.id === id);
    products[productIndex] = {
        ...products[productIndex],
        name,
        price
    }

    return res.json({ message: "Produto alterado com sucesso"})
})

app.listen(4002, () => console.log("Server is running on port 4002"));