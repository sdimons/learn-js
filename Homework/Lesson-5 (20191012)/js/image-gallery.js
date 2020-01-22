const thumbs = document.querySelector('#thumbs');
thumbs.addEventListener('click', ({target : el}) => {
    event.preventDefault();
    if (el.tagName === 'IMG') {
        const parent = el.closest('a');
        changeImage(el.getAttribute('src'), parent.getAttribute('title'));
    }
    
});

function changeImage(src, title) {
    const largeImg = document.querySelector('#largeImg');
    largeImg.setAttribute('src', src);
    largeImg.setAttribute('title', title);
}