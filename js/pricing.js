/* =====================================================
   FALYS WEBSITE - PRICING PAGE MODULE (JS)
   Self-contained. Only touches elements inside
   .pricing-toggle / [data-monthly] / [data-annual] —
   never queries or modifies anything main.js owns.
   ===================================================== */


document.addEventListener("DOMContentLoaded", () => {

    const toggleButtons = document.querySelectorAll(".pricing-toggle-btn");
    const priceAmounts = document.querySelectorAll(".plan-price-amount[data-monthly]");
    const priceSubs = document.querySelectorAll(".plan-price-sub[data-monthly]");

    if (!toggleButtons.length) return;

    function setPeriod(period) {

        toggleButtons.forEach((btn) => {
            btn.classList.toggle("active", btn.dataset.period === period);
        });

        priceAmounts.forEach((el) => {
            const value = el.dataset[period];
            if (value) el.textContent = value;
        });

        priceSubs.forEach((el) => {
            const value = el.dataset[period];
            if (value !== undefined) el.textContent = value;
        });
    }

    toggleButtons.forEach((btn) => {
        btn.addEventListener("click", () => setPeriod(btn.dataset.period));
    });

    // default state matches whichever button already has .active in the HTML
    const initial = document.querySelector(".pricing-toggle-btn.active");
    setPeriod(initial ? initial.dataset.period : "monthly");

});
