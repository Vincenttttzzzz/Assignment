const page = document.querySelector(".Confirmation");
const booknow = document.querySelector(".BookNow");
const closepage = document.querySelector(".Confirm");

/* Book Now button */
booknow.addEventListener("click", function (e) {
  e.preventDefault();
  if (validateForm()) {
    page.showModal();
    storeInput();
    getData();
  }
});

const information = [
  "First Name",
  "Last Name",
  "Email",
  "Member",
  "Country",
  "Address",
  "City",
  "State",
  "Card Number",
  "Zip Code",
  "Expiration Month",
  "Expiration Year",
];

closepage.addEventListener("click", function () {
  page.close();
});

/* Check input */
function validateForm() {
  const inputs = document.querySelectorAll("input");
  let isValid = true;

  inputs.forEach((input, i) => {
    if (input.value.trim() === "") {
      HighlightError(input, `${information[i]} cannot be blank`);
      isValid = false;
    } else {
      RemoveError(input);
    }
  });

  return isValid;
}

/* store input in local storage by looping and store values in an array */
function storeInput() {
  const labels = document.querySelectorAll("label");
  const inputs = document.querySelectorAll("input");
  const obj = {};

  for (let i = 0; i < labels.length; i++) {
    if (inputs[i].id !== null) {
      obj[labels[i].id] = inputs[i].value;
    }
  }

  localStorage.setItem("formData", JSON.stringify(obj));
}

/* Highlight null input boxes */
function HighlightError(input, message) {
  const formfield = input.parentElement;
  const small = formfield.querySelector("small");

  small.innerText = message;

  formfield.className = "formfield error";
}

function RemoveError(input) {
  const formfield = input.parentElement;
  formfield.className = "formfield";
}

/* Retrieving data from local storage*/
function getData() {
  const formdataString = localStorage.getItem("formData");
  const formdata = JSON.parse(formdataString);
  let content = document.querySelector(".Confirmation-body");

  let values = Object.values(formdata);

  content.innerHTML = "";

  for (let i = 0; i < information.length; i++) {
    const info1 = information[i];
    const info2 = values[i];
    content.innerHTML += `<div class="Info"> 
                          <span>${info1}</span>
                          <span>${info2}</span> 
                          </div>`;
  }
}

const roombutton = document.querySelector("#navigation h2");

roombutton.addEventListener("click", function () {
  localStorage.clear();
});
