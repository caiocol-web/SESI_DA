function calcular() {
var salario = document.getElementById("salario").value;
var nome = document.getElementById("nome").value;
var emprego = document.getElementById("emprego").value;
var despesas = document.getElementById("despesas").value;

if(salario == "" ||despesas == "" || nome == ""){
    alert("Campos obrigatorios nao preenchidos!")
    var salario = document.getElementById("salario").value= "";
var nome = document.getElementById("nome").value= "";
var emprego = document.getElementById("emprego").value= "";
var despesas = document.getElementById("despesas").value= "";
}
else{
var novo_emprego = localStorage.setItem("emprego", emprego);
var novo_salario =localStorage.setItem("salario", salario);
var novo_nome =localStorage.setItem("nome", nome);
var novo_despesas =localStorage.setItem("despesas", despesas);

document.getElementById('oculto1').style.display = 'block';
}
}