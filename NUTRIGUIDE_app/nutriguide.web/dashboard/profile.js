// LOAD ACTIVE USER
let user = JSON.parse(localStorage.getItem("activeUser"));

if (!user) {
    window.location.href = "login.html";
} else {
    document.getElementById("usernameDisplay").textContent =
        user.fullName || user.username || "User";
}

// LOAD PROFILE IMAGE
let savedImage = localStorage.getItem("profileImage");
if (savedImage) {
    document.getElementById("profilePic").src = savedImage;
}

document.getElementById("changePicBtn").onclick = () => {
    document.getElementById("fileInput").click();
};

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

// CHART
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
                text: "NutriChart",
                font: { size: 30, weight: "bold" },
                color: "black"
            },
            legend: {
                position: "bottom",
                labels: { font: { size: 18 }, color: "black" }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "MONTH",
                    font: { size: 20, weight: "bold" },
                    color: "black"
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "kilogram",
                    font: { size: 20, weight: "bold" },
                    color: "black"
                }
            }
        }
    }
});

// LOGOUT
document.getElementById("logoutBtn").onclick = () => {
    localStorage.removeItem("activeUser");
    window.location.href = "login.html";
};

// BMI CALCULATOR
document.getElementById("calcBmiBtn").addEventListener("click", () => {
    const h = parseFloat(document.getElementById("bmiHeight").value);
    const w = parseFloat(document.getElementById("bmiWeight").value);

    if (isNaN(h) || isNaN(w)) return alert("Enter valid height & weight.");

    const bmi = (w / ((h / 100) ** 2)).toFixed(1);
    let status = "";

    if (bmi < 16) status = "Severe Thinness";
    else if (bmi < 17) status = "Moderate Thinness";
    else if (bmi < 18.5) status = "Mild Thinness";
    else if (bmi < 25) status = "Normal";
    else if (bmi < 30) status = "Overweight";
    else if (bmi < 35) status = "Obese Class I";
    else if (bmi < 40) status = "Obese Class II";
    else status = "Obese Class III";

    document.getElementById("bmiResult").innerHTML =
        `<h3>BMI = ${bmi}</h3><p>Status: ${status}</p>`;
});

// SHOW/HIDE BMI TABLE
document.querySelector(".bmi-toggle").addEventListener("click", () => {
    const table = document.querySelector(".bmi-table");
    table.classList.toggle("hidden");

    document.querySelector(".bmi-toggle").textContent =
        table.classList.contains("hidden")
            ? "Show BMI Classification"
            : "Hide BMI Classification";
});


// =========================
// ENCAPSULATION EXAMPLE
// (Added without affecting output)
// =========================

class UserProfileInfo {
    #name;       // private attribute
    #email;      // private attribute

    constructor(name, email) {
        this.#name = name;
        this.#email = email;
    }

    // Getter for name
    getName() {
        return this.#name;
    }

    // Setter for name
    setName(newName) {
        if (newName && newName.length > 0) {
            this.#name = newName;
        }
    }

    // Getter for email
    getEmail() {
        return this.#email;
    }

    // Setter for email
    setEmail(newEmail) {
        if (newEmail && newEmail.includes("@")) {
            this.#email = newEmail;
        }
    }
}

// Example instance (does not affect website)
const dummyProfile = new UserProfileInfo("Default User", "email@example.com");
console.log(dummyProfile.getName());

