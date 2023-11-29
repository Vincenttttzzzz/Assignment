const page = document.querySelector(".Confirmation");
const booknow = document.querySelector(".BookNow");
const closepage = document.querySelector(".Confirm");

booknow.addEventListener("click", function () {
  page.showModal();
});

closepage.addEventListener("click", function () {
  page.close();
});



booknow.addEventListener("click", storeInput);

function storeInput() {
    const forms = document.querySelectorAll("form");
    foreach (form in forms){
        Array.from(form.elements).forEach((input) => {
            
        })
    }
}
