const forms = () => {
    const form = document.querySelectorAll("form");
    form.forEach((item) => {
        bindFormData(item);
    });
    function bindFormData(item) {
        item.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(item);

            async function postData(url, data) {
                const res = await fetch(url, {
                    method: "POST",
                    body: data
                });
                if (!res.ok) {
                    return new Error("Эт хуйня не работает лол");
                }
                return res;
            }
            postData("http://localhost:3000/comments", formData)
                .then((data) => {
                    console.log(data);
                });
        });

    }

};
export default forms;