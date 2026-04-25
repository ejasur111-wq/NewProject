const sunIcon = document.querySelector("i")

sunIcon.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    sunIcon.classList.toggle("fa-moon")
});
