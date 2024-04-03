console.log(document.body)
console.log(document.body.childNodes)
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes[1].textContent)

// 2- selecionando por tag
const listItens = document.getElementsByTagName("li")
console.log(listItens)

//selecionando por id
const title = document.getElementById("title")
console.log(title)

const products= document.getElementsByClassName("product");
console.log(products)

const productsQuery=document.querySelectorAll(".product")
console.log(products)

const mainContainer=document.querySelector("#main-container");
console.log(main-container);

const p = document.createElement("p");
const header = title.parentElement;
console.log(header) 
header.insertBefore(p, title);
console.log(header) 


const navLinks = document.querySelector("nav ul");
const li = document.createElement("li");
navLinks.appendChild(li);