function ToggleNavbar() {
    var navbar = document.querySelector(".navbar ul");
    if (window.innerWidth < 767) {
        if (navbar.style.display === "flex") {
            navbar.style.display = "none";
        } else {
            navbar.style.display = "flex";
        }
    }

    else {
        navbar.style.display = "flex"
    }
    
    window.addEventListener('resize', ToggleNavbar)
}