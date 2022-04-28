let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let lista2 = []

for (let i = lista.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let k = lista[i]
    lista[i] = lista[j]
    lista[j] = k
}

for (let i = 0; i < 5; i++){
    lista2.push(lista[i])
}

lista2.sort(function(a, b){return a - b});

if (document.getElementById("btninicio") != null){
    let btninicio = document.getElementById("btninicio");

    btninicio.addEventListener("click", (e) => {
        e.preventDefault()

        document.getElementById("inicio").style.cssText = "display: none;"

        for (let i = 0; i < 5; i++){
            perguntas = document.getElementById("q"+lista[i]);
            perguntas.style.cssText = "display: block; display: flex;flex-direction: column;justify-content: center;align-content: center;width: 90%;margin-top: 15px;padding: 30px;border-radius: 20px;background-color: rgb(227, 225, 225);";
        }

        for (let i = 0; i < 5; i++){
            document.getElementById("h"+lista2[i]).innerHTML = "Questão "+(i+1)+":"
        }

        document.getElementById("btn_submeter").style.cssText = "display: block; display: flex;flex-direction: column;justify-content: center;align-content: center;width: 90%;margin-top: 15px;padding: 30px;border-radius: 20px;background-color: rgb(227, 225, 225);";

});
}

if (document.getElementById("btn_submeter") != null){
    let btn_submeter = document.getElementById("btn_submeter");

    btn_submeter.addEventListener("click", (e) => {
        e.preventDefault()

        i = 0
        num_respostas = 0
        pontuacao = 0

        if (i == 0){
            for (let i = 0; i < 5; i++){
                let resposta = document.forms["questionario_form"]["r"+(lista2[i])].value.length;
                num_respostas = num_respostas + resposta
            }

            if (num_respostas >= 5) {
                i = 1

                for (let i = 0; i < 5; i++){
                    perguntas = document.getElementById("q"+lista2[i]);
                    perguntas.style.cssText = "display: none;";
                    btn_submeter.style.cssText = "display: none;";
                }
                for (let i = 0; i < 5; i++){
                    let pontos = document.forms["questionario_form"]["r"+(lista2[i])].value;
                    if (pontos == 1) {
                        document.getElementById("h"+lista2[i]+" 1").style.color = "green";
                    } else {
                        document.getElementById("h"+lista2[i]+" 1").style.color = "red";
                    }
                    pontuacao = pontuacao + (pontos*20)                    
                }                    

                document.getElementById("score_board").style.cssText = "display: block; display: flex;flex-direction: column;justify-content: center;align-content: center;width: 90%;margin-top: 15px;padding: 30px;border-radius: 20px;background-color: rgb(227, 225, 225);";

                if (pontuacao >= 50){
                    document.getElementById("pontuacao").innerHTML = "Passaste! Tiveste uma pontuação de "+pontuacao+"% &#128578;"

                } else {
                    document.getElementById("pontuacao").innerHTML = "Tiveste uma pontuação de "+pontuacao+"% &#128577;. Tenta outra vez!"
                }
                
                for (let i = 0; i < 5; i++){
                    solucoes = document.getElementById("s"+lista[i]);
                    solucoes.style.cssText = "display: block; display: flex;flex-direction: column;justify-content: center;align-content: center;width: 90%;margin-top: 15px;padding: 30px;border-radius: 20px;background-color: rgb(227, 225, 225);";
                }

                for (let i = 0; i < 5; i++){
                    document.getElementById("h"+lista2[i]+" 1").innerHTML = "Solução "+(i+1)+":"
                }

            } else {
                document.documentElement.scrollTop = 0;
                alert("Responde a todas as perguntas antes de submeter!")
            }

        }

});
}

//by: Miguel Almeida