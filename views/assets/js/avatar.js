/** Alvin Naufal */

addEventListener("load", () => {
    /**
     * Avatar Select
     */
    let id = 0;
    let avatarList = document.getElementsByClassName("avatar-select__card");
    let inputAvatar = document.getElementById("lavatar");

    if (avatarList.length > 0) {
        avatarList[0].classList.add("card-clicked");
        inputAvatar.value = "avatar1.png";
    }

    for (let i = 0; i < avatarList.length; i++) {
        avatarList[i].addEventListener("click", (e) => {
            e.preventDefault();
            if (avatarList[id].classList.contains("card-clicked")) {
                avatarList[id].classList.remove("card-clicked");
            }
            id = i;
            avatarList[i].classList.add("card-clicked");
            inputAvatar.value = "avatar" + (i + 1) + ".png";
        });
    }
});