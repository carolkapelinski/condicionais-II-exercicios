const number = Number(prompt("Digite um número:"))

//a
if(number % 2 === 0){
    if(number % 3 === 0){
        console.log("O número é divisível por 2 e 3.")
    } else{
        console.log("O número é divisível por 2, mas não por 3.")
    }
} else {
    console.log("O número não é divisível por 2 e 3.")

}

//b
if(number % 2 === 0 && number % 3 === 0){
    console.log("O número é divisível por 2 e por 3.")

}

if(number % 2 === 0 || number % 3 === 0){
    console.log("O número é divisível por 2 ou por 3.")
} else{
    console.log("O número não é divisível nem por 2 e nem por 3.")
}