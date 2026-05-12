import { state, setState } from "./state.js";
import { initRouter } from "./router.js";
import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { HomePage } from "./pages/HomePage.js";
import { AboutPage } from "./pages/AboutPage.js";
import { ContactPage } from "./pages/ContactPage.js";
import { PostsPage } from "./pages/PostsPage.js";
import { ContactForm } from "./components/ContactForm.js";
import { CardList } from "./components/CardList.js";
import { Login } from "./components/Login.js";
import { Donate } from "./components/Donate.js";

const appContent = document.getElementById("app-content");

const renderPage = () => {
    const path = state.currentPage;

    switch (path) {
        case "/about":
            appContent.innerHTML = AboutPage();
            break;
        case "/contact":
            appContent.innerHTML = ContactPage(ContactForm);
            break;
        case "/posts":
            appContent.innerHTML = PostsPage();
            CardList.render();
            break;
        case "/":
        default:
            appContent.innerHTML = HomePage();
            CardList.render();
    }

    attachFormHandlers();
};

const attachFormHandlers = () => {
    const form = document.getElementById("contactForm");
    if (form) {
        form.onsubmit = (e) => {
            e.preventDefault();
            setState({
                contactFormData: {
                    name: document.getElementById("contactName").value,
                    message: document.getElementById("contactMsg").value,
                },
            });
            alert("Thank you for your message!");
        };
    }
};

window.addEventListener("stateChange", renderPage);

document.addEventListener("DOMContentLoaded", () => {
    initRouter();
    renderPage();

   if (!document.querySelector(".header")) {
        document.body.insertAdjacentHTML("afterbegin", Header());
        document.body.insertAdjacentHTML("beforeend", Footer());

        Donate();
        Login();
    }
});
