alert("Regras:escolha entre pedra papel e tesoura aperte em jogar depois de 5 turnos quem tiver a maior pontuação entre você e o computador ganha ");
alert("vitoria:2 ponto,empate:1 pontos,derrota:0 pontos");
alert("Toda vez que uma rodada acabar aperte no botão apagar para limpar as estruturas da radada passada");
var r=0,pj=0,pb=0
function partida(){
var j1,b1
j1=document.getElementById("escolha").value
b1=Math.floor(Math.random()*3)
switch (b1) {
    case 0:
        b1="pedra"
        document.getElementById("ib").src="https://www.bigmae.com/wp-content/uploads/2010/07/pedra-100x100.png";
        break;
    case 1:
        b1="papel"
        document.getElementById("ib").src="https://www.bigmae.com/wp-content/uploads/2010/07/jogo-papel-pedra-tesoura.jpg"
        break;
        case 2:
        b1="tesoura"
        document.getElementById("ib").src="https://www.bigmae.com/wp-content/uploads/2010/07/tesoura-100x100.png"
        break;
}
switch (j1) {
    case "pedra":
        document.getElementById("ij").src="https://www.bigmae.com/wp-content/uploads/2010/07/pedra-100x100.png"        
        break;

    case "papel":
        document.getElementById("ij").src="https://www.bigmae.com/wp-content/uploads/2010/07/jogo-papel-pedra-tesoura.jpg"
        break;
    case "tesoura":
        document.getElementById("ij").src="https://www.bigmae.com/wp-content/uploads/2010/07/tesoura-300x300.png"
    break;
}//imagens temporarias, até eu achar uma melhor
if (j1 == "pedra" && b1 == "tesoura"||j1 == "papel" && b1 == "pedra"||j1 == "tesoura" && b1 == "papel") {
    document.getElementById("resultado").innerHTML="<b>Parabens!!!!Jogador ganhou a rodada<b>";
    r++
    pj=pj+2
    document.getElementById("pj").innerHTML=pj+"pontos";
    document.getElementById("pb").innerHTML=pb+"pontos";
    document.getElementById("r").innerHTML="<h2>Rodada: "+r+"<h2>";
} if (b1 == "pedra" && j1 == "tesoura"||b1 == "papel" && j1 == "pedra"||b1 == "tesoura" && j1 == "papel") {
    document.getElementById("resultado").innerHTML="<b>Você perdeu!!!!Bot ganhou a rodada<b>";
    r++
    pb=pb+2
    document.getElementById("pj").innerHTML=pj+"pontos";
    document.getElementById("pb").innerHTML=pb+"pontos";
    document.getElementById("r").innerHTML="<h2>Rodada: "+r+"<h2>";
   }
    if (j1 == "pedra" && b1 == "pedra"||j1 == "papel" && b1 == "papel"||j1 == "tesoura" && b1 == "tesoura") { 
    document.getElementById("resultado").innerHTML="<b>Que pena deu empate!!!<b>";
    r++
    pj++
    pb++
    document.getElementById("pj").innerHTML=pj+"pontos";
    document.getElementById("pb").innerHTML=pb+"pontos";
    document.getElementById("r").innerHTML="<h2>Rodada: "+r+"<h2>";
}
if(r==5 && pb>pj){
    document.getElementById("rfinal").innerHTML="<b>Que pena você perdeu!!<b>";
    setTimeout(alert,300,"clique no botão reiniciar para jogar novamente!!!!!");
    setTimeout(alert,300,"NÃO DESOBEDEÇA!!!!!");
}else if(r==5 && pb<pj){
    document.getElementById("rfinal").innerHTML="<b>Parabéns você ganhou!!<b>"
    setTimeout(alert,300,"clique no botão reiniciar para jogar novamente!!!!");
    setTimeout(alert,300,"NÃO DESOBEDEÇA!!!!!");
}else if (r==5 && pb==pj) {
    document.getElementById("rfinal").innerHTML="<b>Nossa que incrivel deu empate!!<b>"
    setTimeout(alert,300,"clique no botão reiniciar para jogar novamente!!!!!");
    setTimeout(alert,300,"NÃO DESOBEDEÇA!!!!!");
}if (r == 6) {
    alert("aperte no botão de reiniciar")
    document.getElementById("r").innerHTML="<h2>Número de rodada invalida,reinicie o jogo<h2>"
    document.getElementById("ij").src=" ";
    document.getElementById("ib").src=" ";
    document.getElementById("resultado").innerHTML=" ";
    document.getElementById("pj").innerHTML=" ";
    document.getElementById("pb").innerHTML=" ";
    document.getElementById("rfinal").innerHTML=" ";
}if (r ==7) {
    document.getElementById("r").innerHTML="<h2>Número de rodada invalida,reinicie o jogo<h2>"
    document.getElementById("ij").src=" ";
    document.getElementById("ib").src=" ";
    document.getElementById("resultado").innerHTML=" ";
    document.getElementById("pj").innerHTML=" ";
    document.getElementById("pb").innerHTML=" ";
    document.getElementById("rfinal").innerHTML=" ";
    alert("EU DISSE PARA CLICAR NO BOTÃO REINICIAR!!!!!")
}
if (r == 8) {
    document.getElementById("r").innerHTML="<h2>Número de rodada invalida,reinicie o jogo<h2>"
    document.getElementById("ij").src=" ";
    document.getElementById("ib").src=" ";
    document.getElementById("resultado").innerHTML=" ";
    document.getElementById("pj").innerHTML=" ";
    document.getElementById("pb").innerHTML=" ";
    document.getElementById("rfinal").innerHTML=" ";
    alert("SE VOCÊ CLICAR EM QUALQUER OUTRO BOTÃO EU VOU PERDER A PACIENCIA!!!!!")
}
if (r == 9) {
    document.getElementById("r").innerHTML="<h2>Número de rodada invalida,reinicie o jogo<h2>"
    document.getElementById("ij").src=" ";
    document.getElementById("ib").src=" ";
    document.getElementById("resultado").innerHTML=" ";
    document.getElementById("pj").innerHTML=" ";
    document.getElementById("pb").innerHTML=" ";
    document.getElementById("rfinal").innerHTML=" ";
    alert("ESSE É O ÚLTIMO AVISO!!!!!!")
}
if (r == 10) {
    document.getElementById("r").innerHTML="<h2>Número de rodada invalida,reinicie o jogo<h2>"
    alert("PRONTO APERTEI PARA VOCÊ FELIZ AGORA!!!!!")
    reiniciar()
}
}
function apagar(){
    var a1=" ",a2=" ",a3=" ",a4=" ";
    document.getElementById("resultado").innerHTML=a1;
    document.getElementById("rfinal").innerHTML=a2;
    document.getElementById("ij").src=a3;
    document.getElementById("ib").src=a4;
}
function reiniciar(params) {
    r=0
    pb=0
    pj=0
    document.getElementById("resultado").innerHTML=" ";
    document.getElementById("r").innerHTML="<h2>Rodada: "+r+"<h2>";
    document.getElementById("pj").innerHTML=" ";
    document.getElementById("pb").innerHTML=" ";
    document.getElementById("rfinal").innerHTML=" ";
    document.getElementById("ij").src=" ";
    document.getElementById("ib").src=" ";
}