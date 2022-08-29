key = 0;

function Continuar(){
    key = (localStorage.length + 1);

    email = document.getElementById('email').value;
    senha = document.getElementById('senha').value;
    conf_senha = document.getElementById('conf_senha').value;

    var cadastro = {senha_ : senha, email_ : email, conf_senha_ : conf_senha};
    
    // armazenar as informações no navegador (Local Storage)
    localStorage.setItem(key, JSON.stringify(cadastro));

    window.location.href = '../Continuacao/continuacao.html';
}

const register = () => {
    const email_ = document.getElementById('email').value;
    const senha_ = document.getElementById('senha').value;

    const user = {
        email_, 
        senha_
    }

    const users = getUsers()
    
    if(!users.length) {
        user.id = 1;
        const newUsers = JSON.stringify([user])
        localStorage.setItem('users', newUsers)
        window.location.href = '../Continuacao/continuacao.html';
        return
    }

    const latestUser = users[users.length - 1]

    user.id = latestUser.id + 1;
    const newUsers = [...users, user]
    localStorage.setItem('users', JSON.stringify(newUsers))

    
    window.location.href = '../Continuacao/continuacao.html';
    
}

const getUsers = () => {
    const users = localStorage.getItem('users');

    if(!users) return []

    return JSON.parse(users);
}


const verifyEmail = (email) => {
    const users = getUsers();
    const alreadyExists = users.some(u => u.email_ === email)

    return alreadyExists;
}

const clearMessages = function() {
    document.getElementById('confirmar').innerHTML = '';
    document.getElementById('confirmar').innerHTML = '';
}


function VerificarSenha(e){
    e.preventDefault()
    clearMessages();

    email = document.getElementById('email').value;
    senha = document.getElementById('senha').value;
    conf_senha = document.getElementById('conf_senha').value;

    if (senha != conf_senha){
        document.getElementById('confirmar').innerHTML = 'Senhas não conferem!';
    }
    else if (verifyEmail(email)){
        document.getElementById('confirmar').innerHTML = 'Email já cadastrado!';
    }
    else{
        register()
        // Continuar()
    }
}

const passwordInput = document.getElementById("password");
const eyepng1 = document.getElementById("eyepng1");
const eyepng2 = document.getElementById("eyepng2");

function ViewPassword1() {
    var view = document.getElementById('eyepng1');
    var input = document.getElementById('senha');

    input.setAttribute('type', (input.type === 'password' ? 'text' : 'password'));

    switch (input.type) {
        case 'password': {

            eyepng1.setAttribute("src", "img/icon/eyestranc1.png");
        } break;

        case 'text': {

            eyepng1.setAttribute("src", "img/icon/eyesopen1.png");
        } break;
    }
}

function ViewPassword2() {
    var view = document.getElementById('eyepng2');
    var input = document.getElementById('conf_senha');

    input.setAttribute('type', (input.type === 'password' ? 'text' : 'password'));

    switch (input.type) {
        case 'password': {

            eyepng2.setAttribute("src", "img/icon/eyestranc2.png");
        } break;

        case 'text': {

            eyepng2.setAttribute("src", "img/icon/eyesopen2.png");
        } break;
    }
}

