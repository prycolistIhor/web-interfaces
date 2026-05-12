export const createCard = (post, dogImage) => {
    return `
        <article class="card">
            <div class="img">
                <img src="${dogImage}" 
                     alt="Random dog" 
                     style="width:100%; height:200px; object-fit:cover;">
            </div>
            <h3>${post.title}</h3>
            <p>${post.body.substring(0, 120)}...</p>
            <span>#post${post.id}</span>
        </article>
    `;
};
