const hamburger_icon = document.getElementById('humber-icon');
const close = document.getElementById('close-icon');
const hamburger = document.querySelector('.hamburger');
const main = document.getElementById('showcase-mobile');

hamburger_icon.addEventListener("click", () => {
    hamburger_icon.style.display = "none";
    close.style.display = "block";
    hamburger.classList.add("active");
    main.classList.add("blur");
});

close.addEventListener("click", () => {
    hamburger_icon.style.display = "block";
    close.style.display = "none";
    hamburger.classList.remove("active");
    main.classList.remove("blur");
});