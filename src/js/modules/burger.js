const burger = () => {
    function burgerBind({
        contentElement,
        ButtonElement,
        activeClass,
    }) {
        const content = document.querySelector(contentElement),

            burgerOpenBtn = document.querySelectorAll(ButtonElement);

        function showBurgerContent(button) {
            content.classList.remove("hide");
            if (activeClass) {
                content.classList.add(activeClass);
            }
            button.src = "../img/header/icons/burger-close.svg";
        }
        function hideBurgerContent(button) {
            content.classList.add("hide");
            if (activeClass) {
                content.classList.remove(activeClass);
            }
            button.src = "../img/header/icons/burger-open.svg";
        }

        burgerOpenBtn.forEach((button) => {
            button.addEventListener("click", () => {
                if (content.classList.contains('hide')) {
                    showBurgerContent(button);
                }
                else {
                    hideBurgerContent(button);
                }
            });
        });

    }
    burgerBind({
        contentElement: ".burger",
        ButtonElement: ".nav-header__burger-btn",

    })
};
export default burger;