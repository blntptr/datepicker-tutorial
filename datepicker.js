import { createOptionElement } from "./utility-functions.js";

class DatePicker {
    constructor(obj) {
        this.uid = obj.id;
        this.startDate = obj.startDate;
        this.endDate = obj.endDate;
        this.defaultYearAndMonth = obj.defaultYearAndMonth;
        this.currentYearAndMonth = obj.defaultYearAndMonth;

        this.inputElement = document.getElementById(this.uid);
        this.datepickerDiv = null;
    }

    addHTML() {
        const html = `
        <div class="datepicker u-div-show" id="datepicker-${this.uid}">
            <div class="datepicker-calendar">
                <div class="datepicker-calendar--header">
                    <div class="datepicker-calendar--header__dates">
                        <button class="month-change go-to-previous-month"><</button>
                            <span class="datepicker-calendar--header__dates year-and-month">
                                <span class="pick-year">
                                    <select class="pick-year-select">
                                        <!-- <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option> -->
                                    </select>
                                </span>
                                <span class="pick-month">
                                    <select class="pick-month-select">
                                        <!-- <option value="01">January</option>
                                        <option value="02">February</option>
                                        <option value="03">March</option> -->
                                    </select>
                                </span>
                            </span>
                        <button class="month-change go-to-next-month">></button>
                    </div>
                    <div class="datepicker-calendar--header__days-row">
                        <div class="day-unit">M</div>
                        <div class="day-unit">T</div>
                        <div class="day-unit">W</div>
                        <div class="day-unit">T</div>
                        <div class="day-unit">F</div>
                        <div class="day-unit">S</div>
                        <div class="day-unit">S</div>
                    </div>
                </div>

                <div class="datepicker-calendar--body">
                    <!--<div class="datepicker-calendar--body__days-row">
                        <div class="day-unit"><a href="#">1</a></div>
                        <div class="day-unit"><a href="#">2</a></div>
                        <div class="day-unit"><a href="#">3</a></div>
                        <div class="day-unit"><a href="#">4</a></div>
                        <div class="day-unit"><a href="#">5</a></div>
                        <div class="day-unit"><a href="#">6</a></div>
                        <div class="day-unit"><a href="#">7</a></div>
                    </div>
                    <div class="datepicker-calendar--body__days-row">
                        <div class="day-unit"><a href="#">8</a></div>
                        <div class="day-unit"><a href="#">9</a></div>
                        <div class="day-unit"><a href="#">10</a></div>
                        <div class="day-unit"><a href="#">11</a></div>
                        <div class="day-unit"><a href="#">12</a></div>
                        <div class="day-unit"><a href="#">13</a></div>
                        <div class="day-unit"><a href="#">14</a></div>
                    </div>-->
                </div>
            </div>
        </div>
        `;

        this.inputElement.parentElement.insertAdjacentHTML('beforeend', html);

        this.datepickerDiv = document.getElementById(`datepicker-${this.uid}`);

        this.setHeaderYearAndMonthRange();
    }

    setHeaderYearAndMonthRange() {
    
        const startYear = +this.startDate.substr(0,4);
        const endYear = +this.endDate.substr(0,4);
        const currentYear = +this.currentYearAndMonth.substr(0,4);

        for(let i=startYear; i<=endYear; i++) {
            const option = createOptionElement(i,i,`#datepicker-${this.uid} .pick-year-select`);
        }

        // console.log(moment(new Date(this.startDate)).format('YY-MMMM-DD'));
        
        let iterationDate = moment(new Date(this.startDate));
        let iterationDateYYYYMM = iterationDate.format('YYYY-MM');
        const endDate = moment(new Date(this.endDate));
        const endDateYYYYMM = endDate.format('YYYY-MM');

        while(iterationDateYYYYMM <= endDateYYYYMM) {
            if(+iterationDate.format('YYYY') === currentYear) {
                const option = createOptionElement(iterationDate.format('MM'),iterationDate.format('MMMM'),`#datepicker-${this.uid} .pick-month-select`);

                console.log(iterationDateYYYYMM);
            }
            

            iterationDate = iterationDate.add(1, 'months');
            iterationDateYYYYMM = iterationDate.format('YYYY-MM');

            document.querySelector(`#datepicker-${this.uid} .pick-year-select`).value = currentYear;
            document.querySelector(`#datepicker-${this.uid} .pick-month-select`).value = this.currentYearAndMonth.substr(5,2);
            
            
        }

        
        this.renderDays();

    }

    renderDays() {
        const monthArray = [];
        const firstDayOfMonth = this.firstWeekDayOfTheMonth();

        for(let i=1; i<firstDayOfMonth; i++) {
            monthArray.push('');
        }

        const daysInMonth = this.daysInCurrentMonth();

        for(let i=1; i<=daysInMonth; i++) {
            monthArray.push(i);
        }

        if(monthArray.length % 7 !== 0) {

            const trailingEmptySlots = 7 - monthArray.length % 7;

            for(let i=1; i<=trailingEmptySlots; i++) {
                monthArray.push('');
            }
        }

        console.log(monthArray);

        monthArray.forEach((day,index) => {
            if(index % 7 === 0) {
                const newRow = '<div class="datepicker-calendar--body__days-row"></div>';

                document.querySelector(`#datepicker-${this.uid} .datepicker-calendar--body`).insertAdjacentHTML('beforeend', newRow);
            }

            const calendarRows = document.querySelectorAll(`#datepicker-${this.uid} .datepicker-calendar--body__days-row`);
            const calendarRowsCount = calendarRows.length;

            const newDay = `<div class="day-unit">${day}</div>`

            calendarRows[calendarRowsCount-1].insertAdjacentHTML('beforeend', newDay);

        });
    }

    firstWeekDayOfTheMonth() {
        return moment(new Date(this.currentYearAndMonth)).isoWeekday();
    }

    daysInCurrentMonth() {
        return moment(new Date(this.currentYearAndMonth)).daysInMonth();
    }
}

export default DatePicker;