class DatePicker {
    constructor(obj) {
        this.uid = obj.id;
        this.startDate = obj.startDate;
        this.endDate = obj.endDate;

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
                                                <option value="01">January</option>
                                                <option value="02">February</option>
                                                <option value="03">March</option>
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
                            <div class="datepicker-calendar--body__days-row">
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
                            </div>
                        </div>
                    </div>
                </div>
        `;

        this.inputElement.parentElement.insertAdjacentHTML('beforeend', html);

        this.datepickerDiv = document.getElementById(`datepicker-${this.uid}`);
    }
}

export default DatePicker;