export const HomePage = () => {
    console.log("yo");
    let newsListHTML = "";

for (let i = 0; i < 5; i++) {
  newsListHTML += `
    <article class="news-item" style="width:300px;">
      <div 
        class="img"
        style="
          width:100%;
          aspect-ratio:3/2;
        "
      >
        IMG
      </div>

      <h3>Header</h3>
      <p>Content content content...</p>
      <span>#tag1, #tag2</span>
    </article>`;
}

    return `
      <section class="recommendations">
        <h2>Recommendations</h2>

        <div class="cards" id="cardsContainer">
            <p>Loading...</p>
        </div>
      </section>

      <aside class="sidebar">
        <h2>Last News</h2>

        <div class="news-list" id="newsList">
            ${newsListHTML}
        </div>
      </aside>`;
};
