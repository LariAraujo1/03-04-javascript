function minhaFuncao(){
    console.log("testando")
}
 
//
minhaFuncao()

const minhaFuncaoEmVariavel=Function(txt){
    console.log(`Imprimindo: ${txt}`)
}

//
minhaFuncaoEmVariavel("Sapato")
minhaFuncaoEmVariavel("colher")
minhaFuncaoEmVariavel("5+5")
// minhaFuncaoEmVariavel("")

//
const a = 10;
const b = 20;
const c = 30;
const d = 40;
//o n1 e n2 roda pois pode-se colocar qualquer nome
//o parametro so existe dentro da função
function soma(n1+n2){
    console.log(`A soma entre ${n1} e ${n2} é=${n1}+${n2} `)
    console.log(`A sub entre ${n1} e ${n2} é=${n1}+${n2} `)
    console.log(`A div entre ${n1} e ${n2} é=${n1}+${n2} `)
    console.log(`A mult entre ${n1} e ${n2} é=${n1}+${n2} `)
    return
}

// function raizQuadrada (numero){
//     console.log(numero*numero)
// }
// raizQuadrada(2)
//outro jeito de fazer isso:

function raizQuadrada (numero){
    return numero*numero
     
}
console.log(raizQuadrada(2))

//função indica o valor que a função deve retornar quando chamada. Sem o `return` , a função retornará `None` por padrão

//
const raizquadrada= (numero)=>{
   return numero*numero
    
}
console.log(raizQuadrada(4))

// 
const testeArrow =()=>{
    console.log("Essa é uma arrow function")
}
testeArrow()

//

const parOuImpar=(n)=>{
    if(n%2===0){
        console.log("par")
        return
    }
    // console.log("Impar")ou
    console.log(`${n} é impar`)
}
//parOuImpar(numero que deseja saber se é par ou impar)
parOuImpar(3)

const lista = [ 1, 2, 3, 4, 5]
//array-lista- o primeiro elemento de uma array sempre sera 0, então o 1 (elemento) fica na posição 0
console.log(lista)
console.log(typeof lista)

//

const lista = [ 1, 2, 3, 4, 5]
console.log(lista)
console.log(typeof lista)

console.log(lista[1])//aparece a posicao
console.log(lista[5])//aparece o 6 pois esta na posição 5
//se colocar 6 ele nao vai pois so vai até a posição 5

//

// const lista = [ 1, 2, 3, 4, 5]
// console.log(lista)
// console.log(typeof lista)

// console.log(lista[1])
// console.log(lista[0])
// console.log(lista[6])
// console.log(lista.length)// largura da array

const lista2 = [ "Fusca", "variant", "Chevete", "Golf", "Opala", "Brasilia" ]
for(let exaltaSamba=0; exaltaSamba < lista.length; exaltaSamba++){
    // for: onde começa, ate onde vai e como se repete(++)
    // lenght retona quantos elementos há na lista
    //fica exaltaSamba menor que lista2.lenght pois como começa no 0 ele tem mais posições do que elementos.
    console.log(`Elemento da lista2: ${lista[exaltaSamba]}`)
} 

//escreva uma array chamado cores, dentro dessa array escreva , azul amarela, vermelha, verde, branca. Escreva uma estrutura de repetição laço for para retornar todos os elementos do array

const cores= [ "Azul", "Amarela", "Vermelha", "verde", "Branca" ]
for(let i=0; i < cores.length; i++){
    console.log(`Os elementos da lista de cores são: ${cores[i]}`)
} 

const nums = [1, 2, 3, 4, 5]

nums.forEach((n) =>{
    console.log(`O numero atual é: ${n}`)
})

// 

const numbers = [5, 12, 4, 22];
const otherNumber= [1, 2, 3];
const allNumbers = numbers.concat(otherNumbers);
console.log(allNumbers);

//

const text = "algum texto";
const text2 = "EITA JOVEM";
console.log(text.toUpperCase());
console.log(text.toLocaleLowerCase());

//

const array = ["a", "b", "c"];

array.push("d");

console.log(array);
console.log(array.length);

//

array.pop();

const itemRemovido = array.pop();

console.log(itemRemovido);
console.log(array);
console.log(array.length);

array.push("Dá", "Para", "Inserir", "Varios");
console.log(array); 

//

const letters = ["a", "b", "c"];
const letter = letter.shift();
console.log(letter);
console.log(letters);

letters.unshift("z", "x", "y"); //comenta um dos dois para ver o resultado
letters.unshift("p");
console.log(letters);
