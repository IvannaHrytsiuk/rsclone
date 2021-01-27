import './scripts/initRegister';
import './scripts/other-styles';
import './scripts/header/controller/headerControll';
import './scripts/registerPage/controll/regControll';
import { CountryClass } from './apis/country';
import { UserlocationClass } from './apis/userLocation';
import { HeaderView } from './scripts/header/view/headerView';

const Country = new CountryClass();
const Header = new HeaderView();
const User = new UserlocationClass();

document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('userCountry')) {
        User.getUserLocation();
    }
    Country.getCountries();
    Header.headerInit();
});
