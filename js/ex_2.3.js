function modelo(){
    //Entradas: Criar referencias pelo elementos manipulados pelo programa
    var in_nome_veiculo = document.getElementById("in_nome_veiculo");
    var in_valor = document.getElementById("in_valor");

    var out_entrada = document.getElementById("out_entrada");
    var out_parcelas = document.getElementById("out_parcelas")
    var out_modelo = document.getElementById("out_modelo");


    //Obter os dados dos campos de entrada
    var preco = Number(in_valor.value);
    var modelo = in_nome_veiculo.value;

    //Saídas
   
    //Lógica
    var entrada = preco  * 0.5;
    var parcela = (preco * 0.50)/12;

                
    //Resultados
    out_modelo.textContent = "Modelo: "+modelo;
    out_entrada.textContent = "Valor Da entrada R$: " +  entrada.toFixed(2); 
    out_parcelas.textContent= "Parcelas de R$: " + parcela.toFixed(2);
}

var mostrar = document.getElementById("btn_enviar");
mostrar.addEventListener("click", modelo)
