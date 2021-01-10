import './styles/style.scss';
import './styles/nullStyle.scss';
import './scripts/flightSearch/controller/flightSearchControll';
import { UserlocationClass } from './apis/userLocation';
import { FlightSearchView } from './scripts/flightSearch/view/flightSearchView';

const User = new UserlocationClass();

window.addEventListener('load', () => {
    const flightSearchView = new FlightSearchView();
    flightSearchView.dateView(document.getElementById('departDate'), 8);
    flightSearchView.dateView(document.getElementById('returnDate'), 15);
});

document.addEventListener('DOMContentLoaded', () => {
    User.getUserLocation();
});
