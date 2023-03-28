const http = require("http");

http
    .createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'application/json'});

        if(req.url=="/produto"){
            res.end(JSON.stringify({
                product: "suco de uva",
                price: 3,
                quantity: 10,
                brand: "del valle"
            }));
        }
        else if(req.url=="/usuario"){
            res.end(JSON.stringify({
                nome:"Yan",
                idade: "21",
                cidade: "Sobral",
            }));
        }
        else{
            res.end(JSON.stringify({
                message: "Qualquer coisa",
            }))
        }
        
    })
    .listen(4001, () => console.log("Server is running on port 4001"))