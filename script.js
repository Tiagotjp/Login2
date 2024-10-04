document.addEventListener('DOMContentLoaded', function() {
    const formContainer = document.querySelector('.form-container');
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const message = document.getElementById('message');
    const logoutBtn = document.getElementById('logoutBtn');
    const userInfo = document.getElementById('userInfo');
    const userNameElement = document.getElementById('userName');

    let users = [];

    showRegister.addEventListener('click', function(e) {
        e.preventDefault();
        formContainer.style.transform = 'translateX(-320px)';
    });

    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        formContainer.style.transform = 'translateX(0)';
    });

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;

        users.push({ name, email, password });
        showMessage('Usuário registrado com sucesso!');
        this.reset();
        formContainer.style.transform = 'translateX(0)';
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;

        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            showMessage('Usuário Conectado com Sucesso');
            userNameElement.textContent = `Usuario Conectado : ${user.name}`;
            userInfo.style.display = 'block';
            logoutBtn.style.display = 'block';
            this.reset();
        } else {
            showMessage('Email ou senha incorretos', 'error');
        }
    });

    logoutBtn.addEventListener('click', function() {
        showMessage('Usuário desconectado com sucesso');
        this.style.display = 'none';
        userInfo.style.display = 'none';
    });

    function showMessage(text, type = 'success') {
        message.textContent = text;
        message.style.display = 'block';
        message.style.backgroundColor = type === 'success' ? 'rgba(0, 255, 0, 0.8)' : 'rgba(255, 0, 0, 0.8)';
        setTimeout(() => {
            message.style.display = 'none';
        }, 3000);
    }
});
