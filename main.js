// alert("Working!");

const acc = document.getElementsByClassName("accordion");

// console.log(acc);

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", () => {
    // let panel = this.nextElementSibling;
    let panel = acc[i].nextElementSibling; //above line is outdated!!!

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      acc[i].classList.remove("open");
      acc[i].getElementsByClassName("icon")[0].innerHTML = "+";
    } else {
      for (let x = 0; x < acc.length; x++) {
        acc[x].nextElementSibling.style.maxHeight = null;
        acc[x].classList.remove("open");
        acc[x].getElementsByClassName("icon")[0].innerHTML = "+";
      }

      panel.style.maxHeight = panel.scrollHeight + "px";
      acc[i].classList.toggle("open");
      acc[i].getElementsByClassName("icon")[0].innerHTML = "-";
    }
  });
}
