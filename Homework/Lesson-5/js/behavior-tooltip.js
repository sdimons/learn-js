document.addEventListener('mouseover', ({target : el}) => {
    ShowToolTip(el, 'show');
});

document.addEventListener('mouseout', ({target : el}) => {
    ShowToolTip(el, 'hide');
});

function createToolTip(el) {
    const tooltip = document.createElement('div');
    tooltip.textContent = el.dataset.tooltip;
    tooltip.classList.add('tooltip');
    el.append(tooltip);
    return tooltip;
}

function locateToolTip(tooltip) {
    const parent = tooltip.closest('button');
    const parentHeight = parent.offsetHeight;
    const tooltipHeight = tooltip.offsetHeight;
    const rect = parent.getBoundingClientRect();
    if (tooltipHeight > rect.y) {
        //рисуем внизу
        tooltip.style.left = rect.x + 'px';
        tooltip.style.top = rect.y + parentHeight + 'px';
    } else
    {
        //рисуем наверху
        tooltip.style.left = rect.x + 'px';
        tooltip.style.top = rect.y - tooltipHeight + 'px';
    }
}

function ShowToolTip(el, action) {
    if (el.tagName === 'BUTTON' && el.hasAttribute('data-tooltip')) {
        let tooltip = el.querySelector('.tooltip');
        if (tooltip === null) {
            tooltip = createToolTip(el);
        }
        if (action === 'hide') {
            tooltip.classList.add('hide');
        } else {
            tooltip.classList.remove('hide');
            locateToolTip(tooltip);
        }
    }
} 
