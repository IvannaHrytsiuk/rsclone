// eslint-disable-next-line import/prefer-default-export
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
};
