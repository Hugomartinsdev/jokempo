var rodada,p1,p2
p1=0
p2=0
rodada=0
function teste(params) {
    var j1,j2,
    j1=document.getElementById("j1").value
    j2=document.getElementById("j2").value 
    if(j1=='tesoura'&&j2=='papel'){
        document.getElementById("output1").innerHTML=`Jogador 1 jogou ${j1} e Jogador 2 jogou ${j2}<br>`
        document.getElementById("output2").innerText="o Jogador 1 ganhou"
        p1=p1+2
        document.getElementById("output3").innerHTML=`<br>O Jogador 1 tem ${p1} pontos.`
        rodada=rodada+1
        document.getElementById("rodadas").innerHTML=`Rodada: ${rodada}` 

    }
    else if(j1=='papel'&&j2=='pedra'){
        document.getElementById("output1").innerHTML=`Jogador 1 jogou ${j1} e Jogador 2 jogou ${j2}<br>`
        document.getElementById("output2").innerText="o Jogador 1 ganhou"
        p1=p1+2
        document.getElementById("output3").innerHTML=`<br>O Jogador 1 tem ${p1} pontos.`
        rodada=rodada+1
        document.getElementById("rodadas").innerHTML=`Rodada: ${rodada}`
    }
    else if(j1=='pedra'&&j2=='tesoura'){
        document.getElementById("output1").innerHTML=`Jogador 1 jogou ${j1} e Jogador 2 jogou ${j2}<br>`
        document.getElementById("output2").innerText="o Jogador 1 ganhou"
        p1=p1+2
        document.getElementById("output3").innerHTML=`<br>O Jogador 1 tem ${p1} pontos.`
        rodada=rodada+1
        document.getElementById("rodadas").innerHTML=`Rodada: ${rodada}`
    }else if(j2=='tesoura'&&j1=='papel'){
        document.getElementById("output1").innerHTML=`Jogador 1 jogou ${j1} e Jogador 2 jogou ${j2}<br>`
        document.getElementById("output2").innerText="o Jogador 2 ganhou"
        p2=p2+2
        document.getElementById("output3").innerHTML=`<br>O Jogador 2 tem ${p2} pontos.`
        rodada=rodada+1
        document.getElementById("rodadas").innerHTML=`Rodada: ${rodada}`
    }
    else if(j2=='papel'&&j1=='pedra'){
        document.getElementById("output1").innerHTML=`Jogador 1 jogou ${j1} e Jogador 2 jogou ${j2}<br>`
        document.getElementById("output2").innerText="o Jogador 2 ganhou"
        p2=p2+2
        document.getElementById("output3").innerHTML=`<br>O Jogador 2 tem ${p2} pontos.`
        rodada=rodada+1
        document.getElementById("rodadas").innerHTML=`Rodada: ${rodada}`
    }
    else if(j2=='pedra'&&j1=='tesoura'){
        document.getElementById("output1").innerHTML=`Jogador 1 jogou ${j1} e Jogador 2 jogou ${j2}<br>`
        document.getElementById("output2").innerText="o Jogador 2 ganhou"
        p2=p2+2
        document.getElementById("output3").innerHTML=`<br>O Jogador 2 tem ${p2} pontos.`
        rodada=rodada+1
        document.getElementById("rodadas").innerHTML=`Rodada: ${rodada}`
    }else if(j1=='tesoura'&&j2=='tesoura'){
        document.getElementById("output1").innerHTML=`Jogador 1 jogou ${j1} e Jogador 2 jogou ${j2}<br>`
        document.getElementById("output2").innerText="Deu empate"
        p1=p1+1
        p2=p2+1
        document.getElementById("output3").innerHTML=`<br>O Jogador 1 tem ${p1} e o Jogador 2 tem ${p2} pontos.`
        rodada=rodada+1
        document.getElementById("rodadas").innerHTML=`Rodada: ${rodada}`
    }
    else if(j1=='papel'&&j2=='papel'){
        document.getElementById("output1").innerHTML=`Jogador 1 jogou ${j1} e Jogador 2 jogou ${j2}<br>`
        document.getElementById("output2").innerText="Deu empate"
        p1=p1+1
        p2=p2+1
        document.getElementById("output3").innerHTML=`<br>O Jogador 1 tem ${p1} e o Jogador 2 tem ${p2} pontos.`
        rodada=rodada+1
        document.getElementById("rodadas").innerHTML=`Rodada: ${rodada}`
    }
    else if(j1=='pedra'&&j2=='pedra'){
        document.getElementById("output1").innerHTML=`Jogador 1 jogou ${j1} e Jogador 2 jogou ${j2}<br>`
        document.getElementById("output2").innerText="Deu empate"
        p1=p1+1
        p2=p2+1
        document.getElementById("output3").innerHTML=`<br>O Jogador 1 tem ${p1} e o Jogador 2 tem ${p2} pontos.`
        rodada=rodada+1
        document.getElementById("rodadas").innerHTML=`Rodada: ${rodada}`
    } else if(j1!="pedra"||j1!="tesoura"||j1!="papel"){alert("algo deu errado,valor não identificado")
alert("digite o valor novamente na caixa")}
    if (rodada==5 && p1>p2) {
        document.getElementById("final").innerHTML=`<b>Parábens o J1 é o vencedor com ${p1} pontos contra ${p2} pontos do J2<b>`
    }
    if (rodada==5 && p2>p1) {
        document.getElementById("final").innerHTML=`<b>Parábens o J2 é o vencedor com ${p2} pontos contra ${p1} pontos do J1<b>`
    }
}