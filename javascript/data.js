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
                    { name: "Forge", type: "autumn", categories: ["ore"] },
                    { name: "Goldsmith", type: "autumn", categories: ["gold"] },
                    { name: "Sawmill", type: "autumn", categories: ["wood"] },
                    { name: "Sculptor", type: "autumn", categories: ["stone"] },
                    { name: "Well", type: "autumn", categories: [] },
                    { name: "Gold Mine", type: "spring", categories: ["gold"] },
                    { name: "Key Mine", type: "spring", categories: ["ore"] },
                    { name: "Keystone Quarry", type: "spring", categories: ["stone"] },
                    { name: "Keywood", type: "spring", categories: ["wood"] },
                    { name: "Miner", type: "spring", categories: ["ore", "gold"] },
                    { name: "Quarryman", type: "spring", categories: ["stone", "gold"] },
                    { name: "Woodcutter", type: "spring", categories: ["wood", "gold"] },
                    { name: "Hiring Fair", type: "summer", categories: ["skill"] },
                    { name: "Boat 1", type: "summer", options: ["a", "b"], categories: [] },
                    { name: "Boat 2", type: "summer", options: ["a", "b"], categories: [] },
                    { name: "Boat 3", type: "summer", options: ["a", "b"], categories: [] },
                    { name: "Boat 4", type: "summer", options: ["a", "b"], categories: [] },
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
                ],
                notes: ""
            },
            {
                id: "farmers",
                tiles: [
                    {name: "Farm Yard", type: "spring", categories: []},
                    {name: "Paddock", type: "spring", categories: []},
                    {name: "Sheep Fold", type: "spring", categories: []},
                    {name: "Wheat Field", type: "spring", categories: []},
                    {name: "Boat 5", type: "summer", options: ["a", "b"], categories: []},
                    {name: "Boat 6", type: "summer", options: ["a", "b"], categories: []},
                    {name: "Shepherd's Hut", type: "summer", categories: []},
                    {name: "Pigsty", type: "summer", categories: []},
                    {name: "Cow Shed", type: "autumn", categories: []},
                    {name: "Piggery", type: "autumn", categories: []},
                    {name: "Ranch", type: "autumn", categories: []},
                    {name: "Sheep Shelter", type: "autumn", categories: []}
                ],
                notes: "Replace turn order tiles 1-3 from the base game with new turn order tiles from The Farmers expansion."
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
                    orderTileInstructions: "Use two turn order tiles, with appropriate side up for 3 players.",
                    componentInstructions: "Put blue/red/yellow workers in the bag, green workers in a pile. Sort resource counters, turn skill tiles face-down. Each player draws <strong>eight</strong> workers at random, secretly.",
                    springCount: 7,
                    summerCount: 7,
                    autumnCount: 7,
                    winterCount: 3
                },
                {
                    number: 4,
                    boats: [1, 2, 3, 4],
                    orderTileInstructions: "Use three turn order tiles, with appropriate side up for 4 players.",
                    componentInstructions: "Put blue/red/yellow workers in the bag, green workers in a pile. Sort resource counters, turn skill tiles face-down. Each player draws <strong>eight</strong> workers at random, secretly.",
                    springCount: 8,
                    summerCount: 8,
                    autumnCount: 8,
                    winterCount: 3
                },
                {
                    number: 5,
                    boats: [1, 2, 3, 4, 5],
                    orderTileInstructions: "Use all four turn order tiles, with appropriate side up for 5 players.",
                    componentInstructions: "Put blue/red/yellow workers in the bag, green workers in a pile. Sort resource counters, turn skill tiles face-down. Each player draws <strong>eight</strong> workers at random, secretly.",
                    springCount: 9,
                    summerCount: 9,
                    autumnCount: 9,
                    winterCount: 2
                },
                {
                    number: 6,
                    boats: [1, 2, 3, 4, 5, 6],
                    orderTileInstructions: "Use all four turn order tiles, with appropriate side up for up to 6 players.",
                    componentInstructions: "Put blue/red/yellow workers in the bag, green workers in a pile. Sort resource counters, turn skill tiles face-down. Each player draws <strong>eight</strong> workers at random, secretly.",
                    springCount: 10,
                    summerCount: 10,
                    autumnCount: 10,
                    winterCount: 2
                }
            ]
        }
    };
}
else {
    // Throw error that keyflower isn't loaded!
}