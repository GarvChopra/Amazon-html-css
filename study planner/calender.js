const daysContainer = document.querySelector(".days");
const monthTitle = document.querySelector(".month-title");
const prevIcon = document.querySelector(".fa-chevron-left");
const nextIcon = document.querySelector(".fa-chevron-right");

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Get real today
const today = new Date();

// These control what month is displayed
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

function renderCalendar(month, year) {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
    const lastDayOfPrevMonth = new Date(year, month, 0).getDate();

    let daysHTML = "";

    // Previous month's trailing days
    for (let i = firstDayOfMonth; i > 0; i--) {
        daysHTML += `<li class="inactive">${lastDayOfPrevMonth - i + 1}</li>`;
    }

    // Current month's days
    for (let i = 1; i <= lastDateOfMonth; i++) {
        const isToday =
            i === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();
        daysHTML += `<li class="${isToday ? 'active' : ''}">${i}</li>`;
    }

    daysContainer.innerHTML = daysHTML;
    monthTitle.innerText = `${months[month]} ${year}`;
}

// Previous month button
prevIcon.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
});

// Next month button
nextIcon.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
});

// Initial render
renderCalendar(currentMonth, currentYear);
