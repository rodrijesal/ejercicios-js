const numeros = [];
for( let i = 0; i < 5; i++){
    const num = parseInt(prompt('ingrese un numero',''))
    numeros [i] = num;
}
console.log(numeros)

let mayor = 0;
for(let i = 0; i < numeros.length; i++){
    if(numeros[i]>mayor){
        mayor=numeros [i]
    }
}

document.write(`el numero mayor es ${mayor}`)