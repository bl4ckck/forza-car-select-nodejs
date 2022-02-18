/** Alvin Naufal */

const deleteUser = (id) => {
    const text = "Are you sure you want to delete?\nEither OK or Cancel.";
    if (confirm(text) == true) {
        fetch("/api/v1/users/" + id, {
            method: "DELETE",
        }).then((data) => {
            location.reload();
        });
    }
}

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
});