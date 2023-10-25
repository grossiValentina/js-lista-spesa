// array
const shoppingList = ["pane", "pasta", "latte", "cereali", "olio"];

// ciclo for 
//for (let i = 0; i < shoppingList.length; i++) {
  //  const curList = shoppingList[i];
    //console.log(shoppingList[i])
    
//}


// ciclo while
let i = 0;
let listString = "";

while (i < shoppingList.length) {
    const curList = shoppingList[i];
    console.log(shoppingList[i]);
     
    listString += `<li class="prodotto">${shoppingList[i]}</li>`;

    i++;
    
}

// stampo in pagina
document.querySelector("ul").innerHTML = listString;




