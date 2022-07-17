function converter_duracao(){
    //Entradas
    var in_nome_filme = document.getElementById("in_nome_filme");
    var in_duracao = document.getElementById("in_duracao");

    //Saidas
    var out_titulo = document.getElementById("out_titulo");
    var out_resposta = document.getElementById("out_resposta");

    //Obter dados do formulario
    var nome_filme = in_nome_filme.value;
    var duracao = Number(in_duracao.value);

    //Lógica para conversão do tempo
    var horas = Math.floor(duracao/60);
    var minutos = duracao % 60;

    //alterar a exbição com as respostas
    out_resposta.textContent = horas + " horas e " + minutos + " minutos"
    out_titulo.textContent = nome_filme;
}

var mostrar = document.getElementById("btn_converter");
mostrar.addEventListener("click", converter_duracao)