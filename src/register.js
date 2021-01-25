import './scripts/initRegister';
import './styles/style.scss';
import './styles/nullStyle.scss';
import './scripts/header/controller/headerControll';
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
