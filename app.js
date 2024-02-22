var http = require('http')

http.createServer(function(req, res){
    res.end("Mensagem direcionada!")
}).listen(8081)

console.log("O servidor está ativo!")













/*var n1 = 10
var n2 = 7
var total = n1 + n2

console.log("Total: " + total)

if(total <= 17){
    console.log("Total menor ou igual a 17")
}else{
    console.log("Total maior ou igual a 17")
}?

var soma = function(n1, n2){
    return n1 + n2 
}

var subtracao = function(n1, n2){
    return n1 - n2 
}

var multiplicacao = function(n1, n2){
    return n1 * n2 
}

var divisao = function(n1, n2){
    return n1 % n2 
}
s
module.exports = soma
module.exports = subtracao
module.exports = multiplicacao
module.exports = divisao */
