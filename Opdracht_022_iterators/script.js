/*
const colors = ["yellow", "blue", "red", "orange"];

// oude manier while 
const i = 0;
while (i < colors.length) {
  console.log(colors[i]);
  i++;
}

// for loop
for (i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// niewe manier array method
colors.forEach(element => console.log(element));
*/
/*
1. Mijn for loop zijn 3 regels en mijn while loop 5.
2. Mijn forEach method is 2 regels.
3. - Je kan niet per ongeluk een foutje maken, waardoor je in een oneindige loop terechtkomt.
   - In de array method zitten minder variabelen (geen "i"), dat maakt het makkelijker leesbaar.
4.  Je kan geen array method toepassen op een object. 
    Zie mijn code over een object hieronder: deze manier itereerd over de properties van een object.
    De lijst wordt niet aangemaakt voor het object.
*/

const object = { a: 1, b: 2, c: 3, d: 4, e: 5};
/*
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
*/
for (property in object) {
    console.log(object[property]);
  }

