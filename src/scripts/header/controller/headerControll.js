import { HeaderView } from '../view/headerView';

const headerView = new HeaderView();
document.querySelector('.saveheaderChange').addEventListener('click', () => {
    headerView.modalHeader();
});

document.querySelector('.logoImg').addEventListener('click', () => {
    window.location.reload();
});
