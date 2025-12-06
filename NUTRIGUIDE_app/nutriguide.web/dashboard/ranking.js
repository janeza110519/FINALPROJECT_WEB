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