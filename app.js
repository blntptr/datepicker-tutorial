const fromStartDate = "2018-11-30";
const fromEndDate = "2021-03-31";

const fromStartYear = +fromStartDate.substr(0,4);
const fromEndYear = +fromEndDate.substr(0,4);

for(let i=fromStartYear; i<=fromEndYear; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.text = i;
    document.querySelector('#datepicker-from .pick-year-select').appendChild(option);
}





document.querySelector('#from').addEventListener('focus', () => {
    document.querySelector('#datepicker-from').classList.add('u-div-show');
});

document.querySelector('#from').addEventListener('click', (event) => {
    event.stopPropagation();
});

document.querySelector('#datepicker-from').addEventListener('click', (event) => {
    event.stopPropagation();
});

document.querySelector('.container').addEventListener('click', () => {
    document.querySelector('#datepicker-from').classList.remove('u-div-show');
});

