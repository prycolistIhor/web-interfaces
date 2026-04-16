document.addEventListener("DOMContentLoaded", () => {
    const donateBtn = document.getElementById("donateBtn");
    const donatePopup = document.getElementById("donatePopup");
    const closeDonate = document.getElementById("closeDonate");

    donateBtn.addEventListener("click", () => {
        donatePopup.style.display = "flex";
    });

    closeDonate.addEventListener("click", () => {
        donatePopup.style.display = "none";
    });

    document.querySelectorAll(".donate-option").forEach((btn) => {
        btn.addEventListener("click", () => {
            document.querySelector(".thank-you").style.display = "block";
            setTimeout(() => {
                donatePopup.style.display = "none";
                document.querySelector(".thank-you").style.display = "none";
            }, 2000);
        });
    });

    const loginBtn = document.getElementById("loginBtn");
    const loginPopup = document.getElementById("loginPopup");
    const closeLogin = document.getElementById("closeLogin");
    const profileImg = document.getElementById("profileImg");

    loginBtn.addEventListener("click", () => {
        loginPopup.style.display = "flex";
    });

    closeLogin.addEventListener("click", () => {
        loginPopup.style.display = "none";
    });

    document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();

        if (email && password) {
            loginPopup.style.display = "none";
            loginBtn.style.display = "none";
            profileImg.style.display = "inline-block";

            loginPopup.style.display = "none";
        }
    });

    const cardsContainer = document.getElementById("cardsContainer");

    for (let i = 0; i < 10; i++) {
        const article = document.createElement("article");
        article.className = "card";
        article.innerHTML = `
      <div class="img">IMG</div>
      <h3>Header</h3>
      <p>Content content content...</p>
      <span>#tag1, #tag2</span>
    `;
        cardsContainer.appendChild(article);
    }

    const newsListContainer = document.getElementById("newsList");

    for (let i = 0; i < 5; i++) {
        const article = document.createElement("article");
        article.className = "news-item";
        article.innerHTML = `
      <div class="img">IMG</div>
      <h3>Header</h3>
      <p>Content content content...</p>
      <span>#tag1, #tag2</span>
    `;
        newsListContainer.appendChild(article);
    }
});
