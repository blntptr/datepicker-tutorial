import DatePicker from "./datepicker.js";

let newStartDate;
let newEndDate;

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
                startDate: newStartDate || "2018-11-15",
                endDate: newEndDate || "2021-03-15",
                defaultYearAndMonth: "2020-12"
            });
            activatedDatepickers.push(datepicker);
            datepicker.addHTML();
            // console.log(datepicker);
    
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

document.querySelector('.container').addEventListener('click', () => {
    closeDatepickers();
});

document.querySelector('#from').addEventListener('date-selected', (event) => {
    const active = activatedDatepickers.find(activated => activated.uid === "to");

    if(!active) {
        newStartDate = event.detail;
    }else{
        active.resetStartDate(event.detail);
    }
    
});

document.querySelector('#to').addEventListener('date-selected', (event) => {
    const active = activatedDatepickers.find(activated => activated.uid === "from");

    if(!active) {
        newEndDate = event.detail;
    }else{
        active.resetEndDate(event.detail);
    }
    
});

