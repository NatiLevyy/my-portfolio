// Create a back-to-top button
const backToTopButton = document.createElement("button");
backToTopButton.id = "back-to-top";
backToTopButton.innerText = "⬆";
backToTopButton.style.display = "none";
backToTopButton.style.position = "fixed";
backToTopButton.style.bottom = "20px";
backToTopButton.style.right = "20px";
backToTopButton.style.padding = "10px 15px";
backToTopButton.style.backgroundColor = "#00bcd4";
backToTopButton.style.color = "#fff";
backToTopButton.style.border = "none";
backToTopButton.style.borderRadius = "5px";
backToTopButton.style.cursor = "pointer";
backToTopButton.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
backToTopButton.style.zIndex = "1000";

// Append the button to the body
document.body.appendChild(backToTopButton);

// Show the button when scrolling down
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Scroll to the top when the button is clicked
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
