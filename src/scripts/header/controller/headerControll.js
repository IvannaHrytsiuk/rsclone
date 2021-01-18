import { HeaderView } from '../view/headerView';

const headerView = new HeaderView();
document.querySelector('.saveheaderChange').addEventListener('click', () => {
    headerView.modalHeader();
});
