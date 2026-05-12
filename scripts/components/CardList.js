import { createCard } from "./Card.js";

export const CardList = {
    async render(containerId = "cardsContainer") {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = "<p>Loading...</p>";

        try {
            const postsRes = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
            const posts = await postsRes.json();

            let html = "";
            for (const post of posts) {
                const dogRes = await fetch("https://dog.ceo/api/breeds/image/random");
                const dog = await dogRes.json();
                html += createCard(post, dog.message);
            }
            container.innerHTML = html;
        } catch (e) {
            container.innerHTML = `<p style="color:red;">Failed to load cards</p>`;
        }
    }
};
