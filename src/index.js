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
    flightSearchView.counterView(document.getElementById('adultsCount').value, document.getElementById('childCount').value);
});

document.addEventListener('DOMContentLoaded', () => {
    User.getUserLocation();
});
