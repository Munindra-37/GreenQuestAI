// ========================================
// 1. GAME DATA
// ========================================

// Store the player's progress.
let player = {
    xp: 0,
    level: 1,
    completedMissions: 0
};


// Store the available missions.
const missions = [
    {
        icon: "🌳",
        category: "NATURE",
        title: "Meet a Tree",
        description: "Spend 10 minutes outdoors observing a tree. Notice its leaves, bark, and branches.",
        xp: 50,
        completed: false
    },

    {
        icon: "🚶",
        category: "MOVEMENT",
        title: "Take a Nature Walk",
        description: "Take a 15-minute walk outside and observe the plants, birds, and surroundings.",
        xp: 40,
        completed: false
    },

    {
        icon: "💧",
        category: "ECOLOGY",
        title: "Save Some Water",
        description: "Identify one way to reduce unnecessary water use in your daily routine.",
        xp: 30,
        completed: false
    },

    {
        icon: "🐦",
        category: "WILDLIFE",
        title: "Observe a Bird",
        description: "Spend a few minutes observing a bird from a safe distance without disturbing it.",
        xp: 40,
        completed: false
    },

    {
        icon: "🌱",
        category: "GROWTH",
        title: "Discover a Plant",
        description: "Find a plant nearby and learn one interesting fact about it.",
        xp: 35,
        completed: false
    },

    {
        icon: "♻️",
        category: "SUSTAINABILITY",
        title: "Reduce Waste",
        description: "Find one practical way to reuse an item instead of throwing it away.",
        xp: 45,
        completed: false
    }
];


// ========================================
// 2. GET HTML ELEMENTS
// ========================================

const xpCount = document.getElementById("xp-count");

const levelCount = document.getElementById("level-count");

const missionCount = document.getElementById("mission-count");

const missionContainer = document.getElementById("mission-container");

const generateButton = document.getElementById("generate-button");


// ========================================
// 3. DISPLAY MISSIONS
// ========================================

function displayMissions() {

    // Clear the existing mission cards.
    missionContainer.innerHTML = "";

    // Create a card for every mission.
    missions.forEach(function (mission, index) {

        const missionCard = document.createElement("div");

        missionCard.className = "mission-card";

        missionCard.innerHTML = `
            <div class="mission-icon">${mission.icon}</div>

            <p class="mission-category">${mission.category}</p>

            <h3>${mission.title}</h3>

            <p class="mission-description">
                ${mission.description}
            </p>

            <p class="mission-reward">
                ⭐ Reward: ${mission.xp} XP
            </p>

            <button
                class="complete-button"
                data-index="${index}"
                ${mission.completed ? "disabled" : ""}
            >
                ${mission.completed ? "Mission Completed ✓" : "Complete Mission"}
            </button>
        `;

        missionContainer.appendChild(missionCard);
    });
}


// ========================================
// 4. COMPLETE A MISSION
// ========================================

missionContainer.addEventListener("click", function (event) {

    // Check whether a mission button was clicked.
    if (!event.target.classList.contains("complete-button")) {
        return;
    }

    // Find which mission was selected.
    const index = Number(event.target.dataset.index);

    const selectedMission = missions[index];

    // Stop if the mission is already completed.
    if (!selectedMission || selectedMission.completed) {
        return;
    }

    // Mark the mission as completed.
    selectedMission.completed = true;

    // Give the player XP.
    player.xp += selectedMission.xp;

    // Increase the completed mission count.
    player.completedMissions++;

    // Update the player's level.
    player.level = Math.floor(player.xp / 100) + 1;

    // Update the website.
    updateProgress();

    displayMissions();

    // Show a message.
    alert(
        `Mission completed! 🎉\n\n` +
        `You earned ${selectedMission.xp} XP!\n` +
        `Total XP: ${player.xp}`
    );
});


// ========================================
// 5. UPDATE PLAYER PROGRESS
// ========================================

function updateProgress() {

    xpCount.textContent = player.xp;

    levelCount.textContent = player.level;

    missionCount.textContent = player.completedMissions;
}


// ========================================
// 6. GENERATE A RANDOM ADVENTURE
// ========================================

generateButton.addEventListener("click", function () {

    // Find missions that are not completed.
    const availableMissions = missions.filter(function (mission) {
        return !mission.completed;
    });

    // Check whether any missions remain.
    if (availableMissions.length === 0) {

        alert("Amazing! You have completed every adventure! 🌿");

        return;
    }

    // Choose a random available mission.
    const randomIndex = Math.floor(
        Math.random() * availableMissions.length
    );

    const randomMission = availableMissions[randomIndex];

    // Show the selected adventure.
    alert(
        `🎲 Your next adventure!\n\n` +
        `${randomMission.icon} ${randomMission.title}\n\n` +
        `${randomMission.description}\n\n` +
        `Reward: ${randomMission.xp} XP`
    );
});


// ========================================
// 7. START THE WEBSITE
// ========================================

// Display the missions when the page loads.
displayMissions();

// Display the initial player progress.
updateProgress();

console.log("GreenQuest AI is running successfully! 🌿");