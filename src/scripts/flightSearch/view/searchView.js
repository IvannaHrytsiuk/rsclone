// eslint-disable-next-line import/prefer-default-export
export class SearchFlightView {
    paintSearch() {
        document.body.innerHTML = '<div class="wrapperSearch">\
            <div class="searchBlock">\
                <h1>Let the journey begin</h1>\
                <div class="wrapperSearchInputs">\
                    <form>\
                        <div>\
                            <label>\
                                <input type="radio">\
                                <span>Return</span>\
                            </label>\
                            <label>\
                                <input type="radio">\
                                <span>One way</span>\
                            </label>\
                            <label>\
                                <input type="radio">\
                                <span>Multi-city</span>\
                            </label>\
                        </div>\
                        <div class="inputsFlex">\
                            <div>\
                                <label>From</label>\
                                <input type="text">\
                            </div>\
                            <div>\
                                <label>To</label>\
                                <input type="text">\
                            </div>\
                            <div>\
                                <label>Depart</label>\
                                <input id="datepicker" type="text">\
                            </div>\
                            <div>\
                                <label>Return</label>\
                                <input type="text" class="dateselect">\
                            </div>\
                            <div>\
                                <label>Cabin Class & Travellers</label>\
                                <select>\
                                <option>1</option>\
                                </select>\
                            </div>\
                        </div>\
                    </form>\
                </div>\
            </div>\
        </div>';
    }
}
