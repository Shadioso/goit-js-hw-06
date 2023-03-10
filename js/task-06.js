const input = document.querySelector(`#validation-input`);
const inputLength = Number(input.getAttribute(`data-length`));
const validationCheck = (event) => {
  if (event.currentTarget.value.length === inputLength) {
    input.classList.remove(`invalid`);
    input.classList.add(`valid`);
  } else {
    input.classList.remove(`valid`);
    input.classList.add(`invalid`);
  }
};
//
input.addEventListener(`blur`, validationCheck);
