var num_contas = 0;
var valor_total = 0;
//Variável que acumula todas as contas
var resposta = "";
var totais = "";

function cadastrar_conta(){
    var descricao_conta = document.getElementById("in_descricao_conta");
    var valor_conta = document.getElementById("in_valor_conta");

    var out_resposta = document.getElementById("out_resposta")
    var out_total = document.getElementById("out_total")
    
    
    var conta = descricao_conta.value;
    var valor = Number(valor_conta.value);

    if(conta =="" || valor == 0 || isNaN(valor)){
        alert("Informe os dados Corretamente.")
        in_descricao_conta.focus();
        return;
    }

    //adciona valores ao contador e acumulador
    num_contas++;
    valor_total = valor_total + valor;

    //Concatena as contas
    resposta = resposta + conta + " - R$ " + valor +"\n";
    totais = "Total de Contas: " + num_contas + " - Valor Total R$" + valor_total.toFixed(2);


    out_resposta.textContent = resposta + "";
    out_total.textContent =  totais + "";

    //Limpar campos
    in_descricao_conta.value = "";
    in_valor_conta.value = "";
    in_descricao_conta.focus();
}

var mostrar = document.getElementById("btn_cadastrar");
mostrar.addEventListener("click", cadastrar_conta)