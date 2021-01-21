document.body.innerHTML = `
<header>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="logoBlock">
                        <a href="index.html"><img class="logoImg" src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/Skyscanner-Logo.wine.png?alt=media&token=ccb60142-0538-40ba-b18a-99c03ce8c3fa" alt=""></a>
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
    <footer>
        <div class="footerRootWrapper">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <h3>Explore</h3>
                        <ul>
                            <li><a href="https://www.skyscanner.co.th/th/en-gb/thb/flights-to/cheap-flights-to-cities-all.html">Cities</a></li>
                            <li><a href="https://www.skyscanner.co.th/th/en-gb/thb/city-breaks">City Breaks</a></li>
                            <li><a href="https://www.skyscanner.co.th/th/en-gb/thb/airports/airports-of-the-world.html">Airports</a></li>
                            <li><a href="https://www.skyscanner.co.th/th/en-gb/thb/flights-to/cheap-flights-to-countries-all.html">Countries / Regions</a></li>
                            <li><a href="index.html">Airlines</a></li>
                            <li><a href="index.html">Flights</a></li>
                            <li><a href="https://www.skyscanner.co.th/th/en-gb/thb/hotels?na=1&sd=2021-01-24&ed=2021-01-25&s-f_iplace=KIEV">Hotels</a></li>
                            <li><a href="https://www.skyscanner.co.th/th/en-gb/thb/carhire?pick_up=KIEV&pick_up_date=2021-01-24">Car hire</a></li>
                            <li><a href="https://www.skyscanner.co.th/th/en-gb/thb/mobile.html">App</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3">
                        <h3>Partners</h3>
                        <ul>
                            <li><a href="https://www.partners.skyscanner.net/?preferences=745d0d7de3744bd9933389905e4c58d2&traveller_context=745d0d7d-e374-4bd9-9333-89905e4c58d2&_ga=2.208800786.1485739225.1610781645-1085993791.1609851982">Work with us</a></li>
                            <li><a href="https://www.partners.skyscanner.net/advertising/advertise-with-skyscanner?preferences=745d0d7de3744bd9933389905e4c58d2&traveller_context=745d0d7d-e374-4bd9-9333-89905e4c58d2&_ga=2.208800786.1485739225.1610781645-1085993791.1609851982">Advertise with us</a></li>
                            <li><a href="https://www.partners.skyscanner.net/insights/travel-insight?preferences=745d0d7de3744bd9933389905e4c58d2&traveller_context=745d0d7d-e374-4bd9-9333-89905e4c58d2&_ga=2.208800786.1485739225.1610781645-1085993791.1609851982">Travel Insight</a></li>
                            <li><a href="https://www.partners.skyscanner.net/affiliates/affiliate-products?preferences=745d0d7de3744bd9933389905e4c58d2&traveller_context=745d0d7d-e374-4bd9-9333-89905e4c58d2&_ga=2.208800786.1485739225.1610781645-1085993791.1609851982">Affiliates</a></li>
                            <li><a href="https://www.partners.skyscanner.net/affiliates/travel-apis?preferences=745d0d7de3744bd9933389905e4c58d2&traveller_context=745d0d7d-e374-4bd9-9333-89905e4c58d2&_ga=2.213402388.1485739225.1610781645-1085993791.1609851982">Travel APIs </a></li>
                        </ul>
                    </div>
                    <div class="col-md-3">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="https://www.skyscanner.co.th/th/en-gb/thb/about-us">About us</a></li>
                            <li><a href="https://www.skyscanner.co.th/th/en-gb/thb/about-us/why-skyscanner">Why Skyscanner?</a></li>
                            <li><a href="https://www.skyscanner.co.th/th/en-gb/thb/media">Media</a></li>
                            <li><a href="https://www.skyscanner.co.th/th/en-gb/thb/about-us/our-people">Our people</a></li>
                            <li><a href="https://www.skyscanner.co.th/th/en-gb/thb/about-us/sustainability">Sustainability</a></li>
                            <li><a href="https://www.skyscanner.co.th/th/en-gb/thb/about-us/brand">Brand story</a></li>
                            <li><a href="https://www.skyscanner.co.th/company-details">Company Details</a></li>
                            <li><a href="https://www.skyscanner.net/jobs?preferences=745d0d7de3744bd9933389905e4c58d2&traveller_context=745d0d7d-e374-4bd9-9333-89905e4c58d2&_ga=2.213402388.1485739225.1610781645-1085993791.1609851982">Jobs</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3">
                        <h3>Help</h3>
                        <ul>
                            <li><a href="https://help.skyscanner.net/hc/en-gb?skyCurrency=currency_gbp&skyLanguage=lang_en&skyMarket=th_skyscanner&preferences=745d0d7de3744bd9933389905e4c58d2&traveller_context=745d0d7d-e374-4bd9-9333-89905e4c58d2&_ga=2.250693766.1485739225.1610781645-1085993791.1609851982">Help</a></li>
                            <li><a href="https://www.skyscanner.co.th/privacy-settings">Privacy settings</a></li>
                            <li><a href="https://www.skyscanner.co.th/security">Security</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footerRootRSchool">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <a href="https://rs.school/js/"><img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/%D0%91%D0%B5%D0%B7%20%D1%96%D0%BC%D0%B5%D0%BD%D1%96.png?alt=media&token=251bba3d-8d67-4b95-9664-9f8691fbb84c" alt=""></a>
                    </div>
                    <div class="col-md-6">
                        <div class="col-sm-9">
                            <p><a href="https://github.com/IvannaHrytsiuk">Ivanna Hrytsiuk</a></p>
                            <p><a href="https://github.com/romangupalenko">Roman Gupalenko</a></p>
                        </div>
                        <div class="col-sm-3">
                            <span>2020</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

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
</div>

`;
