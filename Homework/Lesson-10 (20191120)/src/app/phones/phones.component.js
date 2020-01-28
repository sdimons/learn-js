export class PhonesComponent {
    constructor({element, phones}) {
        this._element = element;
        this._phones = phones;
        this._render();
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
}