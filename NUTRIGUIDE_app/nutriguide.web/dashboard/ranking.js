// Sample ranking data
let rankings = [
    { name: "Julia", points: 95 },
    { name: "April", points: 88 },
    { name: "Janeza", points: 74 },
    { name: "Miko", points: 63 },
    { name: "Ella", points: 52 }
];

// Sort highest → lowest
rankings.sort((a, b) => b.points - a.points);

// Insert into table
const rankingBody = document.getElementById("rankingData");

rankings.forEach(item => {
    let row = `
        <tr>
            <td>${item.name}</td>
            <td>${item.points}</td>
        </tr>
    `;
    rankingBody.innerHTML += row;
});

//NutriGuide Status Range Logic
const healthAlert = document.getElementById("healthAlert");
const alertMessage = document.getElementById("alertMessage");

let showAlert = false;

// Check scores
rankings.forEach(user => {
    if (user.points < 60) {
        showAlert = true;
    }
});

// Show message only when below 60
if (showAlert) {
    healthAlert.style.display = "block";
    alertMessage.innerHTML = `
        🚨 If Your NutriGuide score is below <strong>60</strong>.
        Please visit the nearest Barangay Health Center
        for nutrition monitoring and food assistance.
    `;
};


const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});
