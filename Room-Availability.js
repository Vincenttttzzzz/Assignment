const selectedDate = localStorage.getItem("selectedDate");
const selectedMonth = localStorage.getItem("selectedMonth");
const selectedYear = localStorage.getItem("selectedYear");

const guestInput = document.querySelector("h5");

console.log(guestInput);

if (guestInput) {
  guestInput.innerHTML =
    selectedDate + " " + selectedMonth + " " + selectedYear;
}

const roombutton = document.querySelector("#navigation h2");
roombutton.addEventListener("click", function () {
  localStorage.clear();
});
