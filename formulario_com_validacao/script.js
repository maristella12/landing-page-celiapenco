const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('passwordConfirmation')


form.addEventListener('submit',(event)=>{
event.preventDefault();

checkForm();
})

email.addEventListener('blur',() => {
   checkInputEmail();
})

username.addEventListener('blur',() => {
   checkInputUsername();})

//PEGA O TEXTO INSERIDO NO CAMPO
function checkInputUsername(){

const usernameValue = username.value;

if(usernameValue === ""){
//MOSTRAR O AVISO E MOSTRAR A MENSAGEM DE ERRO... 
//ATRAVÉS DA CHAMADA DA FUNÇÃO
errorInput(username, "Preencha um username!")
   }else{
const formItem = username.parentElement;
                 formItem.className = 'form-content'
   }

}

function checkInputEmail(){
const emailValue = email.value;
if(emailValue === ""){
errorInput(email,"O e-mail é obrigatório.")
}else{
   const formItem = email.parentElement;
    formItem.className = 'form-content'
   }

}



function checkInputPassword(){
const passwordValue = password.value;

if(passwordValue === ""){
   errorInput(password,"A senha é obrigatória.")
}else if(passwordValue.length<8){
   errorInput(password,"A senha precisa ter no mínimo 8 caracteres")
}else{
const formItem = password.parentElement;
                 formItem.className = 'form-content'
}
   }



function checkInputPasswordConfirmation(){
//a const abaixo serve para se referir aos valores inseridos no mesmo mas 
//sem o '.value' assim fica com o código mais limpo
const passwordValue = password.value;
const confirmationPasswordValue = passwordConfirmation.value;

if(confirmationPasswordValue === ""){
   errorInput(passwordConfirmation,"A confirmação de senha é obrigatória.")
}else if(confirmationPasswordValue !==passwordValue){
   errorInput(passwordConfirmation,"As senhas não são iguais")
}else{
const formItem = passwordConfirmation.parentElement;
                 formItem.className = 'form-content'
}
   }




function checkForm(){

checkInputUsername();
checkInputEmail();
checkInputPassword();
checkInputPasswordConfirmation();

const formItems = form.querySelectorAll('form-content')

const isValid = [...formItems].every((item) =>{

return item.className === 'form-content'
});
if(isValid){

alert('CADASTRADO COM SUCESSO')
}
}




function errorInput(input,message){
const formItem = input.parentElement; //ACESSA O ELEMENTO PAI QUE É A DIV 'FORM-CONTENT'
const textMessage = formItem.querySelector('a') // ACESSA O ITEM 'a' DESSA DIV
//atualiza o valor do texto para a 'message'
textMessage.innerText = message;

formItem.className = 'form-content error'

}

