const inputFields = document.querySelectorAll(".input__field");

for (let input of inputFields) {
  input.addEventListener("focus", (e) => {
    const placeHolder = e.target.nextElementSibling;
    placeHolder.style.fontSize = "1.2rem";

    placeHolder.style.top = "32%";
  });

  input.addEventListener("focusout", (e) => {
    if (!e.target.value) {
      const placeHolder = e.target.nextElementSibling;
      placeHolder.style.fontSize = "1.5rem";

      placeHolder.style.top = "50%";
    }
  });
}

// document.querySelector(".year").addEventListener("keypress", (e) => {
//   onlyNumber(e);
// });

// function onlyNumber(e) {
//   const charCode = e.which ? e.which : e.keyCode;
//   if (charCode > 31 && (charCode < 48 || charCode > 57)) e.preventDefault();
// }
