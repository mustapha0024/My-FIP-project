const monthYear = document.getElementById("month-year");
const calendarDates = document.getElementById("calendar-dates");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let date = new Date(2025, 7); // Start with August 2025

// Render calendar

function renderCalendar() {
  const year = date.getFullYear();
  const month = date.getMonth();

  // Month names
  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  // Set header
  monthYear.innerText = `${months[month]} ${year}`;

  // First and last day
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  // Clear previous calendar
  calendarDates.innerHTML = "";

  // Add empty slots for alignment
  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("div");
    calendarDates.appendChild(emptyCell);
  }

  // Add dates
  for (let i = 1; i <= lastDate; i++) {
    const dateCell = document.createElement("div");
    dateCell.innerText = i;
    calendarDates.appendChild(dateCell);
  }
}

// Navigation
prevBtn.addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

nextBtn.addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

// Initial render
renderCalendar();
