// PRENDO IL VALORE UL DAL DOCUMENTO HTML
const ul = document.querySelector("ul.list-group");

// IMPOSTO IL CICLO DI NUMERAZIONE
for (let n = 1; n <= 100; n++){

    // MULTIPLI DI 3 E DI 5
    if (n % 3 == 0 && n % 5 == 0) {
        element = `<li class="list-group-item acquamarine">${n} "FizzBuss"</li>`;
        console.log(element);
        ul.innerHTML += element;
    }
    // MULTIPLI DI 5
    else if (n % 5 == 0) {
        element = `<li class="list-group-item green">${n} "Fizz"</li>`;
        console.log(element);
        ul.innerHTML += element;
    }
    // MULTIPLI DI 3
    else if (n % 3 == 0) {
        element = `<li class="list-group-item yellow">${n} "Buss"</li>`;
        console.log(element);
        ul.innerHTML += element;
    }
    // NESSUN MULTIPLO
    else {
        let element = `<li class="list-group-item">${n}</li>`;
        console.log(element);
        ul.innerHTML += element;
    }

    
}