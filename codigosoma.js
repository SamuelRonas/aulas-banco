const prompt = require("prompt-sync")(); 

function banco() {

    var saldo = 0;

    console.log("Digite 1 para Depositar, digite 2 para Sacar e 3 para Mostrar seu saldo");

    var numeroUsuario = prompt("Digite sua opção: ");

    if (numeroUsuario == 1) {
        var deposito = prompt("Valor do deposito:  ")
        depositar(deposito)
    } else if (numeroUsuario == 2) {
        var slk = prompt ('valor do saque')
        sacar(slk)
    } else if (numeroUsuario == 3) {
        mostraSaldo()
    } else {
        console.log("Opção Invalida")
    }


    function depositar(valor) {
        saldo = saldo + valor;
        console.log(saldo)
    }

    function sacar(valor) {
    saldo = saldo - valor;
    console.log(saldo)
    }


    
    function mostraSaldo() {
        console.log(saldo)
    }

}



banco();