const view = document.querySelector(".reviews-view");
const btnPrev = document.querySelector(".arrow1");
const btnNext = document.querySelector(".arrow2");
const card = document.querySelector(".reviews-client-E");
const style = window.getComputedStyle(card);
const marginRight = parseFloat(style.marginRight);
const reviewsWidth = card.offsetWidth + marginRight;

/*reviews slider*/

let index = 0;
const totalCards = 6;
const cardsPerView = 1;
const maxIndex = Math.floor(totalCards - cardsPerView);

btnNext.addEventListener("click", (event) => {
  event.preventDefault();
  if (index < maxIndex) {
    index++;
    view.style.transform = `translateX(-${index * reviewsWidth}px)`;
  }
});

btnPrev.addEventListener("click", (event) => {
  event.preventDefault();
  if (index > 0) {
    index--;
    view.style.transform = `translateX(-${index * reviewsWidth}px)`;
  }
});

/*faq*/

const quizes = document.querySelectorAll(".faq-quizes");

quizes.forEach((quiz) => {
  quiz.addEventListener("click", () => {
    const answer = quiz.nextElementSibling;
    const btn = quiz.querySelector(".faq-btn");

    if (answer.style.display === "block") {
      answer.style.display = "none";
      btn.innerHTML = "+";
      quiz.style.borderRadius = "2rem";
      quiz.classList.remove("active");
    } else {
      answer.style.display = "block";
      btn.innerHTML = "-";
      quiz.style.borderRadius = "2rem 2rem 0rem 0rem";
      quiz.classList.add("active");
    }
  });
});

/*menu*/

const menuIcon = document.querySelector(".menuIcon");
const menu = document.querySelector(".menu");
const logo = document.querySelector(".logo");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("active");
  logo.classList.toggle("active");
});

//sent message


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-formm");
  const notification = document.getElementById("notification");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      
      notification.style.display = "block";
      notification.classList.add("show");
      notification.classList.remove("hide");
      
    
      setTimeout(() => {
        notification.style.display = "none";
        notification.classList.remove("show");
        notification.classList.add("hide");
      }, 4000);

     
      form.reset();
    });
  }
});