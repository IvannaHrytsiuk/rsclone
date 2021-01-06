import './styles/style.scss';
import { UserlocationClass, country } from './apis/userLocation';

const User = new UserlocationClass();
User.getUserLocation();
window.addEventListener('load', () => {
    console.log(country);
});
