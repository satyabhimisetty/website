const abountLink = document.querySelector(".about__link");
const showCase = document.querySelector(".show-case");

// Adding event listner
abountLink.addEventListener("click", (e) => {
    e.preventDefault();

    console.log(e.target);

    showCase.style.display = 'block';
})