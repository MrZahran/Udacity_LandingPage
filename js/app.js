const sections = document.querySelectorAll("section");
const navList = document.querySelector("#navbar__list");

/* Create Li And Append It To Nav */
for (let index = 0; index < sections.length; index++) {
  const sectionName = sections[index].getAttribute("data-nav");
  const addLi = document.createElement("li");
  addLi.innerText = sectionName;
  navList.appendChild(addLi);
}

/* Add Style To Li */
const allLi = document.querySelectorAll("ul li");
for (let index = 0; index < allLi.length; index++) {
  const element = allLi[index];
  element.style.color = "black";
  element.style.padding = "20px";
  element.style.fontWeight = "bold";
  element.style.cursor = "pointer";
}

allLi.forEach((ele) => {
  // Scroll Smooth to section on click
  ele.onclick = (e) => {
    dataNav = `[data-nav="${e.target.textContent}"]`;
    function smoothScroll() {
      document.querySelector(dataNav).scrollIntoView({
        behavior: "smooth",
      });
    }
    smoothScroll();
  };

  // Add Hover Effect
  ele.addEventListener("mouseover", hoverEffectIn);
  ele.addEventListener("mouseout", hoverEffectOut);
  function hoverEffectIn() {
    ele.style.color = "white";
    ele.style.background = "black";
  }
  function hoverEffectOut() {
    ele.style.color = "black";
    ele.style.background = "white";
  }
});

/* Adding Active Style On Scroll */
window.addEventListener("scroll", () => {
  sections.forEach((element) => {
    let sectionTop = element.getBoundingClientRect().top;
    let windowHeight = window.innerHeight / 2;
    if (sectionTop < windowHeight && sectionTop > -windowHeight + 200) {
      element.classList.add("your-active-class");
      // Add Style To Li On Scroll
      for (let i = 0; i < allLi.length; i++) {
        if (allLi[i].textContent == element.getAttribute("data-nav")) {
          allLi[i].style.color = "white";
          allLi[i].style.background = "black";
        } else {
          allLi[i].style.color = "black";
          allLi[i].style.background = "white";
        }
      }
    } else {
      element.classList.remove("your-active-class");
    }
  });
});
