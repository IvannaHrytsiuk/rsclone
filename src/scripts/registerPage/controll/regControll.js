import { AuthClass } from '../../../apis/auth';

document.getElementById('rgisterForm').addEventListener('submit', (event) => {
    document.getElementById('password2Inp').setAttribute('pattern', document.getElementById('passwordInp').value);
    if (!document.getElementById('rgisterForm').checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    } else {
        const auth = new AuthClass();
        auth.register({
            fname: document.getElementById('firstnameInp').value,
            lname: document.getElementById('lastnameInp').value,
            email: document.getElementById('emailInp').value,
            password: document.getElementById('passwordInp').value,
            roles: ['user'],
            birth: document.getElementById('birthInp').value,
        });
    }
    document.getElementById('rgisterForm').classList.add('was-validated');
    event.preventDefault();
}, false);
