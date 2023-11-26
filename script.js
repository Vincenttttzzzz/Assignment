/*
const date = new Date();

const updateCalendar = () => {
  date.setDate(1);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    days += `<div>${i}</div>`;
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
  }

  monthDays.innerHTML = days;

  document.querySelector(".date h5").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();
};


document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  updateCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  updateCalendar();
});

updateCalendar();
*/

const date = new Date();

const updateCalendar = () => {
  date.setDate(1);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    days += `<div  onclick="selectDate(${i}, '${months[date.getMonth()]}',
     '${date.getFullYear()}')">${i}</div>`;
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
  }

  monthDays.innerHTML = days;

  document.querySelector(".date h5").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();
};

updateCalendar();

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  updateCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  updateCalendar();
});

function selectDate(day, month, year) {
  // Store the selected date in local storage
  localStorage.setItem("selectedDate", day);
  localStorage.setItem("selectedMonth", month);
  localStorage.setItem("selectedYear", year);

  // Highlight the selected date visually (you can add a class or styling)
  const selectedDateElement = document.querySelector(".calendar-date.selected");
  if (selectedDateElement) {
    selectedDateElement.classList.remove("selected");
  }

  const newSelectedDateElement = document.querySelector(
    `.calendar-date[data-day="${day}"]`
  );
  if (newSelectedDateElement) {
    newSelectedDateElement.classList.add("selected");
  }
}

function storeItem() {
  const selectedDate = localStorage.getItem("selectedDate");

  // Check if a date was previously selected
  if (selectedDate) {
    // Navigate to Room Availability page and pass the selected date as a parameter in the URL
    window.location.href = `Room-Availability.html`;
  } else {
    alert("Please select a date before checking availability.");
    event.preventDefault();
  }
}

/* Call Store Item Function when 'checkavailability' button is clicked */
document
  .getElementById("checkavailability")
  .addEventListener("click", storeItem, set_date);

window.addEventListener("beforeunload", function () {
  // Clear the local storage
  localStorage.clear();
});

function set_date() {
  const day = localStorage.getItem("selectedDate");
  const month = localStorage.getItem("selectedMonth");
  const year = localStorage.getItem("selectedYear");

  console.log(day);
  document.querySelector("#GuestInput h5").innerHTML =
    day + " " + month + " " + year;
}
