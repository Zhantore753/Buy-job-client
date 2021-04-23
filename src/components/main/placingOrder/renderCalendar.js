export default function renderCalendar(date, setSelectedDate){

    date.setDate(1);

    const monthDays = document.querySelector(".days");

    // функция определяет сколько дней в текущем месяце
    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate(); 

    // функция определяет сколько дней в предыдущем месяце
    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    // определеям день недели первого числа месяца
    const firstDayIndex = date.getDay() - 1;

    // определеям день недели последнего числа месяца
    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    // определяем сколько дней следующего месяца поместится на календаре
    const nextDays = 7 - lastDayIndex ;

    const months = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
    ];

    document.querySelector(".date h2").innerHTML = months[date.getMonth()];

    document.querySelector(".date p").innerHTML = date.getFullYear();

    let daysArr = [];
    let days = "";

    // отображаем дни прошлого месяца
    for (let x = firstDayIndex; x > 0; x--) {
        daysArr.push(`<div class="prev-date date">${prevLastDay - x + 1}</div>`);
    }

    // отображаем дни текущего месяца
    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            daysArr.push(`<div class="today date">${i}</div>`);
        } else {
            daysArr.push(`<div class="date">${i}</div>`);
        }
    }

    // отображаем дни следующего месяца
    for (let j = 1; j <= nextDays; j++) {
        daysArr.push(`<div class="next-date date">${j}</div>`);
    }

    daysArr.forEach((item, index)=>{
        if(index % 7 === 0){
            days += `<div class="days__row">`;
        }
        days += item;
        if(index % 7 - 6 === 0){
            days += `</div>`;
        }
    });

    monthDays.innerHTML = days;

    const daysElements = monthDays.querySelectorAll('.date');

    daysElements.forEach(item=>{
        item.addEventListener('click', ()=>{
            daysElements.forEach(day=>{
                day.classList.remove('selected-date');
            });
            item.classList.add('selected-date');
            setSelectedDate(new Date(`${date.getFullYear()}-${date.getMonth() + 1}-${item.textContent}`));
            // selectedDate = new Date("2015-03-25");
        });
    });
};