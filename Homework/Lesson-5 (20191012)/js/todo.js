const todo = document.querySelector('.todoapp');

generateTODOExt(todo);

function generateTODO(element) {
    const input = element.querySelector('.new-todo');
    const ul = element.querySelector('.todo-list');
    const filter = element.querySelector('.filters');
    const count = element.querySelector('.todo-count strong');

    ul.addEventListener('click', ({target: el}) => {
        console.log(el);
        const isRemove = el.classList.contains('destroy');
        const isComplete = el.classList.contains('toggle');
        if (!isRemove && !isComplete) {
            return;
        }
        const elLi = el.closest('li.todo-element');
        if (isRemove) {
            ul.removeChild(elLi);
            updateCount(count, ul);
            return;
        }
        elLi.classList.toggle('completed')
        updateCount(count, ul);
    });
    input.addEventListener('keydown', ({keyCode, target}) => {
        if (keyCode !== 13 || !target.value) {
            return;
        }
        ul.insertAdjacentHTML('beforeend', `
            <li class="todo-element">
                <div class="view">
                    <input class="toggle" type="checkbox" >
                    <label>${target.value}</label>
                    <button class="destroy"></button>
                </div>
            </li>
        `);
        target.value = '';
        updateCount(count, ul);
    });
    filter.addEventListener('click', ({target: el}) => {
        const list = ul.querySelectorAll('li');

        for (let li of list) {
            switch (el.className) {
                case 'all' : {
                    li.removeAttribute('hidden');
                    break;
                }
                case 'active' : {
                    if (li.classList.contains('completed')) {
                        li.setAttribute('hidden', true);
                        break
                    }
                    li.removeAttribute('hidden');
                    break;
                }
                case 'completed' : {
                    if (li.classList.contains('completed')) {
                        li.removeAttribute('hidden');
                        break
                    }
                    li.setAttribute('hidden', true);
                    break;
                }
            }
        }
        updateCount(count, ul);
    });
}

function updateCount(el, listContainer) {
    const list = [...listContainer.querySelectorAll('li')]
        .filter((li) => !li.hasAttribute('hidden'));
    el.innerHTML = list.length
}

//Доп. задачи
function changeSelectedAll(element, sw) {
    const ul = element.querySelector('.todo-list');
    const list = ul.querySelectorAll('li');
    for (let li of list) {
        const input = li.querySelector('input');
        if (sw) {
            input.setAttribute('checked', true);
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
            input.removeAttribute('checked');
        }
    }
    const count = element.querySelector('.todo-count strong');
    updateCount(count, ul);
};

function generateTODOExt(element) {
    generateTODO(element);
    const clearAll = element.querySelector('.clear-all');
    const selectAll = element.querySelector('.select-all');
    const clearCompleted = element.querySelector('.clear-completed');

    clearAll.addEventListener('click', () => {
        event.preventDefault();
        changeSelectedAll(element, false);
    });

    selectAll.addEventListener('click', () => {
        event.preventDefault();
        changeSelectedAll(element, true);
    });

    clearCompleted.addEventListener('click', () => {
        event.preventDefault();
        const ul = element.querySelector('.todo-list');
        const list = ul.querySelectorAll('li');
        for (let li of list) {
            if (li.classList.contains('completed')) {
                li.setAttribute('hidden', true);
            }
        }
        const count = element.querySelector('.todo-count strong');
        updateCount(count, ul);
    });
} 

