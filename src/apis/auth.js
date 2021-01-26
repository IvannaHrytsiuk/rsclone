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
        fetch('http://localhost:8080/api/auth/signup', requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log('error', error));
    }
};
