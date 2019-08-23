const goods = document.querySelector(".goods");
const good = goods.querySelectorAll(".good");
const btnTablet = goods.querySelector(".goods__button--tablet");
const btnRow = goods.querySelector(".goods__button--row");

btnTablet.addEventListener("click", function () {
  for (let i = 0; i < good.length; i++) {
    good[i].classList.remove("good--row");
  }
})

btnRow.addEventListener("click", function () {
  for (let i = 0; i < good.length; i++) {
    if (!good[i].classList.contains("good--row")) {
      good[i].classList.add("good--row");
    }
  }
})
