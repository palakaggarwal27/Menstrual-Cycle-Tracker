<
let date = new Date();

let month = date.getMonth();
let year = date.getFullYear();

monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


function prevmonth() {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    date = new Date(year, month);
    showCalendar(month, year);
}


function nextmonth() {
    month++;    
    if (month > 11) {
        month = 0;
        year++;
    }
    date = new Date(year, month);
    showCalendar(month, year);
}

function showCalendar(month, year) {
    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    document.getElementById("monthAndYear").innerHTML = monthNames[month] + " " + year;
    let tbl = document.getElementById("calendarBody");
    tbl.innerHTML = "";
    today = date.getDate();
    let day = 1;
    for (let i = 0; i < 5; i++) {
        let row = document.getElementById("calendarBody").insertRow();
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = row.insertCell();
                cell.innerHTML = "";
            }else if (day > daysInMonth) {
                break;
            }else {
                let cell = row.insertCell();
                cell.innerHTML = day; 
                if (day === date.getDate()) { 
                    cell.classList.add("bg-info");
                }
                day++; 
            } 
        }

    }
}

showCalendar(month, year);
            


