// =================
// protect route
const role = localStorage.getItem("userRole");
const email = localStorage.getItem("userEmail");

if (!role || !email) {
    window.location.href = "index.html";
}

// =================
// extract name from email
function getNameFromEmail(email) {
    return email.split("@")[0];
}

// =================
// show user info in dashboard
document.addEventListener("DOMContentLoaded", () => {

    const nameEl = document.getElementById("userName");
    const emailEl = document.getElementById("userEmail");
    const roleEl = document.getElementById("userRole");

    if (nameEl) nameEl.textContent = getNameFromEmail(email);
    if (emailEl) emailEl.textContent = email;
    if (roleEl) roleEl.textContent = role;
});

// =================
// logout
function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}

// =================
// show sections
function showSection(id) {

    // hide all sections
    document.querySelectorAll(".content").forEach(sec => {
        sec.classList.remove("active");
    });

    // show selected
    document.getElementById(id).classList.add("active");

    // active sidebar highlight
    document.querySelectorAll(".sidebar a").forEach(link => {
        link.classList.remove("active-link");
    });

    // safer fix (prevents undefined event crash)
    if (event && event.target) {
        event.target.classList.add("active-link");
    }
}

// 
// =================
// TRADING DATA SOURCE (simulate API / backend)
const dashboardData = {
    balance: 12450.32,
    profit: 320.45,
    loss: 120.10,
    activeTrades: 18,

    market: [
        { pair: "BTC/USD", price: 64230, change: 2.4 },
        { pair: "ETH/USD", price: 3120, change: -1.2 },
        { pair: "SOL/USD", price: 142, change: 5.1 }
    ],

    trades: [
        { asset: "BTC/USD", type: "BUY", entry: 63000, current: 64230, pl: 1230 },
        { asset: "ETH/USD", type: "SELL", entry: 3200, current: 3120, pl: 80 }
    ],

    activity: [
        "BTC trade executed successfully",
        "User login detected",
        "High volatility detected in ETH",
        "Profit booked: +$320"
    ]
};


// ============== RENDER ===============
function loadDashboard() {

    document.getElementById("balance").innerText = `$${dashboardData.balance}`;
    document.getElementById("profit").innerText = `+$${dashboardData.profit}`;
    document.getElementById("loss").innerText = `-$${dashboardData.loss}`;
    document.getElementById("activeTrades").innerText = dashboardData.activeTrades;

    // MARKET
    const marketHTML = dashboardData.market.map(m => `
        <div class="card">
            ${m.pair}<br>
            <strong>$${m.price}</strong>
            <p style="color:${m.change > 0 ? '#2ecc71' : '#e74c3c'}">
                ${m.change > 0 ? '+' : ''}${m.change}%
            </p>
        </div>
    `).join("");

    document.querySelector("#dashboard .section-box .card-grid").innerHTML = marketHTML;

    // ACTIVITY
    const activityHTML = dashboardData.activity.map(a => `<li>✔ ${a}</li>`).join("");
    document.querySelector(".activity").innerHTML = activityHTML;
}

document.addEventListener("DOMContentLoaded", () => {
    loadDashboard();
});