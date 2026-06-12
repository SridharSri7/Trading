const toggle = document.getElementById("toggle");
const links = document.getElementById("links");

toggle.addEventListener("click", () => {
    links.classList.toggle("active");
});