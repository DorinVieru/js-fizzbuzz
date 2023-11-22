// PRENDO IL VALORE UL DAL DOCUMENTO HTML
const ul = document.querySelector("ul.list-group");

// IMPOSTO IL CICLO DI NUMERAZIONE
for (let n = 1; n <= 100; n++){
    let element = `<li class="list-group-item">${n}</li>`;
    ul.innerHTML += element;
    console.log(n);
}