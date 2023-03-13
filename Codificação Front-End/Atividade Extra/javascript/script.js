// Criando variáveis:
let email = document.getElementById("email");
let senha = document.getElementById("senha");

function retornoDoLogin(event){
    event.preventDefault();

    let emailDigitado = email.value;
    let senhaDigitada = senha.value;

    console.log(emailDigitado);
    console.log(senhaDigitada);
}