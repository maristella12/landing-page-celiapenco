var email = document.getElementById('email');
var senha = document.getElementById('senha')

email.addEventListener('focus',()=>{

email.style.bordercolor = "#4A5F6A";

});

email.addEventListener('blur',()=>{

email.style.bordercolor = "#ccc";

});

// estilização de senhas
senha.addEventListener('focus',()=>{

password.style.bordercolor = "#4A5F6A";

});

password.addEventListener('blur',()=>{

password.style.bordercolor = "#ccc";

});



