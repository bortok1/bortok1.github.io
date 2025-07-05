function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");
    img.src = src;
    lightbox.style.display = "flex";
}

function closeLightbox(event) {
    event.preventDefault();
    document.getElementById("lightbox").style.display = "none";
}