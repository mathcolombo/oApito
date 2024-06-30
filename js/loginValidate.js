const users = [
    {
        login: 'admin',
        password: 'Admin123'
    },
    {
        login: 'visitante',
        password: '123'
    },
    {
        login: 'matheus',
        password: 'Matheus123'
    },
    {
        login: 'cadu',
        password: 'Cadu123'
    },
    {
        login: 'marco',
        password: 'Marco123'
    },
    {
        login: 'caio',
        password: 'Caio123'
    },
    {
        login: 'wallace',
        password: 'Wallace123'
    }
]

function logar() {
    let getUser = document.getElementById('user').value
    let getPassword = document.getElementById('password').value
    let loginValidate = false;

    for(let c in users) {
        if((getUser == users[c].login) && (getPassword == users[c].password)) {
            loginValidate = true;
            break;
        }
    }

    if(loginValidate == true) {
        location.href = 'html/home.html';
    } else {
        alert('Usuário ou senha inválidos!!');
    }
}