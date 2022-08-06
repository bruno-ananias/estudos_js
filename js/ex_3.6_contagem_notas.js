function calcular_notas(){
    var in_valor = document.getElementById("in_valor_saque");
    
    var out_nota_cem = document.getElementById("out_nota_cem");
    var out_nota_cinquenta = document.getElementById("out_nota_cinquenta");
    var out_nota_vinte = document.getElementById("out_nota_vinte");
    var out_nota_dez = document.getElementById("out_nota_dez");
    var out_valor = document.getElementById("out_valor");
    var out_resposta = document.getElementById("out_resposta");

    var valor = Number(in_valor.value)
    out_valor.textContent = "Valor: " + valor;


    out_nota_cem.textContent = "";
    out_nota_cinquenta.textContent = "";
    out_nota_dez.textContent = "";

    if(valor == 0 || isNaN(valor)){
        alert("Informe um valor Válido.");
        in_valor.focus();
        return;
    }
    
    if(valor % 10 != 0){
        alert("Não é possível realizar esse saque.");
        in_valor.focus();
        return;
    }

    var notas_cem = Math.floor(valor/100);
    var resto = valor % 100;

    var notas_cinquenta = Math.floor(resto/50);
    resto = resto % 50;

    var notas_dez = Math.floor(resto/10);


    if(notas_cem > 0){
        out_nota_cem.textContent = "Notas de R$100: " + notas_cem;
    }
    if(notas_cinquenta > 0){
        out_nota_cinquenta.textContent = "Notas de R$50: " + notas_cinquenta;
    }
    if(notas_dez > 0){
        out_nota_dez.textContent = "Notas de R$10: " + notas_dez;
    }
}

var mostrar = document.getElementById("btn_enviar");
mostrar.addEventListener("click", calcular_notas)