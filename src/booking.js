import './scripts/initBooking';
import './styles/style.scss';
import './styles/nullStyle.scss';
import './scripts/header/controller/headerControll';
import './scripts/bookinPage/controll/bookingPageControll';
import { BookingView } from './scripts/bookinPage/view/bookingPageView';
import { HeaderView } from './scripts/header/view/headerView';

const Header = new HeaderView();

window.addEventListener('load', () => {
    Header.headerInit();
    const booking = new BookingView();
    booking.paintBookingResult(JSON.parse(localStorage.getItem('choosenTicket')));
});
