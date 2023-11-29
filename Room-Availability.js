console.log(localStorage);

const selectedDate = localStorage.getItem("selectedDate");
const selectedMonth = localStorage.getItem("selectedMonth");
const selectedYear = localStorage.getItem("selectedYear");

console.log(selectedDate);
console.log(selectedMonth);
console.log(selectedYear);

const guestInput = document.querySelector("h5");

console.log(guestInput);

if (guestInput) {
  guestInput.innerHTML =
    selectedDate + " " + selectedMonth + " " + selectedYear;
} else {
  console.error("Element with ID 'GuestInput' not found.");
}
