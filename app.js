import DatePicker from "./datepicker.js";

const closeDatepickers = () => {
    activatedDatepickers.forEach(active => {
        if(active.datepickerDiv.className.indexOf('u-div-show') > -1)
            active.datepickerDiv.classList.remove('u-div-show');
    });
}

const datepickerInputs = [];
const datepickerInputElements = document.getElementsByClassName('datepicker-input');

for(let i=0; i<datepickerInputElements.length; i++) {
    datepickerInputs.push(datepickerInputElements[i]);
}

const activatedDatepickers = [];

datepickerInputs.forEach(datepickerInput => {

    const ID = datepickerInput.getAttribute('id');

    datepickerInput.addEventListener('focus', () => {
        closeDatepickers();
        const active = activatedDatepickers.find(activated => activated.uid === ID);

        if(!active) {
            const datepicker = new DatePicker({
                id: ID,
                startDate: "2018-11-30",
                endDate: "2021-03-31",
                defaultYearAndMonth: "2018-11"
            });
            activatedDatepickers.push(datepicker);
            datepicker.addHTML();
            console.log(datepicker);
    
            datepicker.datepickerDiv.addEventListener('click', (event) => {
                event.stopPropagation();
            });
        }else{
            active.datepickerDiv.classList.add('u-div-show');
        }

        // console.log(activatedDatepickers);
        
    });

    datepickerInput.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});

// const fromStartDate = "2018-11-30";
// const fromEndDate = "2021-03-31";

// const fromStartYear = +fromStartDate.substr(0,4);
// const fromEndYear = +fromEndDate.substr(0,4);

// for(let i=fromStartYear; i<=fromEndYear; i++) {
//     const option = document.createElement('option');
//     option.value = i;
//     option.text = i;
//     document.querySelector('#datepicker-from .pick-year-select').appendChild(option);
// }





// document.querySelector('#from').addEventListener('focus', () => {
//     document.querySelector('#datepicker-from').classList.add('u-div-show');
// });

// document.querySelector('#from').addEventListener('click', (event) => {
//     event.stopPropagation();
// });

// document.querySelector('#datepicker-from').addEventListener('click', (event) => {
//     event.stopPropagation();
// });

document.querySelector('.container').addEventListener('click', () => {
    closeDatepickers();
});

