// eslint-disable-next-line import/prefer-default-export
export class SearchFlightView {
    paintSearch() {
        document.body.innerHTML = '<div class="wrapperSearch">\
            <div class="searchBlock">\
                <h1>Let the journey begin</h1>\
                <div class="wrapperSearchInputs">\
                    <form>\
                        <div class="flight-radio-boxes">\
                            <label>\
                                <input type="radio" name="flight-type" checked>\
                                <span>Roundtrip</span>\
                            </label>\
                            <label>\
                                <input type="radio" name="flight-type">\
                                <span>One way</span>\
                            </label>\
                            <label>\
                                <input type="radio" name="flight-type">\
                                <span>Multi-city</span>\
                            </label>\
                        </div>\
                        <div class="inputsFlex">\
                            <div>\
                                <label>From</label>\
                                <input type="text">\
                                <button class="switch-button">&harr;</button>\
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
                        <div class="up-checkboxes">\
                            <div>\
                                <input type="checkbox">\
                                <label>Add nearby airports</label>\
                            </div>\
                            <div>\
                                <input type="checkbox">\
                                <label>Add nearby airports</label>\
                            </div>\
                            <div>\
                                <button type="submit">Search flights &#10144;</button>\
                            </div>\
                        </div>\
                        <div class="down-checkboxes">\
                            <div>\
                                <input type="checkbox">\
                                <label>Non-stop flights only</label>\
                            </div>\
                            <div>\
                                <input type="checkbox">\
                                <label>Flexible tickets only</label>\
                            </div>\
                        </div>\
                    </form>\
                </div>\
            </div>\
        </div>';
    }
}
