key = 0;

function Registrar(){
    key += 1;

    let dados = localStorage.getItem(key); //armazena os dados da key
    var users = JSON.parse(dados);

    nome = document.getElementById('nome').value;
    date = document.getElementById('date').value;
    id = document.getElementById('id').value;
    house = document.getElementById('house').value;

    var cadastro = {nome_ : nome, senha_ : users.senha_, email_ : users.email_, conf_senha_ : users.conf_senha_, date_ : date, id_ : id, house_ : house};
    
    // armazenar as informações no navegador (Local Storage)
    localStorage.setItem(key, JSON.stringify(cadastro));
}

const updateUserData = (e) => {
    e.preventDefault();

    console.log('updating');
    const nome = document.getElementById('nome').value;
    const date = document.getElementById('date').value;
    const cpf = document.getElementById('id').value;
    const house = document.getElementById('house').value;

    const data  = {
        nome, 
        date,
        cpf,
        house
    }

    console.log({ data, getUsers });
    const users = getUsers();
    const latestUser = users[users.length - 1];

    const updatedUser = {
        ...latestUser,
        ...data,
    }

    console.log({ updatedUser });

    users[users.length - 1] = updatedUser;
    localStorage.setItem('users', JSON.stringify(users));

    window.location.href = '../Login/login.html';
}



function mask_cpf(c){
    let caracteres = c.target.value.replace(/\D/g,"");
    caracteres =caracteres.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4");
    c.target.value = caracteres;
}

const input_cpf = document.getElementById("id");
input_cpf.addEventListener('keyup', mask_cpf);