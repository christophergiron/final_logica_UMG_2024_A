
function primerResultado(){
    var Numero1 = parseInt(document.getElementById('Numero1').value)
    var Numero2 = parseInt(document.getElementById('Numero2').value)
    var Numero3 = parseInt(document.getElementById('Numero3').value)
    var resultado 
console.log(Numero1, Numero2, Numero3)
    if (Numero1 <= Numero3) {
        resultado = (Numero1) + (Numero2) + (Numero3);
        document.write("su resultado se sumo");
        document.write(resultado).value;
    }
}
function segundoResultado(){
     resultado = parseInt(Numero1), + parseInt(Numero2), + parseInt(Numero3);
    if (resultado >=10) {
        resultado = parseInt(Numero1) * parseInt(Numero2), - parseInt(Numero3);
        document.write('resultado', resultado);
    }
}