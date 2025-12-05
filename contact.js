document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const msg = document.getElementById("contactMsg");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const surname = document.getElementById("surname").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if(name === "" || surname === "" || email === "" || message === "") {
            msg.textContent = "გთხოვთ, შეავსოთ ყველა ველი!";
            msg.style.color = "red";
            return;
        }

        // მარტივი ელ.ფოსტის ვალიდაცია
        const emailRegex = /\S+@\S+\.\S+/;
        if(!emailRegex.test(email)) {
            msg.textContent = "გთხოვთ, შეიყვანოთ სწორი ელ.ფოსტა!";
            msg.style.color = "red";
            return;
        }

        // მონაცემების "გაგზავნა" (შეინახება localStorage-ში ან უბრალოდ შეტყობინება)
        console.log({name, surname, email, message});
        msg.textContent = "შეტყობინება წარმატებით გაიგზავნა!";
        msg.style.color = "green";

        // ფორმის გასუფთავება
        form.reset();
    });
});
