
email = document.getElementById('email').value;
senha = document.getElementById('senha').value;

function Entrar() {
    for (let key = 1; key < array.length; key++) {
        let dados = localStorage.getItem(key); //armazena os dados da key
        var users = JSON.parse(dados);

        if (users.email_ == email & users.senha_ == senha){
            window.location.href = '../plataforma/conteudo.html';
        }else{
            document.getElementById('confirmar').innerHTML = 'Email ou senha incorretos!'
        }

    }

    
    
}

const getUsers = () => {
    const users = localStorage.getItem('users');

    if(!users) return []

    return JSON.parse(users);
}


const signIn = (e) => {
    e.preventDefault()
    document.getElementById('confirmar').innerHTML = ''

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const users = getUsers();
    const loggedUser = users.find(u => u.email_ === email && u.senha_ === senha)

    if(loggedUser) { 
        alert('login realizado com sucesso!')
        localStorage.setItem('loggedUser', JSON.stringify(loggedUser))
        window.location.href = '../avaliacao/avaliacao.html'
        return 
    }

    document.getElementById('confirmar').innerHTML = 'Email ou senha incorretos!'
}

function Registrar() {
    window.location.href = '../Registrar/registrar.html';
}


const passwordInput = document.getElementById("password");
const eyepng = document.getElementById("eyepng");


function ViewPassword() {
    var view = document.getElementById('eyepng');
    var input = document.getElementById('senha');

    input.setAttribute('type', (input.type === 'password' ? 'text' : 'password'));

    switch (input.type) {
        case 'password': {

            eyepng.setAttribute("src", "img/icon/eyestranc.png");
        } break;

        case 'text': {

            eyepng.setAttribute("src", "img/icon/eyesopen.png");
        } break;
    }
}

