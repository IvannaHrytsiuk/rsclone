import { searchAirportList } from '../../../apis/flightSEarch';

// eslint-disable-next-line import/no-mutable-exports
export let fromAirport;
// eslint-disable-next-line import/prefer-default-export
export const FlightSearchView = class {
    paintSearchList(elem) {
        // eslint-disable-next-line no-param-reassign
        elem.innerHTML = '';
        if (searchAirportList) {
            for (let i = 0; i < searchAirportList.length; i += 1) {
                if (searchAirportList[i].CityName) {
                    const li = document.createElement('li');
                    li.classList.add('placeList');
                    // eslint-disable-next-line no-loop-func
                    li.addEventListener('click', () => {
                        fromAirport = searchAirportList[i];
                        // eslint-disable-next-line no-param-reassign
                        elem.innerHTML = '';
                        // eslint-disable-next-line no-param-reassign
                        elem.previousElementSibling.value = `${searchAirportList[i].PlaceName} (${searchAirportList[i].PlaceId})`;
                    });
                    li.innerHTML += `<div class="listBlock"><div><img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/airplane.png?alt=media&token=f7c0d4d6-b7a0-4eb8-b43c-b91637db98c9"></div><div><p class="listPlaceName">${searchAirportList[i].PlaceName} (${searchAirportList[i].PlaceId})</p><p class="listCountryName">${searchAirportList[i].CountryName}</p><div></div>`;
                    elem.appendChild(li);
                } else {
                    const li = document.createElement('li');
                    li.classList.add('placeList');
                    // eslint-disable-next-line no-loop-func
                    li.addEventListener('click', () => {
                        fromAirport = searchAirportList[i];
                        // eslint-disable-next-line no-param-reassign
                        elem.innerHTML = '';
                        // eslint-disable-next-line no-param-reassign
                        elem.previousElementSibling.value = `${searchAirportList[i].PlaceName} (${searchAirportList[i].PlaceId})`;
                    });
                    li.innerHTML += `<div class="listBlock"><div><img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/flag.png?alt=media&token=98b9f634-9d3f-4b59-97eb-6a5899b5bda3"></div><div><p class="listPlaceName">${searchAirportList[i].PlaceName} (${searchAirportList[i].PlaceId})</p><p class="listCountryName">${searchAirportList[i].CountryName}</p><div></div>`;
                    elem.appendChild(li);
                }
            }
        } else {
            setTimeout(() => this.paintSearchList(elem), 500);
        }
    }

    dateView(elem, num) {
        const someDate = new Date();
        let mm = someDate.getMonth() + 1;
        if (mm < 10) {
            mm = `0${mm}`;
        }
        elem.setAttribute('min', `${someDate.getFullYear()}-${mm}-${someDate.getDate()}`);
        someDate.setDate(someDate.getDate() + num);
        let mm2 = someDate.getMonth() + 1;
        if (mm2 < 10) {
            mm2 = `0${mm2}`;
        }
        // eslint-disable-next-line no-param-reassign
        elem.value = `${someDate.getFullYear()}-${mm2}-${someDate.getDate()}`;
    }
};
