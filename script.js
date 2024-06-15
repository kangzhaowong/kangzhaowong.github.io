function introImageOpacity () {
    let img = document.getElementById("introduction-image");
    if (window.innerWidth < 900) {
        img.style.opacity = 0
    } else {
        img.style.opacity = Math.max(0, Math.min(1, - 1 + 0.5 * window.innerWidth/img.clientWidth));
    }
}

document.addEventListener("DOMContentLoaded", () => {
    introImageOpacity ()
    addEventListener("resize", () => {
        introImageOpacity ()
    });
});