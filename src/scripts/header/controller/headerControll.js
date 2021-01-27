import { HeaderView } from '../view/headerView';

const headerView = new HeaderView();
document.querySelector('.saveheaderChange').addEventListener('click', () => {
    headerView.modalHeader();
});

if (document.querySelector('.logInBtn')) {
    document.querySelector('.logInBtn').addEventListener('click', () => {
        if (document.querySelector('.logInBtn').innerHTML === 'Log out') {
            localStorage.removeItem('user');
            headerView.logIn();
        } else {
            headerView.logIn();
        }
    });
}
