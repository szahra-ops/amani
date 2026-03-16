const stars = document.querySelectorAll(".star");
const ratingText = document.getElementById("ratingText");
const ratingValue = document.getElementById("ratingValue");

stars.forEach(star => {
  star.addEventListener("click", () => {
    const value = star.getAttribute("data-value");

    ratingValue.value = value;

    stars.forEach(s => {
      if (s.getAttribute("data-value") <= value) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });

    ratingText.textContent = `(${value}/5)`;
  });
});