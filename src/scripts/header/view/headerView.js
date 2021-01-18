import { userCountry } from '../../../apis/userLocation';
import { country } from '../../../apis/country';

export let userChooseCountry;
export const HeaderView = class {
    headerInit() {
        country.forEach((element) => {
            if (element.name === userCountry.country) {
                userChooseCountry = element;
            }
        });
        for (let i = 0; i < country.length; i += 1) {
            document.getElementById('selectCountry').innerHTML += `<option value="${country[i].name}">${country[i].name}</option>`;
            document.getElementById('selectCurrency').innerHTML += `<option value="${country[i].currencies[0].code}">${country[i].currencies[0].code} - ${country[i].currencies[0].symbol}</option>`;
        }
        const options = Array.from(document.getElementById('selectCountry').options);
        options.forEach((option, i) => {
            if (option.value === userChooseCountry.name) document.getElementById('selectCountry').selectedIndex = i;
        });
        const optionsCurrency = Array.from(document.getElementById('selectCurrency').options);
        optionsCurrency.forEach((option, i) => {
            if (option.value === userChooseCountry.currencies[0].code) document.getElementById('selectCurrency').selectedIndex = i;
        });
        this.modalHeader();
    }

    modalHeader() {
        document.querySelector('.headerModalBtn').innerHTML = '';
        country.forEach((element) => {
            if (element.name === document.getElementById('selectCountry').value) {
                document.querySelector('.headerModalBtn').innerHTML += `<img src="${element.flag} "><span class="countryName">${element.name} </span>`;
            }
        });
        country.forEach((item) => {
            if (item.currencies[0].code === document.getElementById('selectCurrency').value) {
                document.querySelector('.headerModalBtn').innerHTML += ` <span class=" currencyView">${item.currencies[0].symbol} ${item.currencies[0].code}</span>`;
            }
        });
    }
};
