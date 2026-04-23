import { setState } from './state.js';

export const navigateTo = (url) => {
    history.pushState(null, null, url);
    setState({ currentPage: url });
};

export const initRouter = () => {
    window.addEventListener("popstate", () => {
        setState({ currentPage: window.location.pathname });
    });

    document.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            const url = e.target.getAttribute("href") || e.target.getAttribute("data-link");
            navigateTo(url);
        }
    });
};
