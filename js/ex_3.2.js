function modelo(){
    //Criar referencia aos elementos da página
    var in_nome_aluno = document.getElementById("in_nome_aluno");
    var in_nota_1 = document.getElementById("in_nota_1");
    var in_nota_2 = document.getElementById("in_nota_2");

    var out_nome = document.getElementById("out_nome");
    var out_media = document.getElementById("out_media");
    var out_situacao = document.getElementById("out_situacao");

    //Obter os conteúdos dos campos

    var nome = in_nome_aluno.value;
    var nota1 = Number(in_nota_1.value);
    var nota2 = Number(in_nota_2.value);

    var media = (nota1 + nota2)/2;

    out_nome.textContent = "Nome: " + nome;
    out_media.textContent = "Média: " + media;
    if (media >= 7){
        out_situacao.textContent = "Aprovado";
        out_situacao.style.color = "green"
    }else if(media >4 && media <=7){
        out_situacao.textContent = "Em Exame"
        out_situacao.style.color = "orange  "
    }else{
        out_situacao.textContent = "Reprovado";
        out_situacao.style.color = "red";
    }
}

var mostrar = document.getElementById("btn_enviar");
mostrar.addEventListener("click", modelo)