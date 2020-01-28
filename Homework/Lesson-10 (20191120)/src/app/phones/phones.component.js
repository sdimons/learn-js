import { PhonesCatalogComponent } from './phones-catalog/phones-catalog.component.js'

export class PhonesComponent {
    constructor({element, phones}) {
        this._element = element;
        this._phones = phones;
        this._render();
        this._initCatalog();
    }
    _render() {
        this._element.innerHTML = `
            <ul class="phones">
                ${this._phones.map((phone) => `
                    <li class="thumb">
                      <p>${phone.name}</p>
                    </li>
                `).join('')}
            </ul>`;
    }

    _initCatalog(){
        this._catalog = new PhonesCatalogComponent({
            onPhoneSelected: (phoneId) => console.log(phoneId)
        });
    }
}