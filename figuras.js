
function perimetroCuadrado(lado){
    return lado * 4;
}
//Interactuando con el HTML 

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value;

    const perimetro = perimetroCuadrado(value)
    alert("El perimetro de su cuadrado es ${perimetro}")
}

function calcularAreaCuadrado(){
    
}
