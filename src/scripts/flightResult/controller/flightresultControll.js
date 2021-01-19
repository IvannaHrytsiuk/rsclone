import { BookingView } from '../../bookinPage/view/bookingPageView';
import { chooseTicket } from '../model/flightresultModel';

document.querySelector('.bookBtn').addEventListener('click', () => {
    document.querySelector('.bookingWrapper').style.display = 'none';
    document.querySelector('.wrapperSearch').style.display = 'none';
    document.querySelector('.bookingDetailsWrapper').style.display = 'block';
    const booking = new BookingView();
    booking.paintBookingResult(chooseTicket);
});
