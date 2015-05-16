if (window.keyflower) {
    window.keyflower.data = {
        games: [
            {
                id: "base",
                title: "Keyflower",
                bggId: "",
                tiles: [
                    { id: 0, name: "Alehouse", type: "spring", categories: ["worker"] },
                    { id: 1, name: "Apprentice Hall", type: "spring", categories: ["skill"] },
                    { id: 2, name: "Inn", type: "autumn", categories: ["worker"] },
                    { id: 3, name: "Barn", type: "autumn", categories: ["good", "scoring"] },
                    { id: 4, name: "Blacksmith", type: "autumn", categories: ["ore", "scoring"] },
                    { id: 5, name: "Stone Yard", type: "autumn", categories: ["stone", "scoring"] },
                    { id: 6, name: "Timber Yard", type: "autumn", categories: ["wood", "scoring"] },
                    { id: 7, name: "Brewer", type: "summer", categories: ["skill", "worker"] },
                    { id: 8, name: "Carpenter", type: "summer", categories: ["skill", "wood"] },
                    { id: 9, name: "Mason", type: "summer", categories: ["skill", "stone"] },
                    { id: 10, name: "Smelter", type: "summer", categories: ["skill", "ore"] },
                    { id: 20, name: "Keyflower", type: "boat", categories: ["transportation"]},
                    { id: 21, name: "Sea Bastion", type: "boat", categories: ["roads"]}
                ]
            },
            {
                id: "farmers"
            },
            {
                id: "merchants"
            },
            {
                id: "promos"
            }
        ],
        rules: {
            playerCounts: [
                {
                    number: 2,
                    homeTiles: 2,
                    boats: [],
                    startTiles: []
                }
            ]
        }
    };
}
else {
    // Throw error that keyflower isn't loaded!
}