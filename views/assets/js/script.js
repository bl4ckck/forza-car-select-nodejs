/** Alvin Naufal */
addEventListener("load", () => {
    /**
     * Toogle & Navbar
     */
    let navbar = document.querySelector(".navbar");
    let toggleOpen = false;
    let toggle = document.getElementById("nav-toggle");
    let toggleImg = document.querySelector(".navbar__brand-toggle-img");

    toggle.addEventListener("click", (e) => {
        e.preventDefault();

        if (toggleOpen) {
            navbar.classList.remove("navbar__mobile");
            toggleImg.src = "/assets/image/menu.svg";
            toggleOpen = false;
            return;
        }
        toggleOpen = true;
        toggleImg.src = "/assets/image/x.svg";
        return navbar.classList.add("navbar__mobile");
    });

    /**
     * Logout
     */
    let elLogout = document.getElementById("logout");
    
    elLogout.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("logout");
        //TODO: Do Logout
    })
});