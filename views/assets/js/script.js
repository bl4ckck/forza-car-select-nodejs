/** Alvin Naufal */

addEventListener("load", () => {
    const selectImg = ".car-select__card-inner-img";
    const selectTitle = ".car-select__card-inner-title__name";
    let id = 0
    let carList = document.getElementsByClassName("car-select__card");
    let elImage = document.querySelector(".car-display__img");
    let elName = document.querySelector(".car-display__title");
    let elBuy = document.getElementById("buy");

    if (carList.length > 0) {
        elImage.src = carList[0].querySelector(selectImg).src
        elName.innerHTML = carList[0].querySelector(selectTitle).textContent;
        carList[0].classList.add("card-clicked");
        history.replaceState({ id: 0 }, "", "?id=" + 0);
    }

    for (let i = 0; i < carList.length; i++) {
        carList[i].addEventListener("click", (e) => {
            e.preventDefault();
            if (carList[id].classList.contains("card-clicked")) {
                carList[id].classList.remove("card-clicked");
            } 
            id = i
            carList[i].classList.add("card-clicked");
            elImage.src = carList[i].querySelector(selectImg).src
            elName.innerHTML = carList[i].querySelector(selectTitle).textContent
            history.replaceState({ id: i }, "", "?id="+i);
        });
    }

    // elBuy.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     console.log(history.state);
    // })
});