if (window.keyflower) {
    window.keyflower.data = {
        games: [
            {
                id: "base",
                title: "Keyflower",
                bggId: "",
                tiles: [
                    { name: "Alehouse", type: "spring", categories: ["worker"] },
                    { name: "Apprentice Hall", type: "spring", categories: ["skill"] },
                    { name: "Inn", type: "autumn", categories: ["worker"] },
                    { name: "Barn", type: "autumn", categories: ["good", "scoring"] },
                    { name: "Blacksmith", type: "autumn", categories: ["ore", "scoring"] },
                    { name: "Stone Yard", type: "autumn", categories: ["stone", "scoring"] },
                    { name: "Timber Yard", type: "autumn", categories: ["wood", "scoring"] },
                    { name: "Brewer", type: "summer", categories: ["skill", "worker"] },
                    { name: "Carpenter", type: "summer", categories: ["skill", "wood"] },
                    { name: "Mason", type: "summer", categories: ["skill", "stone"] },
                    { name: "Smelter", type: "summer", categories: ["skill", "ore"] },
                    { name: "Fair", type: "autumn", categories: ["worker", "worker-green"] },
                    { name: "Peddler", type: "spring", categories: ["worker", "worker-green"] },
                    { name: "Store", type: "summer", categories: ["worker", "worker-green"] },
                    { name: "Farrier", type: "summer", categories: ["transportation"] },
                    { name: "Stable", type: "spring", categories: ["transportation"] },
                    { name: "Wainwright", type: "autumn", categories: ["transportation"] },
                    { name: "Forge", type: "summer", categories: ["ore"] },
                    { name: "Goldsmith", type: "summer", categories: ["gold"] },
                    { name: "Sawmill", type: "summer", categories: ["wood"] },
                    { name: "Sculptor", type: "summer", categories: ["stone"] },
                    { name: "Well", type: "summer", categories: [] },
                    { name: "Gold Mine", type: "spring", categories: ["gold"] },
                    { name: "Key Mine", type: "spring", categories: ["ore"] },
                    { name: "Keystone Quarry", type: "spring", categories: ["stone"] },
                    { name: "Keywood", type: "spring", categories: ["wood"] },
                    { name: "Miner", type: "spring", categories: ["ore", "gold"] },
                    { name: "Quarryman", type: "spring", categories: ["stone", "gold"] },
                    { name: "Woodcutter", type: "spring", categories: ["wood", "gold"] },
                    { name: "Hiring Fair", type: "summer", categories: ["skill"] },
                    { name: "Boat 1a", type: "summer", categories: [] },
                    { name: "Boat 1b", type: "summer", categories: [] },
                    { name: "Boat 2a", type: "summer", categories: [] },
                    { name: "Boat 2b", type: "summer", categories: [] },
                    { name: "Boat 3a", type: "summer", categories: [] },
                    { name: "Boat 3b", type: "summer", categories: [] },
                    { name: "Boat 4a", type: "summer", categories: [] },
                    { name: "Boat 4b", type: "summer", categories: [] },
                    { id: 1, name: "Keyflower", type: "boat", categories: ["transportation"]},
                    { id: 2, name: "Sea Bastion", type: "boat", categories: ["roads"]},
                    { id: 3, name: "Sea Breese", type: "boat", categories: []},
                    { id: 4, name: "Flipper", type: "boat", categories: []},
                    { id: 5, name: "Ianvincible", type: "boat", categories: []},
                    { id: 6, name: "White Wind", type: "boat", categories: ["worker"]},

                    { name: "Home 1", type: "home", categories: ["transportation"]},
                    { name: "Home 2", type: "home", categories: ["transportation"]},
                    { name: "Home 3", type: "home", categories: ["transportation"]},
                    { name: "Home 4", type: "home", categories: ["transportation"]},
                    { name: "Home 5", type: "home", categories: ["transportation"]},
                    { name: "Home 6", type: "home", categories: ["transportation"]}
                ]
            },
            {
                id: "farmers",
                tiles: [
                    {name: "Farmers Test Tile", type: "spring", categories: []}
                ]
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
                    boats: [1, 2],
                    orderTileInstructions: "Use the turn order tile marked 2+ only.",
                    componentInstructions: "Put blue/red/yellow workers in the bag, green workers in a pile. Sort resource counters, turn skill tiles face-down. Each player draws <strong>eight</strong> workers at random, secretly.",
                    springCount: 6,
                    summerCount: 6,
                    autumnCount: 6,
                    winterCount: 3
                },
                {
                    number: 3,
                    boats: [1, 2, 3],
                    orderTileInstructions: "Use the turn order tile marked 2+ and 3+.",
                    componentInstructions: "Put blue/red/yellow workers in the bag, green workers in a pile. Sort resource counters, turn skill tiles face-down. Each player draws <strong>eight</strong> workers at random, secretly.",
                    springCount: 6,
                    summerCount: 6,
                    autumnCount: 6,
                    winterCount: 3
                }
            ]
        }
    };
}
else {
    // Throw error that keyflower isn't loaded!
}