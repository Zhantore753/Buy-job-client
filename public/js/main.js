const burger = document.querySelector('.nav__burger');
const header = document.querySelector('.header');
const pageDoc = window.location.pathname;

if(burger){
    burger.addEventListener('click', ()=>{
        document.body.classList.toggle('overflow-h');
        burger.classList.toggle('nav__burger-active');
        header.classList.toggle('header-active');
    });
}

if(pageDoc.includes("placing__order")){

    const date = new Date();

    const renderCalendar = () => {
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
        const firstDayIndex = date.getDay();

        // определеям день недели последнего числа месяца
        const lastDayIndex = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDay();

        // определяем сколько дней следующего месяца поместится на календаре
        const nextDays = 7 - lastDayIndex - 1;

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

        document.querySelector(".date p").innerHTML = new Date().getFullYear();

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
            });
        });
    };

    document.querySelector(".prev").addEventListener("click", () => {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
    });

    document.querySelector(".next").addEventListener("click", () => {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();


    const fileInput = document.querySelector('.placing-order__file');
    const addedFilesWrapper = document.querySelector('.placing-order__addedfiles');

    const filesRender = (fileArr) => {
        let files = "";
        for(let i = 0; i < fileArr.length; i++){
            const file = fileArr[i];
            files +=`
            <li>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.8928 4.75001C12.518 4.75001 12.2142 4.4462 12.2142 4.07143V0H4.07136C2.94706 0 2.03564 0.911419 2.03564 2.03571V16.9643C2.03564 18.0886 2.94706 19 4.07136 19H14.9285C16.0528 19 16.9642 18.0886 16.9642 16.9643V4.75001H12.8928Z" fill="#3C4852"/>
                    <path d="M13.5713 0.397705V3.39291H16.5665L13.5713 0.397705Z" fill="#3C4852"/>
                </svg>
                <p>${i+1} ${file.name}</p>
                <svg class="placing-order__addedfiles-delete" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.31499 5.50034L10.718 2.09735C11.094 1.72135 11.094 1.11177 10.718 0.736363L10.2643 0.282702C9.88821 -0.0934113 9.27863 -0.0934113 8.90322 0.282702L5.50034 3.68558L2.09735 0.281997C1.72135 -0.0939988 1.11177 -0.0939988 0.736363 0.281997L0.281997 0.735658C-0.0939988 1.11177 -0.0939988 1.72135 0.281997 2.09676L3.68558 5.50034L0.282702 8.90322C-0.0934113 9.27933 -0.0934113 9.88891 0.282702 10.2643L0.736363 10.718C1.11236 11.094 1.72194 11.094 2.09735 10.718L5.50034 7.31499L8.90322 10.718C9.27933 11.094 9.88891 11.094 10.2643 10.718L10.718 10.2643C11.094 9.88821 11.094 9.27863 10.718 8.90322L7.31499 5.50034Z" fill="#BBB5B5"/>
                </svg>                                
            </li>
            `
        }
        if(files){
            addedFilesWrapper.innerHTML = files;
        }else{
            addedFilesWrapper.innerHTML = "Ничего не было добавленно";
        }

        const fileDeletes = document.querySelectorAll('.placing-order__addedfiles-delete');

        fileDeletes.forEach((item, index)=>{
            item.addEventListener('click', ()=>{
                fileArr.splice(index, 1);
                filesRender(fileArr);
            });
        });
    }

    fileInput.addEventListener('change', ()=>{

        const fileArr = [];

        for(let i = 0; i < fileInput.files.length; i++){
            fileArr.push(fileInput.files[i]);
        }

        filesRender(fileArr);
    });

}

const radioBtns = document.querySelectorAll('.questionary__form-area-radio-item');


if(pageDoc.includes("reg__exec")){
    radioBtns.forEach(item=>{
        item.addEventListener('click', ()=>{
            radioBtns.forEach(i=>{
                i.classList.remove('questionary__form-area-radio-item-active');
            })
            item.classList.toggle('questionary__form-area-radio-item-active');
        });
    });
}