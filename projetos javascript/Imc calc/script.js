
function calcular(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var resultado = peso / (altura * 2);
    var final_result = resultado.toFixed(2);

    document.getElementById("resultado").innerHTML = "Seu IMC é " + final_result;

}