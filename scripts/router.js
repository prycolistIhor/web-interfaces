import { setState, BASE_PATH } from "./state.js";

export const navigateTo = (url) => {
    const fullPath = url.startsWith(BASE_PATH) ? url : BASE_PATH + url;
    history.pushState(null, null, fullPath);

    setState({ currentPage: url });
};

export const initRouter = () => {
    window.addEventListener("popstate", () => {
        const cleanPath = window.location.pathname.replace(BASE_PATH, "") || "/";
        setState({ currentPage: cleanPath });
    });

    document.addEventListener("click", (e) => {
        const link = e.target.closest("[data-link]");
        if (link) {
            e.preventDefault();
            const url = link.getAttribute("href") || link.getAttribute("data-link");
            navigateTo(url);
        }
    });
};
