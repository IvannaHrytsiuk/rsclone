import { country, CountryClass } from '../../../apis/country';
import { AuthClass } from '../../../apis/auth';

export let userChooseCountry;
export const HeaderView = class {
    headerInit() {
        if (country) {
            country.forEach((element) => {
                if (element.name === localStorage.getItem('userCountry')) {
                    userChooseCountry = element;
                    localStorage.setItem('userCurrency', element.currencies[0].code);
                }
            });
            for (let i = 0; i < country.length; i += 1) {
                document.getElementById('selectCountry').innerHTML += `<option value="${country[i].name}">${country[i].name}</option>`;
                document.getElementById('selectCurrency').innerHTML += `<option value="${country[i].currencies[0].code}">${country[i].currencies[0].code} - ${country[i].currencies[0].symbol}</option>`;
            }
            const options = Array.from(document.getElementById('selectCountry').options);
            options.forEach((option, i) => {
                if (option.value === localStorage.getItem('userCountry')) document.getElementById('selectCountry').selectedIndex = i;
            });
            const optionsCurrency = Array.from(document.getElementById('selectCurrency').options);
            optionsCurrency.forEach((option, i) => {
                if (option.value === localStorage.getItem('userCurrency')) document.getElementById('selectCurrency').selectedIndex = i;
            });
            this.modalHeader();
        } else {
            setTimeout(() => {
                const countryClass = new CountryClass();
                countryClass.getCountries();
                this.headerInit();
            }, 500);
        }
        this.loginModalInit();
    }

    modalHeader() {
        document.querySelector('.countryHeaderModalBtn').innerHTML = '';
        document.querySelector('.currencyHeaderModalBtn').innerHTML = '';
        country.forEach((element) => {
            if (element.name === document.getElementById('selectCountry').value) {
                document.querySelector('.countryHeaderModalBtn').innerHTML = `<img src="${element.flag} "><span class="countryName">${element.name} </span>`;
                localStorage.setItem('userCountry', element.name);
            }
        });
        country.forEach((item) => {
            if (item.currencies[0].code === document.getElementById('selectCurrency').value) {
                document.querySelector('.currencyHeaderModalBtn').innerHTML = ` <span class=" currencyView">${item.currencies[0].symbol} ${item.currencies[0].code}</span>`;
                localStorage.setItem('userCurrency', item.currencies[0].code);
            }
        });
    }

    onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    loginModalInit() {
        document.querySelector('.loginModal').innerHTML = `
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <div class="modalImg"></div>
        <div class="container">
            <div class="alert alert-danger" role="alert">Incorect login or password</div>
            <input type="email" class="form-control" id="loginEmail" placeholder="Your@email.com" required pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
            <input type="password" class="form-control" id="loginPassword" placeholder="Password" required>
            <button class="btn btnLogIn">Log in</button>
            <p>or <a href="register.html">create an account</a></p>
        </div>`;
        document.querySelector('.alert-danger').hidden = true;
        document.querySelector('.btnLogIn').addEventListener('click', () => {
            if (document.getElementById('loginEmail').checkValidity() && document.getElementById('loginPassword').checkValidity()) {
                const auth = new AuthClass();
                auth.login({
                    email: document.getElementById('loginEmail').value,
                    password: document.getElementById('loginPassword'),
                });
            } else {
                document.querySelector('.alert-danger').hidden = false;
            }
        });
        document.getElementById('loginEmail').addEventListener('focus', () => {
            document.querySelector('.alert-danger').hidden = true;
        });
        document.getElementById('loginPassword').addEventListener('focus', () => {
            document.querySelector('.alert-danger').hidden = true;
        });
    }
};
