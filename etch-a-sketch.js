const container = document.querySelector('.container');
let userSelection = document.querySelector('#size').value;


function LoadGrid(isFirstRun) {
    let gridTemplateColumns = '';
    container.innerHTML = '';
    container.style.gridTemplateColumns = '';
    for (let i = 0; i < userSelection; i++) {
        gridTemplateColumns += 'auto ';
        for (let j = 0; j < userSelection; j++) {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            container.appendChild(div);
        }
    }
    container.style.gridTemplateColumns = gridTemplateColumns.trim();

    if (!isFirstRun) {
        const divs = document.querySelectorAll('.grid-item');
        divs.forEach(div => div.addEventListener('mouseenter', OnMouseEnter));
    }
}

LoadGrid(true);

function OnMouseEnter() {
    this.style.backgroundColor = document.querySelector('#color').value;
}

const divs = document.querySelectorAll('.grid-item');
divs.forEach(div => div.addEventListener('mouseenter', OnMouseEnter));

function OnColorChange(event) {
    if (event.target.id == 'bg-color') {
        container.style.backgroundColor = this.value;
    }
}

document.querySelectorAll('.picker').forEach(picker => picker.addEventListener('change', OnColorChange));

document.querySelector('button').addEventListener('click', OnSubmit);

document.querySelector('#size').addEventListener('change', (e) => {
    userSelection = e.target.value;
});

function OnSubmit() {
    if (userSelection.trim() > 100 || userSelection.trim() < 10) {
        alert("Please enter a value between 10 and 100");
        return;
    }
    LoadGrid(false);
}