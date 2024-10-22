const changePrice = ({ activeClass }) => {
    const parent = document.querySelector(".pricing__price-change"),
        tabContent = document.querySelectorAll(".pricing__content"),
        btns = document.querySelectorAll(".pricing__price-change-btn");

    const hideTabs = () => {
        btns.forEach((item) => {
            item.classList.remove(activeClass);
        });
        tabContent.forEach((item) => {
            item.classList.add("dn");
        });
    };
    const showTab = (i = 0) => {
        btns[i].classList.add(activeClass);
        tabContent[i].classList.remove("dn");
    };
    hideTabs();
    showTab();
    parent.addEventListener("click", (event) => {
        const target = event.target;
        if (target.classList.contains("pricing__price-change-btn")) {
            btns.forEach((item, index) => {
                if (item == target) {
                    hideTabs();
                    showTab(index);
                }
            });
        }
    });
};
export default changePrice;
