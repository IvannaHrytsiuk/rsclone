import { FlightSearchClass } from '../../../apis/flightSEarch';

const flight = new FlightSearchClass();
export const SearchCashView = class {
    getDate(date) {
        const dateformat = new Date(date);
        return dateformat.toDateString();
    }

    init() {
        if (localStorage.getItem('search')) {
            const storageArr = JSON.parse(localStorage.getItem('search'));
            for (let i = 0; i < storageArr.length; i += 1) {
                const div = document.createElement('div');
                div.classList.add('col-sm-3', 'cashBlock');
                div.innerHTML = `
                        <div class="routeBlock">
                            <span>${storageArr[i].cityFrom}</span>
                            <span>${storageArr[i].route === 'oneway' ? '→' : '↔'}</span>
                            <span>${storageArr[i].cityTo}</span>
                        </div>
                        <p>${storageArr[i].route === 'oneway' ? `${storageArr[i].date.slice(0, 2)}/${storageArr[i].date.slice(5, 7)}` : `${storageArr[i].date1.slice(0, 2)}/${storageArr[i].date1.slice(5, 7)} - ${storageArr[i].date2.slice(0, 2)}/${storageArr[i].date2.slice(5, 7)}`}</p>
                        <div class="pasangersCountBlock">
                            <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-person-64.png?alt=media&token=bcd3db7e-8ae5-4d1b-bc63-334de322bd0d">
                            <span>${parseInt(storageArr[i].adults) + parseInt(storageArr[i].child)}</span>
                        </div>
                `;
                document.querySelector('.rowBlockSearchCash').appendChild(div);
                // eslint-disable-next-line no-loop-func
                div.addEventListener('click', () => {
                    if (storageArr[i].route === 'oneway') {
                        document.getElementsByName('flight-type')[1].click();
                    } else {
                        document.getElementsByName('flight-type')[0].click();
                    }
                    if (document.getElementsByName('flight-type')[1].checked) {
                        flight.getAirplinesListOneWay(storageArr[i].from, storageArr[i].to, storageArr[i].date, storageArr[i].adults, storageArr[i].child, localStorage.getItem('userCurrency'));
                    } else if (document.getElementsByName('flight-type')[0].checked) {
                        flight.getAirplinesListReturn(storageArr[i].from, storageArr[i].to, storageArr[i].date1, storageArr[i].date2, storageArr[i].adults, storageArr[i].child, localStorage.getItem('userCurrency'), storageArr.days);
                    }
                });
            }
        }
    }
};
