import { createCard } from "./Card.js";

export const CardList = {
    async render(containerId = "cardsContainer") {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = "<p>Loading...</p>";

        try {
            const postsRes = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
            const posts = await postsRes.json();

            const dogPromises = posts.map(() => fetch("https://dog.ceo/api/breeds/image/random").then(res => res.json()));
            const dogs = await Promise.all(dogPromises);

            let html = "";
            for (let i = 0; i < posts.length; i++) {
                html += createCard(posts[i], dogs[i].message);
            }
            container.innerHTML = html;
        } catch (e) {
            container.innerHTML = `<p style="color:red;">Failed to load cards</p>`;
            console.error(e);
        }
    }
};
