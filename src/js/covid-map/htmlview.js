const createMainWithMap = () => {
    const mainElement = document.createElement('main');
    mainElement.classList.add('covid-map-container');

    mainElement.innerHTML = `<section class="covid-info">
    <article class="info-for-country">
        <h1>COVID-19 travel info</h1>
        <label for="countries">from</label>
        <select id="countries" name="countries" placeholder="Choose country or region">
            <option value="title" hidden="">
                Choose country or region
            </option>
            <option value="29475275">Afghanistan</option>
            <option value="29475259">Albania</option>
            <option value="29475372">Algeria</option>
            <option value="29475386">Andorra</option>
            <option value="29475397">Angola</option>
            <option value="29475087">Anguilla</option>
            <option value="29475413">Antigua and Barbuda</option>
            <option value="29475428">Argentina</option>
            <option value="29475202">Armenia</option>
            <option value="29475099">Aruba</option>
            <option value="29475336">Australia</option>
            <option value="29475379">Austria</option>
            <option value="29475238">Azerbaijan</option>
            <option value="29475409">Bahamas</option>
            <option value="29475215">Bahrain</option>
            <option value="29475278">Bangladesh</option>
            <option value="29475399">Barbados</option>
            <option value="29475251">Belarus</option>
            <option value="29475380">Belgium</option>
            <option value="29475417">Belize</option>
            <option value="29475359">Benin</option>
            <option value="29475086">Bermuda</option>
            <option value="29475283">Bhutan</option>
            <option value="29475430">Bolivia</option>
            <option value="29475396">Bosnia and Herzegovina</option>
            <option value="29475269">Botswana</option>
            <option value="29475405">Brazil</option>
            <option value="29475093">British Virgin Islands</option>
            <option value="29475327">Brunei</option>
            <option value="29475258">Bulgaria</option>
            <option value="29475355">Burkina Faso</option>
            <option value="29475231">Burundi</option>
            <option value="29475328">Cambodia</option>
            <option value="29475345">Cameroon</option>
            <option value="29475436">Canada</option>
            <option value="29475400">Cape Verde</option>
            <option value="29475089">Cayman Islands</option>
            <option value="29475208">Central African Republic</option>
            <option value="29475365">Chad</option>
            <option value="29475429">Chile</option>
            <option value="29475326">China</option>
            <option value="29475154">Collectivity of Saint Martin</option>
            <option value="29475425">Colombia</option>
            <option value="29475264">Comoros</option>
            <option value="29475422">Costa Rica</option>
            <option value="29475102">Croatia</option>
            <option value="29475408">Cuba</option>
            <option value="29475138">Curacao</option>
            <option value="29475197">Cyprus</option>
            <option value="29475389">Czechia</option>
            <option value="29475205">DR Congo</option>
            <option value="29475373">Denmark</option>
            <option value="29475206">Djibouti</option>
            <option value="29475412">Dominica</option>
            <option value="29475407">Dominican Republic</option>
            <option value="29475333">East Timor</option>
            <option value="29475424">Ecuador</option>
            <option value="29475226">Egypt</option>
            <option value="29475418">El Salvador</option>
            <option value="29475353">Equatorial Guinea</option>
            <option value="29475225">Eritrea</option>
            <option value="29475233">Estonia</option>
            <option value="29475271">Eswatini</option>
            <option value="29475224">Ethiopia</option>
            <option value="29475090">Falkland Islands</option>
            <option value="29475343">Fiji</option>
            <option value="29475253">Finland</option>
            <option value="29475385">France</option>
            <option value="29475161">French Polynesia</option>
            <option value="29475360">Gabon</option>
            <option value="29475363">Gambia</option>
            <option value="29475247">Georgia</option>
            <option value="29475381">Germany</option>
            <option value="29475352">Ghana</option>
            <option value="29475094">Gibraltar</option>
            <option value="29475229">Greece</option>
            <option value="29475146">Greenland</option>
            <option value="29475416">Grenada</option>
            <option value="29475419">Guatemala</option>
            <option value="29475364">Guinea</option>
            <option value="29475357">Guinea-Bissau</option>
            <option value="29475401">Guyana</option>
            <option value="29475427">Haiti</option>
            <option value="29475420">Honduras</option>
            <option value="27542065">Hong Kong</option>
            <option value="29475257">Hungary</option>
            <option value="29475374">Iceland</option>
            <option value="29475284">India</option>
            <option value="29475321">Indonesia</option>
            <option value="29475194">Iran</option>
            <option value="29475186">Iraq</option>
            <option value="29475383">Ireland</option>
            <option value="29475217">Israel</option>
            <option value="29475393">Italy</option>
            <option value="29475351">Ivory Coast</option>
            <option value="29475406">Jamaica</option>
            <option value="29475330">Japan</option>
            <option value="29475210">Jordan</option>
            <option value="29475317">Kazakhstan</option>
            <option value="29475203">Kenya</option>
            <option value="29475141">Kosovo</option>
            <option value="29475212">Kuwait</option>
            <option value="29475318">Kyrgyzstan</option>
            <option value="29475322">Laos</option>
            <option value="29475236">Latvia</option>
            <option value="29475211">Lebanon</option>
            <option value="29475268">Lesotho</option>
            <option value="29475350">Liberia</option>
            <option value="29475344">Libya</option>
            <option value="29475387">Liechtenstein</option>
            <option value="29475240">Lithuania</option>
            <option value="29475382">Luxembourg</option>
            <option value="29475274">Madagascar</option>
            <option value="29475265">Malawi</option>
            <option value="29475325">Malaysia</option>
            <option value="29475313">Maldives</option>
            <option value="29475367">Mali</option>
            <option value="29475371">Malta</option>
            <option value="29475156">Marshall Islands</option>
            <option value="29475358">Mauritania</option>
            <option value="29475270">Mauritius</option>
            <option value="29475432">Mexico</option>
            <option value="29475142">Micronesia</option>
            <option value="29475249">Moldova</option>
            <option value="29475384">Monaco</option>
            <option value="29475335">Mongolia</option>
            <option value="29475395">Montenegro</option>
            <option value="29475095">Montserrat</option>
            <option value="29475370">Morocco</option>
            <option value="29475273">Mozambique</option>
            <option value="29475315">Myanmar</option>
            <option value="29475398">Namibia</option>
            <option value="29475314">Nepal</option>
            <option value="29475378">Netherlands</option>
            <option value="29475159">New Caledonia</option>
            <option value="29475342">New Zealand</option>
            <option value="29475421">Nicaragua</option>
            <option value="29475366">Niger</option>
            <option value="29475354">Nigeria</option>
            <option value="29475331">North Korea</option>
            <option value="29475256">North Macedonia</option>
            <option value="29475390">Norway</option>
            <option value="29475213">Oman</option>
            <option value="29475277">Pakistan</option>
            <option value="29475163">Palestinian Territory</option>
            <option value="29475426">Panama</option>
            <option value="29475337">Papua New Guinea</option>
            <option value="29475403">Paraguay</option>
            <option value="29475431">Peru</option>
            <option value="29475324">Philippines</option>
            <option value="29475260">Poland</option>
            <option value="29475349">Portugal</option>
            <option value="29475214">Qatar</option>
            <option value="29475348">Republic of the Congo</option>
            <option value="29475261">Romania</option>
            <option value="29475334">Russia</option>
            <option value="29475176">Rwanda</option>
            <option value="29475100">Saint Barthelemy</option>
            <option value="29475411">Saint Kitts and Nevis</option>
            <option value="29475414">Saint Lucia</option>
            <option value="29475415">Saint Vincent and the Grenadines</option>
            <option value="29475435">Samoa</option>
            <option value="29475392">San Marino</option>
            <option value="29475362">Sao Tome and Principe</option>
            <option value="29475192">Saudi Arabia</option>
            <option value="29475346">Senegal</option>
            <option value="29475438">Serbia</option>
            <option value="29475209">Seychelles</option>
            <option value="29475361">Sierra Leone</option>
            <option value="29475332">Singapore</option>
            <option value="29475388">Slovakia</option>
            <option value="29475394">Slovenia</option>
            <option value="29475338">Solomon Islands</option>
            <option value="29475180">Somalia</option>
            <option value="29475272">South Africa</option>
            <option value="29475329">South Korea</option>
            <option value="99540794">South Sudan</option>
            <option value="29475369">Spain</option>
            <option value="29475281">Sri Lanka</option>
            <option value="29475155">St Maarten</option>
            <option value="29475162">St. Pierre and Miquelon</option>
            <option value="29475228">Sudan</option>
            <option value="29475402">Suriname</option>
            <option value="29475377">Sweden</option>
            <option value="29475376">Switzerland</option>
            <option value="29475200">Syria</option>
            <option value="29475323">Taiwan</option>
            <option value="29475280">Tajikistan</option>
            <option value="29475199">Tanzania</option>
            <option value="29475320">Thailand</option>
            <option value="29475356">Togo</option>
            <option value="29475410">Trinidad and Tobago</option>
            <option value="29475368">Tunisia</option>
            <option value="29475221">Turkey</option>
            <option value="29475279">Turkmenistan</option>
            <option value="29475092">Turks and Caicos Islands</option>
            <option value="29475207">Uganda</option>
            <option value="29475255">Ukraine</option>
            <option value="29475216">United Arab Emirates</option>
            <option value="29475375">United Kingdom</option>
            <option value="29475437">United States</option>
            <option value="29475404">Uruguay</option>
            <option value="29475316">Uzbekistan</option>
            <option value="29475341">Vanuatu</option>
            <option value="29475391">Vatican City State (Holy See)</option>
            <option value="29475423">Venezuela</option>
            <option value="29475319">Vietnam</option>
            <option value="29475172">Wallis and Futuna Islands</option>
            <option value="29475183">Yemen</option>
            <option value="29475263">Zambia</option>
            <option value="29475262">Zimbabwe</option>
        </select>
    </article>
    <article class="info-additional">
        <p>Wherever you're flying from, please check the local government advice before booking.</p>
        <p>Ready to travel? Navigate entry restrictions and quarantine requirements for any destination with our live map.</p>
        <p class="info-date" id="info-date">Info correct as of -, - -, -</p>
    </article>
</section>
<section class="covid-map" id="covid-map"></section>
<section class="info-summary container">
    <article class="summary-low col-md-3">
        <span id="low-restrictions-count">-</span>
        <p class="restrictions-type-title">Low restrictions</p>
        <p class="restrictions-type-description">You can travel here and likely won't need to quarantine when you arrive or return.</p>
    </article>
    <article class="summary-moderate col-md-3">
        <span id="moderate-restrictions-count">-</span>
        <p class="restrictions-type-title">Moderate restrictions</p>
        <p class="restrictions-type-description">Travel here is possible if you meet certain entry regulations which can include taking a COVID-19 test. You may also be required to quarantine upon arrival and/or return.</p>
    </article>
    <article class="summary-major col-md-3">
        <span id="major-restrictions-count">-</span>
        <p class="restrictions-type-title">Major restrictions</p>
        <p class="restrictions-type-description">Travel here may be suspended, the country may be closed or entry only possible if you are a citizen and/or meet strict requirements.</p>
    </article>
    <article class="summary-unknown col-md-3">
        <span id="unknown-restrictions-count">-</span>
        <p class="restrictions-type-title">Restrictions unknown</p>
        <p class="restrictions-type-description">Unfortunately, we do not have information for this destination. Please check with government sources for the most up-to-date travel advice.</p>
    </article>
</section>`;

    document.querySelector('.searchCashingBlock').prepend(mainElement);
};

export { createMainWithMap as default };
