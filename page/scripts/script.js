document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".product-card button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            alert("Added to cart!");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle"); // Nút menu toggle
    const nav = document.querySelector("nav"); // Phần tử nav chứa menu

    // Xử lý sự kiện khi nhấn vào menu toggle
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active"); // Thêm hoặc gỡ bỏ lớp "active" cho menu
    });
});
// Thao tác thu phóng header khi cuộn
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});

// Hiển thị menu trên di động
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
});

