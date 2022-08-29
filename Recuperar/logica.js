const retrievePassword = () => {
    const users = getUsers()
    const user  = users.find(u => u.cpf === CPF.value);

    if(!user) {
        document.getElementById('senhaRec').innerHTML = "CPF não encontrado."
        return
    }

    document.getElementById('senhaRec').innerHTML = 'senha: ' + user.senha_
}

const getUsers = () => {
    const users = localStorage.getItem('users');

    if(!users) return []

    return JSON.parse(users);
}

function mask_cpf(c){
    let caracteres = c.target.value.replace(/\D/g,"");
    caracteres =caracteres.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4");
    c.target.value = caracteres;
}

const input_cpf = document.getElementById("CPF");
input_cpf.addEventListener('keyup', mask_cpf);

