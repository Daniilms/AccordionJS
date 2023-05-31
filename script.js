const tabs = document.querySelectorAll(".tab");

const links = document.querySelectorAll(".link a");

const array = [];

function toUpper() {
  let integer = 0;

  links.forEach((link) => {
    integer++;
    array.push(link.textContent);
    let firstLetter = link.textContent.trim().slice(0, 1);
    console.log(firstLetter);
    link.textContent =
      firstLetter.toUpperCase() +
      link.textContent.trim().slice(1, 8) +
      " " +
      integer;
  });
}
toUpper();

function removeClass() {
  tabs.forEach((el) => {
    el.classList.remove("active");
  });
}
tabs.forEach((el) => {
  el.addEventListener("click", function (evt) {
    removeClass();
    evt.target.closest(".tab").classList.add("active");
  });
});
