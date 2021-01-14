export const FlightSearchModel = class {
    counterMinus(elem) {
        let value = +elem.value;
        if (elem === document.getElementById('adultsCount')) {
            if (value > 1) {
                // eslint-disable-next-line no-param-reassign
                value -= 1;
            } else {
                // eslint-disable-next-line no-param-reassign
                value = 1;
            }
        } else {
            // eslint-disable-next-line no-lonely-if
            if (value > 0) {
                // eslint-disable-next-line no-param-reassign
                value -= 1;
            } else {
                // eslint-disable-next-line no-param-reassign
                value = 0;
            }
        }
        // eslint-disable-next-line no-param-reassign
        elem.value = value;
    }

    counterPlus(elem) {
        let value = +elem.value;
        if (value <= 8) {
            // eslint-disable-next-line no-param-reassign
            value += 1;
        } else {
            // eslint-disable-next-line no-param-reassign
            value = 9;
        }
        // eslint-disable-next-line no-param-reassign
        elem.value = value;
    }

    manageDisableAdults() {
        if (document.getElementById('adultsCount').value === '9') {
            document.getElementById('adultsPlus').setAttribute('disabled', true);
        } else {
            document.getElementById('adultsPlus').removeAttribute('disabled');
        }
        // eslint-disable-next-line radix
        if (parseInt(document.getElementById('adultsCount').value) > 1) {
            document.getElementById('adultsMinus').removeAttribute('disabled');
        } else {
            document.getElementById('adultsMinus').setAttribute('disabled', true);
        }
    }

    manageDisableChild() {
        if (document.getElementById('childCount').value === '9') {
            document.getElementById('childPlus').setAttribute('disabled', true);
        } else {
            document.getElementById('childPlus').removeAttribute('disabled');
        }
        // eslint-disable-next-line radix
        if (parseInt(document.getElementById('childCount').value) > 0) {
            document.getElementById('childMinus').removeAttribute('disabled');
        } else {
            document.getElementById('childMinus').setAttribute('disabled', true);
        }
    }

    manageSearchViewDependsOnRoute(value) {
        if (value === '1') {
            document.getElementById('returnDate').setAttribute('disabled', true);
            document.getElementById('returnDateLabel').style.color = 'grey';
            document.getElementById('returnDate').value = '';
        } else if (value === '2') {
            document.getElementById('returnDate').removeAttribute('disabled');
            document.getElementById('returnDateLabel').style.color = 'white';
            const someDate = new Date();
            let mm = someDate.getMonth() + 1;
            if (mm < 10) {
                mm = `0${mm}`;
            }
            someDate.setDate(someDate.getDate() + 15);
            document.getElementById('returnDate').value = `${someDate.getFullYear()}-${mm}-${someDate.getDate()}`;
        } else if (value === '3') {
            document.getElementById('returnDate').removeAttribute('disabled');
            document.getElementById('returnDateLabel').style.color = 'white';
            const someDate = new Date();
            let mm = someDate.getMonth() + 1;
            if (mm < 10) {
                mm = `0${mm}`;
            }
            someDate.setDate(someDate.getDate() + 15);
            document.getElementById('returnDate').value = `${someDate.getFullYear()}-${mm}-${someDate.getDate()}`;
        }
    }

    // eslint-disable-next-line consistent-return
    ifChecked() {
        const radio = document.getElementsByName('flight-type');
        for (let i = 0; i < radio.length; i += 1) {
            if (radio[i].checked) {
                return radio[i].value;
            }
        }
    }

    calculateDays(dateFrom, dateTo) {
        const date1 = new Date(dateFrom);
        const date2 = new Date(dateTo);
        let difference = date2.getTime() - date1.getTime();
        difference /= (1000 * 3600 * 24);
        return Math.round(difference);
    }
};
