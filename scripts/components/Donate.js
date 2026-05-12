export const Donate = () => {
    const donateBtn = document.getElementById("donateBtn");
    const donatePopup = document.getElementById("donatePopup");
    const closeDonate = document.getElementById("closeDonate");
    const thankYou = document.querySelector(".thank-you");

    if (!donateBtn || !donatePopup) return;

    donateBtn.addEventListener("click", () => {
        donatePopup.style.display = "flex";
    });

    closeDonate?.addEventListener("click", () => {
        donatePopup.style.display = "none";
    });

    document.querySelectorAll(".donate-option").forEach((btn) => {
        btn.addEventListener("click", () => {
            if (thankYou) {
                thankYou.style.display = "block";
            }

            setTimeout(() => {
                donatePopup.style.display = "none";
                if (thankYou) thankYou.style.display = "none";
            }, 2000);
        });
    });
};
