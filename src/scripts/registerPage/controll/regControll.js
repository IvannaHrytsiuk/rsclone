import { AuthClass } from '../../../apis/auth';

// document.querySelector('.registerBtn').addEventListener('click', () => {
// const auth = new AuthClass();
// auth.register({
//     fname: 'iva',
//     lname: 'sdfsdf',
//     email: 'izk@gmail.com',
//     password: 'admin123',
//     roles: ['user'],
//     birth: '2009-01-01',
// });
// console.log(document.getElementById('rgisterForm').checkValidity());
// });

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
}, false);
