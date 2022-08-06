function calcular_fuso(){
    var in_hora_brasil = document.getElementById("in_hora_brasil");
    var out_hora_brasil = document.getElementById("out_hora_brasil");
    var out_hora_franca = document.getElementById("out_hora_franca");
    var out_hora_alemanha = document.getElementById("out_hora_russia");

    var hora_brasil = Number(in_hora_brasil.value);
    console.log(in_hora_brasil.value);

    if(in_hora_brasil.value =="" || isNaN(hora_brasil)){
        alert("Informe a hora no Brasil, corretamente");
        in_hora_brasil.focus();
        return;
    }

    if(in_hora_brasil.value >= 24){
        alert("Informe um horário válido (Menor que 24H)")
        in_hora_brasil.focus();
        in_hora_brasil.textContent = "";
        return;
    }

    var hora_franca = hora_brasil + 5;
    var hora_russia = hora_brasil + 6;

    //Testar para que se passar das 24H, mostrar o horário correto.
    if(hora_franca > 24){
        hora_franca = hora_franca - 24;
    }

    if(hora_russia > 24){
        hora_russia = hora_russia - 24;
    }
    

    out_hora_brasil.textContent = "Hora no Brasil: " + hora_brasil.toFixed(2);
    out_hora_franca.textContent = "Hora na França: "+ hora_franca.toFixed(2);
    out_hora_russia.textContent = "Hora na Russia: "+ hora_russia.toFixed(2);
}

var mostrar = document.getElementById("btn_enviar");
mostrar.addEventListener("click", calcular_fuso)