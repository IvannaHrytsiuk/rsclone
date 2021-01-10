import './styles/style.scss';
import './styles/nullStyle.scss';
import './scripts/flightSearch/controller/flightSearchControll';
import { UserlocationClass } from './apis/userLocation';

const User = new UserlocationClass();

// window.addEventListener('load', () => {
//     console.log('yes');
// });

document.addEventListener('DOMContentLoaded', () => {
    User.getUserLocation();
});
