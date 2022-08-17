<script>
    alert("Digite 0 para sair");

    do {
        var num = Number(prompt("Numero: "));

        if(num == 0 || isNaN(num)){
            var sair = confirm("Confirma Saída? ");
            if(sair){
                break;
            }else{
                continue;
            }
        }

        if(num % 2 == 0){
            alert("O dobro do numero é: " + num * 2)
        }else{
            alert("O triplo do número é: " + num * 3)
        }
    } while (true);
    alert("Fechando")
</script>