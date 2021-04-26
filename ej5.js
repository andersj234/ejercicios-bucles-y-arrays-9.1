let suma =0
let cantidadNumeros =parseInt(window.prompt('escoge la cantidad de numeros que quieres'))
for(let i=1;i<=cantidadNumeros; i++){
    let numero = parseInt(window.prompt('introduce los numeros que quieres'))
    suma =suma+numero
    console.log(suma)
    
}