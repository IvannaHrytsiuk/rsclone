import { HeaderView } from '../scripts/header/view/headerView';

const toastr = require('toastr');

toastr.options.toastClass = 'toastr';

export const AuthClass = class {
    register(user) {
        const raw = JSON.stringify(user);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: raw,
            redirect: 'follow',
        };
        fetch('https://lit-citadel-91200.herokuapp.com/api/auth/signup', requestOptions)
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
        const raw = JSON.stringify(user);
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        };

        fetch('https://lit-citadel-91200.herokuapp.com/api/auth/signin', requestOptions)
            .then((response) => response.text())
            .then((result) => {
                if (result) {
                    const token = JSON.parse(result).accessToken;
                    const request = {
                        method: 'GET',
                        headers: {
                            'x-access-token': token,
                        },
                        redirect: 'follow',
                    };

                    fetch('https://lit-citadel-91200.herokuapp.com/api/test/user', request)
                        .then((response) => response.text())
                        .then((res) => {
                            localStorage.setItem('user', res);
                            const header = new HeaderView();
                            header.logIn();
                            document.querySelector('.closeModal').click();
                        })
                        .catch((error) => console.log('error', error));
                }
            })
            .catch((error) => console.log('error', error));
    }
};
