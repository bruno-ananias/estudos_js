function tabuada(){
    var in_numero = document.getElementById("in_numero");
    var out_tabuada = document.getElementById("out_tabuada");

    var numero = Number(in_numero.value);

    if(numero == 0 || isNaN(numero)){
        alert("Informe um número válido!!")
        in_numero.focus();
        return;
    }

    var resposta = "";

    for(var i = 1; i <= 10; i++){
        resposta = resposta + numero + " X " + i + " = " + numero * i + "\n";
    }
    out_tabuada.textContent = resposta
    console.log(resposta)
    console.log(numero)
    
}

var mostrar = document.getElementById("btn_enviar");
mostrar.addEventListener("click", tabuada)