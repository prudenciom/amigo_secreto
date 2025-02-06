//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Desafio Amigo Secreto - primeira etapa processo One
//Implemente uma função para adicionar amigos 

let nomes = [];

//Capturar o valor do campo de entrada para obter texto insediro pelo usuário
function adicionarAmigo(){
    let adicionarAmigo = document.querySelector ('input').value;

if (adicionarAmigo.trim()==='') {//solicitar o preenchimento do campo 'adicionar amigo' através do comando alert
    window.alert ('Por favor, digite um nome.');
} else if (nomes.length>=8) {
        window.alert ('Você já adicionou o número máximo de amigos');
    } else {
        nomes.push (adicionarAmigo);
        listaNomes (); // atualização dos nomes inseridos pelo usuário
       }
//Limpar o campo de entrada após aidiconar um nome
document.querySelector('input').value='';
}
// Implementação da função para atualizar a lista de amigos
function listaNomes (){
 let listaNomes = document.querySelector ('#listaAmigos');
 listaNomes.innerHTML =''; //limpeza da lista para próximas jogadas

 nomes.forEach(function(nome){
    listaNomes.innerHTML += `<li>${nome}</li>`;
 }) 
}
//Escreva função para sortear array
function sortearAmigo(){
    const amigoAleatorio = Math.floor(Math.random()*nomes.length);
    const amigoSorteado = nomes [amigoAleatorio];
    document.getElementById('resultadoAmigoSecreto').innerHTML =`Você sorteou <strong>${amigoSorteado}</strong>!`;
    }
