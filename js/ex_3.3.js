function modelo(){
    //Criar referencia aos elementos da página
    var in_nome = document.getElementById("in_nome");
    var in_altura = document.getElementById("in_altura");
    var rb_masculino = document.getElementById("rb_masculino");
    var rb_feminino = document.getElementById("rb_feminino");

    var out_resposta = document.getElementById("out_resposta");

    //obter o conteúdo dos campos
    var nome = in_nome.ariaValueMax;
    var altura = Number(in_altura.value)
    var rb_masculino = rb_masculino.checked;
    var rb_feminino = rb_feminino.checked;

    //lógica e respostas
    if(nome = "" || rb_feminino == false && rb_masculino == false){
        alert("Por favor, informe o nome e selecione o sexo");
        in_nome.focus(); //retorna o foco para o campo nome
        return;
    }

    if (altura == 0 || isNaN(altura)){
        alert("Informe a altura corretamente.")
        in_altura.focus();
        return;
    }

    //Math.pow - eleva ao quadraro
    
}

var mostrar = document.getElementById("btn_enviar");
mostrar.addEventListener("click", modelo)