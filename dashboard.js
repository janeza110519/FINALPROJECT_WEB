const container = document.querySelector(".cards-container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

right.addEventListener("click", () => {
    container.scrollBy({ left: 200, behavior: "smooth" });
});

left.addEventListener("click", () => {
    container.scrollBy({ left: -200, behavior: "smooth" });
});