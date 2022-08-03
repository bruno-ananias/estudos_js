function calcular_peso_ideal(){
    //Criar referencia aos elementos da página
    var in_nome = document.getElementById("in_nome");
    var in_altura = document.getElementById("in_altura");
    var rb_masculino = document.getElementById("rb_masculino");
    var rb_feminino = document.getElementById("rb_feminino");

    var out_resposta = document.getElementById("out_resposta");
    var out_nome = document.getElementById("out_nome");

    //obter o conteúdo dos campos
    var nome = in_nome.value;
    var altura = Number(in_altura.value)
    var rb_masculino = rb_masculino.checked;
    var rb_feminino = rb_feminino.checked;

    //lógica e respostas
    //Testa o nome e o Sexo, se estão preenchidos
    if(nome == "" || rb_feminino == false && rb_masculino == false){
        alert("Por favor, informe o nome e selecione o sexo");
        in_nome.focus(); //retorna o foco para o campo nome
        return;
    }

    //Testa a altura e caso necessário, direciona o fomulario para o campo
    if (altura == 0 || isNaN(altura)){
        alert("Informe a altura corretamente.")
        in_altura.focus();
        //Vamos testar pra ver.
        return;
    }

    if(rb_masculino){
       var peso = 22 * Math.pow(altura, 2);
    }else{
        var peso = 21 * Math.pow(altura, 2)
    }
    out_nome.textContent = "Olá: " + nome
    out_resposta.textContent = "Seu peso ideal é: "+ peso.toFixed(3) + "Kg. "
 
}

var mostrar = document.getElementById("btn_enviar");
mostrar.addEventListener("click", calcular_peso_ideal)

function limpar_campos(){
    location.reload();
    document.getElementById("in_nome").focus();
}
var limpar = document.getElementById("btn_limpar");
limpar.addEventListener("click", limpar_campos)

