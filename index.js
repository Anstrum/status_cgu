let icon = document.querySelector(".logo");
let scrollButton = document.querySelector(".scroll-up");
let contentContainer = document.querySelector("content");

let scrollButtonVisible = false;

scrollButton.addEventListener("click", () => {
    contentContainer.scrollTop = 0
})
icon.addEventListener("click", () => {
    //redirect to the status website page
})

contentContainer.onscroll = () => {
    if(contentContainer.scrollTop > 400) {
            scrollButton.classList.remove("hide")
            scrollButton.classList.add("show")
    } else {
            scrollButton.classList.remove("show")
            scrollButton.classList.add("hide")
    }
}