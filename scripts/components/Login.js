import { setState } from "../state.js";

export const Login = () => {
    const loginBtn = document.getElementById("loginBtn");
    const loginPopup = document.getElementById("loginPopup");
    const closeLogin = document.getElementById("closeLogin");
    const profileImg = document.getElementById("profileImg");

    if (!loginBtn || !loginPopup) return;

    loginBtn.addEventListener("click", () => {
        loginPopup.style.display = "flex";
    });

    closeLogin?.addEventListener("click", () => {
        loginPopup.style.display = "none";
    });

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value.trim();

            if (email) {
                loginPopup.style.display = "none";
                loginBtn.style.display = "none";
                if (profileImg) profileImg.style.display = "inline-block";

                setState({
                    user: {
                        isLoggedIn: true,
                        email: email,
                    },
                });
            }
        });
    }
};
