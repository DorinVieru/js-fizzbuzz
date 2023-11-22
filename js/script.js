// PRENDO IL VALORE UL DAL DOCUMENTO HTML
const ul = document.querySelector("ul.list-group");

// IMPOSTO IL CICLO DI NUMERAZIONE
for (let n = 1; n <= 100; n++){

    // MULTIPLI DI 3 E DI 5
    if (n % 3 == 0 && n % 5 == 0){
        element = `${n} "FizzBuss"`;
        console.log(element);
    }
    // MULTIPLI DI 5
    else if (n % 5 == 0) {
        element = `${n} "Fizz"`;
        console.log(element);
    }
    // MULTIPLI DI 3
    else if (n % 3 == 0){
        element = `${n} "Buss"`;
        console.log(element);
    }
    // NESSUN MULTIPLO
    else{
        let element = `${n}`;
        console.log(element);
    }

    
}