/*

const page = document.querySelector(".Confirmation");
const booknow = document.querySelector(".BookNow");
const closepage = document.querySelector(".Confirm");

booknow.addEventListener("click", function () {
  page.showModal();
  storeInput();
  getData();
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
    console.log(localStorage);
  }
}

const roombutton = document.querySelector("#navigation h2");

roombutton.addEventListener("click", function () {
  localStorage.clear();
});

*/

const page = document.querySelector(".Confirmation");
const booknow = document.querySelector(".BookNow");
const closepage = document.querySelector(".Confirm");

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

function HighlightError(input, message) {
  const formfield = input.parentElement;
  console.log(formfield);
  const small = formfield.querySelector("small");

  small.innerText = message;

  formfield.className = "formfield error";
}

function RemoveError(input) {
  const formfield = input.parentElement;
  formfield.className = "formfield";
}

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
