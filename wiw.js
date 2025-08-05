const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");

document.querySelectorAll(".gallery-img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  });
});

document.querySelector(".close").onclick = function () {
  modal.style.display = "none";
};

// ✅ Close modal when clicking outside the image
modal.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// ✅ Light/Dark mode toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
