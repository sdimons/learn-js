const tree = document.querySelector('#tree');

const [...lis] = tree.querySelectorAll('li');
lis.forEach((li) => {
    let span = document.createElement('span');
    
});

tree.addEventListener('click', ({target : el}) => {
     if (el.tagName === 'LI') {
         let [...uls] = el.querySelectorAll('ul');
         uls.forEach(element => element.classList.toggle('hide'));
     }
});

tree.addEventListener('mouseover', ({target: el}) => {
    if (el.tagName === 'LI'){
        el.classList.add('font-thick');
        let [...lis] = el.querySelectorAll('li');
        lis.forEach(element => element.classList.add('font-normal'));
    }
});

tree.addEventListener('mouseout', ({target: el}) => {
    if (el.tagName === 'LI') {
        el.classList.remove('font-thick');
        let [...lis] = el.querySelectorAll('li');
        lis.forEach(element => element.classList.remove('font-normal'));
    }
});