import { state, setState } from "./state.js";
import { initRouter } from "./router.js";

const appContent = document.getElementById("app-content");

async function getCardsHTML() {
    try {
        const postsRes = await fetch(
            "https://jsonplaceholder.typicode.com/posts?_limit=10",
        );

        if (!postsRes.ok) {
            throw new Error("Posts error");
        }

        const posts = await postsRes.json();

        let cardsHTML = "";

        for (const post of posts) {
            const dogRes = await fetch("https://dog.ceo/api/breeds/image/random");

            if (!dogRes.ok) {
                throw new Error("Dog API error");
            }

            const dog = await dogRes.json();

            cardsHTML += `
              <article class="card">
                <div class="img">
                    <img 
                        src="${dog.message}" 
                        alt="dog"
                        style="width:100%; height:200px; object-fit:cover;"
                    >
                </div>

                <h3>${post.title}</h3>

                <p>${post.body}</p>

                <span>#post${post.id}</span>
              </article>`;
        }

        return cardsHTML;
    } catch (error) {
        return `<p style="color:red;">Failed to load data</p>`;
    }
}

const renderHome = () => {
    let newsListHTML = "";

    for (let i = 0; i < 5; i++) {
        newsListHTML += `
          <article class="news-item">
            <div class="img">IMG</div>
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

async function loadCards() {
    const cardsContainer = document.getElementById("cardsContainer");

    cardsContainer.innerHTML = `<p>Loading...</p>`;

    cardsContainer.innerHTML = await getCardsHTML();
}

const renderAbout = () => `
    <div class="about-container" style="padding: 20px;">
        <h1>About Us</h1>
        <p>This is a basic SPA news application built with vanilla JS.</p>
    </div>`;

const renderContact = () => `
    <div class="contact-container" style="padding: 20px;">
        <h1>Contact Us</h1>
        <form id="contactForm" style="display: flex; flex-direction: column; gap: 10px; max-width: 400px;">
            <div class="form-group">
                <label for="contactName">Name:</label>
                <input type="text" id="contactName" value="${state.contactFormData.name}" required>
            </div>
            <div class="form-group">
                <label for="contactMsg">Message:</label>
                <textarea id="contactMsg" rows="4">${state.contactFormData.message}</textarea>
            </div>
            <button type="submit" class="auth-btn">Send Message</button>
        </form>
    </div>`;

const render = () => {
    const path = state.currentPage;

    if (path === "/about") {
        appContent.innerHTML = renderAbout();
    } else if (path === "/contact") {
        appContent.innerHTML = renderContact();
    } else if (path === "/posts") {
        appContent.innerHTML = `
          <section class="recommendations">
            <h2>Posts</h2>

            <div class="cards" id="cardsContainer">
                <p>Loading...</p>
            </div>
          </section>
        `;

        loadCards();
    } else {
        appContent.innerHTML = renderHome();

        loadCards();
    }

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

            alert("Thank you!");
        };
    }
};
window.addEventListener("stateChange", render);

document.addEventListener("DOMContentLoaded", () => {
    initRouter();
    render();
    initGlobalUI();
});

function initGlobalUI() {
    const donateBtn = document.getElementById("donateBtn");
    const donatePopup = document.getElementById("donatePopup");
    const closeDonate = document.getElementById("closeDonate");
    const loginBtn = document.getElementById("loginBtn");
    const loginPopup = document.getElementById("loginPopup");
    const closeLogin = document.getElementById("closeLogin");
    const profileImg = document.getElementById("profileImg");

    donateBtn?.addEventListener(
        "click",
        () => (donatePopup.style.display = "flex"),
    );
    closeDonate?.addEventListener(
        "click",
        () => (donatePopup.style.display = "none"),
    );

    document.querySelectorAll(".donate-option").forEach((btn) => {
        btn.addEventListener("click", () => {
            document.querySelector(".thank-you").style.display = "block";
            setTimeout(() => {
                donatePopup.style.display = "none";
                document.querySelector(".thank-you").style.display = "none";
            }, 2000);
        });
    });

    loginBtn?.addEventListener(
        "click",
        () => (loginPopup.style.display = "flex"),
    );
    closeLogin?.addEventListener(
        "click",
        () => (loginPopup.style.display = "none"),
    );

    document.getElementById("loginForm")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value.trim();
        if (email) {
            loginPopup.style.display = "none";
            loginBtn.style.display = "none";
            profileImg.style.display = "inline-block";
            setState({ user: { isLoggedIn: true, email: email } });
        }
    });
}
