const cookieBanner = document.querySelector(".banner-cookie");
const cookieBtn = document.querySelector("#cookieBtn");

setTimeout(() => {
    if(!localStorage.getItem("bannerDisplayed")) {
        cookieBanner.classList.add("active");
    }
}, 3000);

cookieBtn.addEventListener("click", () => {
    cookieBanner.classList.remove("active");
    localStorage.setItem("bannerDisplayed", "true");
});