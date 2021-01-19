document.body.innerHTML = `<div>
<header>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="logoBlock">
                    <img class="logoImg" src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/Skyscanner-Logo.wine.png?alt=media&token=ccb60142-0538-40ba-b18a-99c03ce8c3fa" alt="">
                </div>
                <nav>
                    <a href="" class="btn navBtn active">
                        <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-airplane-mode-on-52.png?alt=media&token=92bd7a10-f558-4412-ae56-a68f08bc37f3" alt="">
                        <span>Flights</span>
                    </a>
                    <a href="https://www.skyscanner.co.th/hotels?na=1&sd=2021-01-18&ed=2021-01-19&s-f_iplace=KIEV" class="btn navBtn">
                        <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-bed-48.png?alt=media&token=806f9805-6982-4f5a-a74d-a9fc66d6fdb1" alt="">
                        <span>Hotels</span>
                    </a>
                    <a href="https://www.skyscanner.co.th/carhire" class="btn navBtn">
                        <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-car-48.png?alt=media&token=051d7d27-7082-475f-909c-14107cd195bf" alt="">
                        <span>Car Hire</span>
                    </a>
                </nav>
            </div>
            <div class="col-md-6">
                <div class="locationCurrencyBlock">
                    <button class="btn headerModalBtn" data-bs-toggle="modal" data-bs-target="#headerModal">
                        <span class="countryHeaderModalBtn"></span>
                        <span class="currencyHeaderModalBtn"></span>
                    </button>
                    <a class="btn logInBtn">Log In</a>
                </div>
            </div>
        </div>
    </div>
</header>
<div class="wrapperSearch">
    <div class="searchBlock">
        <h1>Let the journey begin</h1>
        <div class="wrapperSearchInputs">
            <form>
                <div class="flight-radio-boxes">
                    <label>
                        <input type="radio" name="flight-type" value="2" id="round">
                        <span>Return</span>
                    </label>
                    <label>
                        <input type="radio" name="flight-type" value="1">
                        <span>One way</span>
                    </label>
                </div>
                <div class="inputsFlex">
                    <div class="from-to">
                        <label>From</label>
                        <input type="text" id="searchFrom" placeholder="Country, city or airport">
                        <ul class="airportSearchFrom"></ul>
                        <button class="switch-button">&harr;</button>
                    </div>
                    <div class="from-to">
                        <label>To</label>
                        <input type="text" id="searchTo" placeholder="Country, city or airport">
                        <ul class="airportSearchTo"></ul>
                    </div>
                    <div>
                        <label>Depart</label>
                        <input type="date" id="departDate" max="2023-01-01">
                    </div>
                    <div>
                        <label id="returnDateLabel">Return</label>
                        <input type="date" id="returnDate"  max="2023-01-01">
                    </div>
                    <div class="classAdults">
                        <label>Cabin Class & Travellers</label>
                        <input type="text" id="classAdultsInp" readonly>
                        <div class="classAdultsModal">
                            <p class="hearders">Cabin class</p>
                            <div>
                                <strong>We can show only Economy prices for this search.</strong>
                                <span>To see Business and First Class options, please tell us your exact dates and/or destination city.</span>
                            </div>
                            <p class="hearders">Adults</p>
                            <button class="counterButton" type="button" id="adultsMinus" disabled><span>-</span></button>
                            <input type="text" class="counterTicket" id="adultsCount" disabled value="1">
                            <button class="counterButton" type="button" id="adultsPlus"><span>+</span></button>
                            <span class="countSpan">16+ years</span>
                            <p class="hearders">Children</p>
                            <button class="counterButton" type="button" id="childMinus" disabled><span>-</span></button>
                            <input type="text" class="counterTicket" id="childCount" disabled value="0">
                            <button class="counterButton" type="button" id="childPlus"><span>+</span></button>
                            <span class="countSpan">0-15 years</span>
                            <div class="ifChild">
                            </div>
                            <p class="classAdultsTxt">Your age at time of travel must be valid for the age category booked. Airlines have restrictions on under 18s travelling alone.</p>
                            <p class="classAdultsTxt">Age limits and policies for travelling with children may vary so please check with the airline before booking.</p>
                            <hr>
                            <p class="closeBtn">Done</p>
                        </div>
                    </div>
                </div>
                <div class="up-checkboxes">
                    <div>
                        <input type="checkbox">
                        <label>Add nearby airports</label>
                    </div>
                    <div>
                        <input type="checkbox">
                        <label>Add nearby airports</label>
                    </div>
                    <div>
                        <button type="button" class="btn searchFlightBtn">Search flights &#10144;</button>
                    </div>
                </div>                        
            </div>
        </div>
</div>
<div class="bookingWrapper">
    <div class="lds-ripple"><div></div><div></div></div>
</div>
<div class="bookingDetailsWrapper">
    <div class="container">
        <h1 class="routeDetails"></h1>
        <div class="row">
            <div class="col-md-8 ticketDetails"></div>
            <div class="col-md-4 allPrice"></div>
        </div>
        <div class="col-md-8 contactEmailBlock">
            <h4>Contact details</h4>
            <div class="row">
                <div class="col-md-12">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" placeholder="your@email.com" required>
                    <button class="btn btnConfirm" type="button">Confirm booking</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>


<!-- Modal -->
<div class="modal fade" id="detailsModal" tabindex="-1" aria-labelledby="detailsModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
  <h5 class="modal-title" id="detailsModalLabel">Itinerary details</h5>
  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
</div>
<div class="modal-footer">
  <button type="button" class="btn bookBtn" data-bs-dismiss="modal">Book</button>
</div>
</div>
</div>
</div>

<!-- Modal header-->
<div class="modal fade" id="headerModal" tabindex="-1" aria-labelledby="headerModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
  <h5 class="modal-title" id="headerModalLabel">Regional settings</h5>
  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body modal-body-header">
    <div class="regionalsettings">
            <div>
                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-globe-48.png?alt=media&token=a568e328-b255-4352-9f6b-9f4b3bc7a573" alt="">
                <span>Country / Region</span>
            </div>
            <p>Selecting the country you’re in will give you local deals and information.</p>
            <select name="country" id="selectCountry" class="form-select" aria-label="Default select example"></select>
    </div>
    <div class="regionalsettings" style="padding-top: 16px;">
        <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-currency-exchange-48.png?alt=media&token=45da93ea-45ff-4e5a-9fd4-0c589cf44029" alt="">
            <span>Currency</span>
        </div>
        <select name="currency" id="selectCurrency" class="form-select" aria-label="Default select example"></select>
    </div>
</div>
<div class="modal-footer modal-footer-header">
    <button type="button" class="btn btn-primary saveheaderChange" data-bs-dismiss="modal">Save</button>
    <button type="button" class="btn closeBtnModal" data-bs-dismiss="modal">Close</button>
</div>
</div>
</div>
</div>`;
