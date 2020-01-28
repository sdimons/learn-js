export class PhonesCatalogComponent {
    constructor({element, phones, onPhoneSelected}) {
        this._element = element;
        this._phones = phones;
        this._render();
        this._element.addEventListener('click', (event) => {
            let element = event.target.closest('.thumb');
            if (!element) {
                return;
            }
            //console.log(element.dataset.phoneId);
            this.onPhoneSelected(element.dataset.phoneId);
        });
       
    }
    
    _render() {
        this._element.innerHTML = `
           <ul class="phones">
           ${this._phones.map((phone) => {
            return ` <li class="thumbnail">
                           <a href="#!/phones/${phone.id}" class="thumb" data-phone-id=${phone.id}>
                               <img alt=${phone.name} src=${phone.imageUrl}>
                           </a>
                           <div class="phones__btn-buy-wrapper">
                                    <a class="btn btn-success add" data-phone-id=${phone.id}>
                                                    Add
                                    </a>
                           </div>
                           <a href="#!/phones/${phone.id}">${phone.name}</a>
                           <p>${phone.snippet}</p>
                     </li>
           `;
        }).join('')}
        </ul>
        
        `;
    }
}