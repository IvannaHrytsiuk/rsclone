export const SearchCashView = class {
    init() {
        let returnHTML;
        if (localStorage.getItem('search')) {
            const storageArr = JSON.parse(localStorage.getItem('search'));
            returnHTML = '<h3>Continue your search</h3>';
            for (let i = 0; i < storageArr.length; i += 1) {
                returnHTML += `
                    <div class="col-sm-3">
                        <div class="routeBlock">
                            <span>${storageArr[i].data[0].cityFrom}</span>
                            <span>${storageArr[i].data[0].route.length === 1 ? '→' : '↔'}</span>
                            <span>${storageArr[i].data[0].cityTo}</span>
                        </div>
                        <p>${storageArr[i].data[0].route.length === 1 ? `${this.getDate(storageArr[i].data[0].route[0].local_departure)}` : `${this.getDate(storageArr[i].data[0].route[0].local_departure)} - ${this.getDate(storageArr[i].data[0].route[1].local_departure)}`}</p>
                        <div class="pasangersCountBlock">
                            <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-person-64.png?alt=media&token=bcd3db7e-8ae5-4d1b-bc63-334de322bd0d">
                            <span>${storageArr[i].search_params.seats.passengers}</span>
                        </div>
                    </div>
                `;
            }
        }
        return returnHTML;
    }

    getDate(date) {
        const dateformat = new Date(date);
        return dateformat.toDateString();
    }
};
