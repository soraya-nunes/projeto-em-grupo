var form = document.getElementById('form')
var nome = document.getElementById('nome')
var email = document.getElementById('email')
var telefone = document.getElementById('telefone')
var mensagem = document.getElementById('mensagem')

var nomeValue = nome.value;
var emailValue = email.value;
var telefoneValue = telefone.value;
var mensagemValue = mensagem.value;

function checkInputs() {

  if(nomeValue == '') {
    // mostrar erro
    erro1.innerHTML = "Preencha esse campo.";
    document.getElementById('nome').style.borderColor= "#e74c3c"
  } else {
    // adicionar borda verde
    document.getElementById('email').style.borderColor= "#2ecc71"
    
  }
  
  if(emailValue == '') {
    // mostrar erro
    erro2.innerHTML = "Preencha esse campo."
    document.getElementById('erro1').style.color= "#e74c3c"
    document.getElementById('email').style.borderColor= "#e74c3c"
  } else {
    // adicionar borda verde
    document.getElementById('email').style.borderColor= "#2ecc71"
    
  }
  if(telefoneValue == '') {
    // mostrar erro
    erro3.innerHTML = "Preencha esse campo."
    document.getElementById('telefone').style.borderColor= "#e74c3c"
  } else {
    // adicionar borda verde
    document.getElementById('telefone').style.borderColor= "#2ecc71"
    
    
  }
  
  if(mensagemValue == '') {
    // mostrar erro
    erro4.innerHTML = "Preencha esse campo."
    document.getElementById('mensagem').style.borderColor= "#e74c3c"
  } else {
    // adicionar borda verde
    document.getElementById('mensagem').style.borderColor= "#2ecc71"
    
}


}
cliquebotao.addEventListener('click', checkInputs)