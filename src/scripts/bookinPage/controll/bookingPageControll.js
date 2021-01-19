document.querySelector('.btnConfirm').addEventListener('click', () => {
    alert('Sorry, now we are unable to book your ticket :(');
    setTimeout(() => {
        document.querySelector('.wrapperSearch').classList.remove('bookingMood');
        document.querySelector('.wrapperSearch').style.display = 'block';
        document.querySelector('.bookingDetailsWrapper').style.display = 'none';
    }, 1500);
});
