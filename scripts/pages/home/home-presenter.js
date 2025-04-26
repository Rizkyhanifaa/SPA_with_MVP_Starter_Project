
import { sleep } from '../../utils.js';

export default class HomePresenter {
    #model;
    #view;

    constructor({ model, view }) {
        this.#model = model;
        this.#view = view;
    }

    async #getCats() {
        this.#view.showLoading();
     
        const cats = await this.#model.getAllCats();
        await sleep();
        this.#view.showCats(cats);
     
        this.#view.hideLoading();
    }

    async showCats() {
        await this.#getCats();
    }
}
