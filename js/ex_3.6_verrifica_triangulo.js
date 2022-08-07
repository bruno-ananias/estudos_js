function verifica_triangulo(){
/*
Regras da possibilidade de um triangulo:
Um dos lados, não pode ser maior do que a soma dos outros dois
1 - Equilatero: 3 lados iguais
2 - Isósceles: 2 lados iguais
3 - Escaleno: 3 lados diferentes.
*/

    var in_lado_a = document.getElementById("in_lado_a");
    var in_lado_b = document.getElementById("in_lado_b");
    var in_lado_c = document.getElementById("in_lado_c");
    var out_resposta = document.getElementById("out_resposta");

    lado_a = Number(in_lado_a.value);
    lado_b = Number(in_lado_b.value);
    lado_c = Number(in_lado_c.value);
    /*console.log(lado_a)
    console.log(lado_b)
    console.log(lado_c)*/

    if(lado_a > (lado_b + lado_c) || lado_b > (lado_a + lado_c) || lado_c > (lado_a+lado_b)){
        out_resposta.textContent = "Não é possível formar um triangulo"
    }else if(lado_a === lado_b && lado_a === lado_c){
        out_resposta.textContent = "Triangulo Equilátero."
    }else if(lado_a !== lado_b && lado_a !== lado_c  && lado_b !== lado_c){
        out_resposta.textContent = "Triangulo Escaleno."
    }else if(lado_a === lado_b || lado_a === lado_c || lado_b === lado_c|| lado_b === lado_c){
        out_resposta.textContent = "Triangulo Isósceles."
    }
}

var mostrar = document.getElementById("btn_enviar");
mostrar.addEventListener("click", verifica_triangulo)