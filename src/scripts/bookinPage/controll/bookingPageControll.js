import { EmailedClass } from '../../../apis/email';

document.querySelector('.btnConfirm').disabled = true;

document.getElementById('emailConfirm').addEventListener('keyup', () => {
    // eslint-disable-next-line no-useless-escape
    const test = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(document.getElementById('emailConfirm').value);
    if (test === true) {
        document.querySelector('.btnConfirm').disabled = false;
    } else {
        document.querySelector('.btnConfirm').disabled = true;
    }
});

document.querySelector('.btnConfirm').addEventListener('click', () => {
    const email = new EmailedClass();
    email.sendEmail(document.getElementById('emailConfirm').value);
    alert('Thank you! Please, check your email.');
});
