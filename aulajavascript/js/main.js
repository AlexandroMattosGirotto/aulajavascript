var nome = "Nome";
var idade = 150;
var idade2 = 2;
var mensagem = "Após esse popup vai ser mostrado a soma, subtração, divisão e multiplicação de 8 e 4"
var n1 = 8;
var n2 = 4;
alert(nome + " sua idade é " + idade + " anos");
alert("Em 2023 sua idade vai ser ");
alert(idade + idade2 +" anos");
alert(mensagem);
alert("Soma " + (n1 + n2));
alert("Subtração " + (n1 - n2));
alert("Divisão " + (n1 / n2));
alert("Multiplicação " + (n1 * n2));

//Quando um numero ou palavra estiver entre "aspas" o js vai reconhecer como -string (caracter)-
//Quando um numero não estiver entre "aspas" o js vai reconhecer como -integer (inteiro)-
//O sinal de + na string ele vai -concatenar (juntar)-
//O sinal de + no integer ele vai -somar-
//O sinal de - no integer ele vai -subtrair-
//O sinal de div no integer ele vai -dividir-
//O sinal de * no integer ele vai -multiplicar-

// Para comentário em apenas uma linha se utiliza apenas //(Barra Barra)
/*Para
Comnetar em
Varias linhas 
Se utiliza (Barra e Asterisco) para inicar comentário,
O comentario pode ter qualquer tamanho desde que esteja aqui dentro
(Asterisco e Barra) para finalizar o comentário
*/

//Para visualizar o console no navegador pressione F12, e vá na aba console
//Para inserir dados para ser visualizados no console segue o item -console_1.1-

//--console_1.1-------------//
console.log(nome);
console.log(idade + idade2);
//--------------------------//

//(variavel.replace()); é para trocar uma variavel por outra no console.log e ou alert
//variavel.toUperCase()); é para deixar todo o texto em maiusculo
//variavel.toLowerCase()); é para deixar todo o texto em minusculo
var frase= "Brazil tem o melho time do mundo";
console.log(frase.replace("Brazil" , "Brasil"));
alert(frase.replace("Brazil","Brasillll"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
alert(frase.toUpperCase());
alert(frase.toLowerCase());

/*---------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------*/

//Você pode criar uma lista para ser exibida no alert e ou no console seguindo item -lista_1.1-
//--------------lista_1.1------------------//
var lista =["Abacaxi","Limão","Carambola"];
alert(lista);
console.log(lista);
//----------------------------------------//

//Você escolher algum item a ser exibido -lista_1.2-
//---------------lista_1.2----------------//
var lista1 =["Couve","Tomate","Cenoura"];
alert(lista1[0]);
console.log(lista1[1]);
//---------------------------------------//

//Você adicionar algum item -variavel.push-("item adicionado") a ser exibido -lista_1.3-
//-----------lista_1.3-----------------//
lista1.push("Bróculis");
console.log(lista1);
//Aqui abaixo se reverte a lista do ultimo ao primeiro (lista1.reverse());
;console.log(lista1.reverse());
//------------------------------------//

//Você remover algum -variavel.pop- item a ser exibido -lista_1.4-

//-----------lista_1.4-----------------//
lista1.pop("");
console.log(lista1);
//-------------------------------------//

//Aqui você pode ver quantidade de itens na lista
console.log("quantidade de itens na lista " + lista.length);
alert("quantidade de itens na lista " + lista.length);

//Aqui abaixo (variavel.toString()); ele deixa de mostrar como array (elementos) e começa a tratar como string o itens dentro da variavel
console.log(lista1.toString());

//Aqui abaixo (variavel.join(" Elemento para junção ")); ele deixa de mostrar como array (elementos) e começa a tratar como string o itens dentro da variavel e com join ele cria um elemento de junção.
console.log(lista.join(" - "));

//------------------------------------------------------------------------------//
//Aqui você pode criar um tipo de dicionario para buscar sobre um determinado item  
var fruta = {nome:"morango", cor:"vermelho"}
console.log(fruta.nome);
console.log(fruta.cor);

//Aqui você pode criar vários de dicionarios para buscar sobre determinados itens.
var frutas = [{nome:"morango", cor:"vermelho"},{nome:"Pêra", cor:"amarelo"},{nome:"uva", cor:"verde"}]
console.log(frutas);
alert(frutas[2].cor);

/*---------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------*/

//O comando -if_(se)- -else_(senão)- são comando de escolhas como no -escolha_1.1-
//----escolha_1.1----------// 
var idade1 = 18;
if (idade1 >= 18) {
alert("Maior de idade");
}
else{
alert("Menor de idade");
};
//-----------------------//

//O comando var -variavel- = prompt("mensagem") vai criar uma mensagem com uma caixa de texto para o usuário responder
//O que o usuario responder vai ser carregado na -variavel- para o sistema como no -escolha_1.2-
//---------------escolha_1.2-----------------//
var idade2 = prompt("Qual é sua idade ? ");
if (idade2 >= 18) {
alert("Maior de idade");
}
else{
alert("Menor de idade");
};
//------------------------------------------//

//O comando while -enquanto- vai criar uma estrutura de repetição até chegar no valor estipulado nele como no -repete_1.1-
//------------repete_1.1------------//
var valor5 = 0;
while (valor5 <= 6){
console.log(valor5);
alert(valor5);
//Nesse exepmlo pode se usar tanto
//variavel = variavel +1
//       ou
//variavel++
//Que vai ser o mesmo comando
valor5 = valor5 + 1;
};
//-------------------------------//

//O comando for -para- cria uma lista de repetição como no -repete_1.2-
//------------------------repete_1.2---------//
var repetir;
for(repetir = 0; repetir <= 15; repetir++){
alert(repetir);
};
//------------------------------------------//

//O comando abaixo é para mostrar a data
var d = new Date();
//Para mostrar a data completa
//alert("mensagem para o usuário" + (d))
alert("Estámos no " + d)
//Para mostrar o mês
//alert("mensagem para o usuário" + (d.getMonth()+1))

alert("Estámos no mês " + (d.getMonth()+1));