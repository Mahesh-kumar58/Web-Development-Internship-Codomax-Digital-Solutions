// Button Event
const button = document.getElementById("changeBtn");
const heading = document.getElementById("heading");

button.addEventListener("click", function () {
    heading.textContent = "Thank you for visiting my portfolio!";
});

// Scroll to Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});