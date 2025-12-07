// Position fish randomly at different heights
document.querySelectorAll('.fish').forEach(fish => {
    fish.style.top = Math.random() * 300 + "px";
});

// Description popup
const box = document.getElementById("descriptionBox");
const descText = document.getElementById("descText");
const closeBtn = document.getElementById("closeBtn");

document.querySelectorAll('.fish').forEach(fish => {
    fish.addEventListener('click', () => {
        descText.textContent = fish.getAttribute("data-description");
        box.classList.remove("hidden");
    });
});

closeBtn.addEventListener('click', () => {
    box.classList.add("hidden");
});
