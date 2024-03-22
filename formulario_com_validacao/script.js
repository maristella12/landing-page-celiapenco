const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('passwordConfirmation')


form.addEventListener('submit',(event)=>{
event.preventDefault();
})

function checkInputUsername(){
const usernameValue = username.value 

if(username === ""){
errorInput(username, "Preencha um username!")
}

}

function errorInput(input,message){
const formItem = input.parentElement;
const textMessage = formItem.querySelector('a')

textMessage.innerText = message;

formItem.className = 'form-content error'

}