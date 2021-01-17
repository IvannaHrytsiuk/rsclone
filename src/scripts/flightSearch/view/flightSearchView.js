import { searchAirportList } from '../../../apis/flightSEarch';
import { AirportNameClass } from '../../../apis/airportsName';

export let fromAirport;
export let toAirport;

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
                        if (elem === document.querySelector('.airportSearchFrom')) {
                            fromAirport = searchAirportList[i];
                        } else {
                            toAirport = searchAirportList[i];
                        }
                        // eslint-disable-next-line no-param-reassign
                        elem.innerHTML = '';
                        // eslint-disable-next-line no-param-reassign
                        elem.previousElementSibling.value = `${searchAirportList[i].PlaceName} (${searchAirportList[i].PlaceId})`;
                        const airportNameClass = new AirportNameClass();
                        airportNameClass.getName(elem, searchAirportList[i].PlaceId);
                    });
                    li.innerHTML += `<div class="listBlock"><div><img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/airplane.png?alt=media&token=f7c0d4d6-b7a0-4eb8-b43c-b91637db98c9"></div><div><p class="listPlaceName">${searchAirportList[i].PlaceName} (${searchAirportList[i].PlaceId})</p><p class="listCountryName">${searchAirportList[i].CountryName}</p><div></div>`;
                    elem.appendChild(li);
                } else {
                    const li = document.createElement('li');
                    li.classList.add('placeList');
                    // eslint-disable-next-line no-loop-func
                    li.addEventListener('click', () => {
                        if (elem === document.querySelector('.airportSearchFrom')) {
                            fromAirport = searchAirportList[i];
                        } else {
                            toAirport = searchAirportList[i];
                        }
                        // eslint-disable-next-line no-param-reassign
                        elem.innerHTML = '';
                        // eslint-disable-next-line no-param-reassign
                        elem.previousElementSibling.value = `${searchAirportList[i].PlaceName} (${searchAirportList[i].PlaceId})`;
                        const airportNameClass = new AirportNameClass();
                        airportNameClass.getName(elem, searchAirportList[i].PlaceId);
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
        let dd = someDate.getDate();
        if (dd < 10) {
            dd = `0${dd}`;
        }
        elem.setAttribute('min', `${someDate.getFullYear()}-${mm}-${dd}`);
        someDate.setDate(someDate.getDate() + num);
        let mm2 = someDate.getMonth() + 1;
        if (mm2 < 10) {
            mm2 = `0${mm2}`;
        }
        let dd2 = someDate.getDate();
        if (dd2 < 10) {
            dd2 = `0${dd2}`;
        }
        // eslint-disable-next-line no-param-reassign
        elem.value = `${someDate.getFullYear()}-${mm2}-${dd2}`;
    }

    counterView(value1, value2) {
        let travelersname;
        const sumValues = +value1 + +value2;
        // eslint-disable-next-line radix
        if (sumValues === 1) {
            travelersname = 'adult';
        } else {
            travelersname = 'travellers';
        }
        // eslint-disable-next-line radix
        document.getElementById('classAdultsInp').value = `${sumValues} ${travelersname}, Economy`;
    }

    childAge() {
        document.querySelector('.ifChild').innerHTML = '';
        // eslint-disable-next-line radix
        for (let i = 0; i < parseInt(document.getElementById('childCount').value); i += 1) {
            document.querySelector('.ifChild').innerHTML += `<p class="hearders">Age of child ${i + 1}</p>\
            <select id="child${i + 1}">
                <option selected disabled>Select age</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
            </select>`;
        }
    }
};
