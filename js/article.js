let tab = document.querySelector(".nav li");
let tabs = document.querySelectorAll(".nav li");
let tabsArray = Array.from(tabs);
let section = document.querySelectorAll(".section");
let sectionArray = Array.from(section);
let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".previous");
let current = 0;

tabsArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        tabsArray.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        
        sectionArray.forEach((sec) => {
            sec.classList.remove("active");
        });
        if(e.currentTarget.dataset.cont =='r1'){
           prevButton.classList.add("disable");
        }else{
          prevButton.classList.remove("disable");
  }
if (
  document.querySelector("#" + e.currentTarget.dataset.cont) ==
  sectionArray[sectionArray.length - 1]
) {
  nextButton.classList.add("disable");
} else {
  nextButton.classList.remove("disable");
}
        document.querySelector('#' + e.currentTarget.dataset.cont).classList.add("active");
    });
});