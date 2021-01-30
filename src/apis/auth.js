import { HeaderView } from '../scripts/header/view/headerView';

const toastr = require('toastr');

toastr.options.toastClass = 'toastr';

export let usersArr;

export const AuthClass = class {
    users() {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
        };
        fetch('http://localhost:3000/users', requestOptions)
            .then((response) => response.text())
            .then((res) => {
                usersArr = JSON.parse(res);
            })
            .catch((error) => console.log('error', error));
    }

    register(user) {
        const raw = JSON.stringify(user);
        const request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: raw,
            redirect: 'follow',
        };
        fetch('http://localhost:3000/users', request)
            .then((response) => {
                response.text();
                if (response.status === 200) {
                    toastr.success('You are successfully registered!');
                    setTimeout(() => {
                        document.querySelector('.logoLink').click();
                    }, 1000);
                } else if (response.status === 400) {
                    toastr.warning('Email is already in use!');
                } else {
                    toastr.error('Something went wrong. Please, try again later.');
                }
                document.getElementById('rgisterForm').reset();
                document.getElementById('rgisterForm').classList.remove('was-validated');
            })
            .catch((error) => console.log('error', error));
    }

    login(user) {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        };

        fetch(`http://localhost:3000/users?email=${user.email}`, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                const res = JSON.parse(result);
                console.log(res);
                if (res === []) {
                    toastr.error('You are not registered');
                } else if (res[0].password === user.password) {
                    localStorage.setItem('user', JSON.stringify(res));
                    const header = new HeaderView();
                    header.logIn();
                    document.querySelector('.closeModal').click();
                    toastr.success('Welcome :)');
                } else {
                    toastr.error('Incorect login or password');
                }
            })
            .catch((error) => console.log('error', error));
    }
};
