// =========================
// LOAD ACTIVE USER (fix)
// =========================
let user = JSON.parse(localStorage.getItem("activeUser"));

if (!user) {
    // No logged-in user → redirect
    window.location.href = "login.html";
} else {
    document.getElementById("usernameDisplay").textContent =
        user.fullName || user.username || "User";
}



// =========================
// PROFILE PICTURE SYSTEM
// =========================

// Load saved image
let savedImage = localStorage.getItem("profileImage");
if (savedImage) {
    document.getElementById("profilePic").src = savedImage;
}

// Upload button
document.getElementById("changePicBtn").onclick = () => {
    document.getElementById("fileInput").click();
};

// Convert image → Base64 → save
document.getElementById("fileInput").addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const base64 = e.target.result;

        document.getElementById("profilePic").src = base64;
        localStorage.setItem("profileImage", base64);
    };
    reader.readAsDataURL(file);
});



// =========================
// WEIGHT CHART
// =========================

const ctx = document.getElementById("weightChart").getContext("2d");

new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["May", "June", "July"],
        datasets: [{
            label: "Weight",
            data: [28, 34, 45],
            backgroundColor: "#ff6a00"
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'NutriChart',
                font: {
                    size: 30,
                    weight: 'bold'
                },
                color: 'black'
            },
            legend: {
                position: "bottom",
                labels: {
                    font: { size: 20 },
                    color: 'black'
                }
            },
            subtitle: {
                display: true,
                text: 'Weight',
                font: { size: 22 },
                color: 'black',
                padding: { top: 5 }
            }
        },

        scales: {
            x: {
                title: {
                    display: true,
                    text: 'MONTH',
                    font: { size: 20, weight: 'bold' },
                    color: 'black'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'kilogram',
                    font: { size: 20, weight: 'bold' },
                    color: 'black'
                }
            }
        }
    }
});



// =========================
// LOGOUT
// =========================

document.getElementById("logoutBtn").onclick = () => {
    localStorage.removeItem("activeUser"); // ← fixed
    window.location.href = "login.html";
};



// =========================
// BMI CALCULATOR
// =========================

document.getElementById("calcBmiBtn").addEventListener("click", () => {

    const height = parseFloat(document.getElementById("bmiHeight").value);
    const weight = parseFloat(document.getElementById("bmiWeight").value);

    if (isNaN(height) || isNaN(weight)) {
        alert("Please enter valid height and weight.");
        return;
    }

    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);

    let status = "";

    if (bmi < 16) status = "Severe Thinness";
    else if (bmi >= 16 && bmi < 17) status = "Moderate Thinness";
    else if (bmi >= 17 && bmi < 18.5) status = "Mild Thinness";
    else if (bmi >= 18.5 && bmi < 25) status = "Normal";
    else if (bmi >= 25 && bmi < 30) status = "Overweight";
    else if (bmi >= 30 && bmi < 35) status = "Obese Class I";
    else if (bmi >= 35 && bmi < 40) status = "Obese Class II";
    else if (bmi >= 40) status = "Obese Class III";

    document.getElementById("bmiResult").textContent =
        `BMI = ${bmi} (${status})`;
});

document.querySelector(".bmi-toggle").addEventListener("click", () => {
    const table = document.querySelector(".bmi-table");
    table.classList.toggle("hidden");

    document.querySelector(".bmi-toggle").textContent =
        table.classList.contains("hidden")
        ? "Show BMI Classification"
        : "Hide BMI Classification";
});
