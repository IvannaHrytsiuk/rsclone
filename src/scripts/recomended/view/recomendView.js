import { RecomendModel } from '../model/recomendModel';

export const RecomendView = class {
    init() {
        const model = new RecomendModel();
        const arr = model.generateUniqueArr();
        const child = document.querySelector('.recomends').children;
        for (let i = 0; i < arr.length; i += 1) {
            child[i].innerHTML = `
                <div class="imgBlock">
                    <div style="background-image: url(${arr[i].image})"></div>
                </div>
                <div class="routeBlock">
                    <h3>${arr[i].name}, <span>${arr[i].country.name}</span></h3>
                    <p>Get price ></p>
                </div>
            `;
            child[i].setAttribute('data-arr', arr[i].id);
            // child[i].addEventListener('click', () => {
            //     model.searchFlight(child[i].getAttribute('data-arr'));
            //     window.location = 'flight.html';
            // });
        }
        document.querySelector('.recomends').addEventListener('click', (e) => {
            if (e.target.parentNode.parentNode.hasAttribute('data-arr')) {
                model.searchFlight(e.target.parentNode.parentNode.getAttribute('data-arr'));
                window.location = 'flight.html';
            }
        });
    }
};
