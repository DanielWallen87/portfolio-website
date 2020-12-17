let faq = document.getElementsByClassName("faq-button");
let i;

for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}