const stickyHeader = document.getElementById("stickyHeader");
const mainHeader = document.getElementById("mainHeader");
const scrollTriggerPoint = document.getElementById("scrollTriggerPoint");

window.addEventListener("scroll", () => {
    const isLargeScreen = window.innerWidth >= 992;
    if (!isLargeScreen) {
        stickyHeader.classList.remove("show");
        mainHeader.classList.remove("hide");
        return;
    }

    const triggerTop = scrollTriggerPoint.getBoundingClientRect().top;

    if (triggerTop < 0) {
        stickyHeader.classList.add("show");
        mainHeader.classList.add("hide");
    } else {
        stickyHeader.classList.remove("show");
        mainHeader.classList.remove("hide");
    }
});