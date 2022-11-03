const metros = 350;
let transportes = '';

if(metros > 0 && metros <= 1000){
    transportes = 'caminando'
}else if(metros > 1000 && metros <=10000){
    transportes = 'bicicleta'
}else if(metros > 10000 && metros <= 30000){
    transportes = 'subte'
}else if(metros > 30000 && metros <= 100000){
    transportes = 'auto'
}else if(metros > 100000){
    transportes = 'avion'
}
console.log(`para ${metros} metros recomendamos ir ${transportes}`);