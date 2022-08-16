let allTabs = document.querySelectorAll(".info ul li");
let allDivs = document.querySelectorAll(".info .info-content div");
allTabs.forEach((tab) => {
  tab.addEventListener("click", (ele) => {
    ele.target.parentElement.querySelectorAll("li").forEach((ele) => {
      ele.classList.remove("active");
    });
    ele.target.classList.add("active");
    allDivs.forEach((div) => {
      div.style.display = "none";
      document.querySelector("." + ele.target.dataset.class).style =
        "display:block;";
    });
  });
});
