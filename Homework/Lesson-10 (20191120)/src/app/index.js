import {PhonesComponent} from './phones/phones.component.js'
import {PhonesService} from './phones/phones.service.js';

new PhonesComponent({
    element: document.querySelector('.root'),
    phones: PhonesService.getAll()
});