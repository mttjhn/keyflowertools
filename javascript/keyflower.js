window.keyflower = {
    /* Initialize properties */
    data: {
        games: [
            {
                id: "example",
                title: "Example",
                bggId: "",
                tiles: [
                    {
                        id: "tileId",
                        name: "TileName",
                        type: "winter", // Could be boat, order, home, spring, summer, autumn, winter
                        categories: ["ore", "skill"]
                    }
                ]
            }
        ],
        rules: {
            playerCounts: [
                {
                    number: 2,
                    homeCount: 2,
                    boats: [],
                    orderTiles: [],
                    springCount: 4,
                    summerCount: 4,
                    autumnCount: 4,
                    winterCount: 4
                }
            ]
        }
    },
    currentGame: {
        players: [],
        tilePool: {
            order: [],
            home: [],
            boat: [],
            spring: [],
            summer: [],
            autumn: []
        },
        tiles: {
            home: [],
            boat: [],
            spring: [],
            summer: [],
            autumn: []
        }
    },
    /* Functions */
    randomize: function (playerCount, includeList) {
        if (keyflower.verifyData()) {
            var tileCollection = [];
            // Combine tiles from all games in includeList
            _.each(keyflower.data.games, function(el, index) {
                if (_.indexOf(includeList, el.id) >= 0)
                {
                    tileCollection = _.union(tileCollection, el.tiles);
                }
            }, this);

            // Grabbing rules for current player count
            var rules = _.findWhere(keyflower.data.rules.playerCounts, {number: playerCount});
            var tempPlayerCount = playerCount;
            var thisGame = keyflower.currentGame;

            // Split out by season
            thisGame.tilePool.home = _.where(tileCollection, {type: "home"});
            thisGame.tilePool.boat = _.where(tileCollection, {type: "boat"});
            thisGame.tilePool.spring = _.where(tileCollection, {type: "spring"});
            thisGame.tilePool.summer = _.where(tileCollection, {type: "summer"});
            thisGame.tilePool.autumn = _.where(tileCollection, {type: "autumn"});

            // Shuffle the stacks.
            thisGame.tilePool.home = _.shuffle(thisGame.tilePool.home);
            thisGame.tilePool.spring = _.shuffle(thisGame.tilePool.spring);
            thisGame.tilePool.summer = _.shuffle(thisGame.tilePool.summer);
            thisGame.tilePool.autumn = _.shuffle(thisGame.tilePool.autumn);

            // Sample the appropriate number of tiles from the stacks
            // This should reduce the size
            thisGame.tiles.home = _.sample(thisGame.tilePool.home, rules.number);
            thisGame.tiles.spring = _.sample(thisGame.tilePool.spring, rules.springCount);
            thisGame.tiles.summer = _.sample(thisGame.tilePool.summer, rules.summerCount);
            thisGame.tiles.autumn = _.sample(thisGame.tilePool.autumn, rules.autumnCount);

            // Get boats for player count
            thisGame.tiles.boat = [];

            _.each(rules.boats, function (el) {
                var chosenBoat = _.findWhere(thisGame.tilePool.boat, {id: el});
                if (chosenBoat) {
                    thisGame.tiles.boat.push(chosenBoat);
                }
            }, this);

            // Clone sampled stacks before any modification
            thisGame.tiles.boat = JSON.parse(JSON.stringify(thisGame.tiles.boat));
            thisGame.tiles.home = JSON.parse(JSON.stringify(thisGame.tiles.home));
            thisGame.tiles.spring = JSON.parse(JSON.stringify(thisGame.tiles.spring));
            thisGame.tiles.summer = JSON.parse(JSON.stringify(thisGame.tiles.summer));
            thisGame.tiles.autumn = JSON.parse(JSON.stringify(thisGame.tiles.autumn));

            // Assign each home tile to a player
            _.each(thisGame.tiles.home, function (el) {
                el.player = "Player " + tempPlayerCount;
                if (tempPlayerCount > 1) {
                    tempPlayerCount = tempPlayerCount-1;
                }
            }, this);


            //Choose a side if boat tiles chosen
            _.each(thisGame.tiles.summer, function (el) {
                if (el.options) {
                    // shuffle first
                    el.options = _.shuffle(el.options);
                    // then choose a side
                    var side = _.sample(el.options, 1);
                    // update the chosen tile
                    el.name = el.name + side;
                    el.options = null;
                }
            }, this);


            //Let's render the results!

            // Render General Setup Instructions
            keyflower.renderInfo("component-info", "<strong>Component Info: </strong>" + rules.componentInstructions);
            keyflower.renderInfo("order-info", "<strong>Turn Order Tiles: </strong>" + rules.orderTileInstructions);
            keyflower.renderInfo("winter-info", "<strong>Winter Tiles: </strong>Shuffle all winter tiles face down, select " + (rules.winterCount * rules.number) + " tiles, and deal " + rules.winterCount + " to each player.");

            // Start with home tiles...
            keyflower.renderInfo("home-info", "Use the following home tiles for this game:");
            keyflower.renderList("home-list", _.sortBy(thisGame.tiles.home, "name"), true);
            // Then boat tiles...
            keyflower.renderInfo("boat-info", "Use the following boat tiles for this game:");
            keyflower.renderList("boat-list", _.sortBy(thisGame.tiles.boat, "id"), false);
            // Then spring tiles...
            keyflower.renderInfo("spring-info", "Use the following spring tiles for this game:");
            keyflower.renderList("spring-list", _.sortBy(thisGame.tiles.spring, "name"), false);
            // Then summer tiles...
            keyflower.renderInfo("summer-info", "Use the following summer tiles for this game:");
            keyflower.renderList("summer-list", _.sortBy(thisGame.tiles.summer, "name"), false);
            // Then autumn tiles...
            keyflower.renderInfo("autumn-info", "Use the following autumn tiles for this game:");
            keyflower.renderList("autumn-list", _.sortBy(thisGame.tiles.autumn, "name"), false);

            // Hide settings and show results
            $("#setupPanel").collapse('show');
            $("#settingsPanel").collapse('hide');
        }
    },
    loadSettingsAndRandomize: function () {
        var expansions = [];
        var playerCount = 2;
        // Load settings
        var includeBase = $("#criteriaIncludeBase");
        var includeFarmers = $("#criteriaIncludeFarmers");
        var includeMerchants = $("#criteriaIncludeMerchants");
        var playerCountElement = $("#criteriaPlayerCount");

        if (includeBase && includeBase.is(':checked')) {
            expansions.push("base");
        }
        if (includeFarmers && includeFarmers.is(':checked')) {
            expansions.push("farmers");
        }
        if (includeMerchants && includeMerchants.is(':checked')) {
            expansions.push("merchants");
        }

        if (playerCountElement && playerCountElement.val()) {
            playerCount = parseInt(playerCountElement.val());
        }

        keyflower.randomize(playerCount, expansions);
    },
    verifyData: function () {
        if (keyflower.data && keyflower.data.games) {
            if (_.isArray(keyflower.data.games) && keyflower.data.games.length == 4) {
                return true;
            }
        }
        return false;
    },
    renderList: function (id, array, showPlayer) {
        var htmlElement = document.getElementById(id);
        if (htmlElement)
        {
            var renderedHtml = "";
            _.each(array, function (el, index) {
                var listItem = "";
                if (!showPlayer)
                {
                    listItem = _.template('<li class="list-group-item"><%= name %></li>');
                }
                else
                {

                    listItem = _.template('<li class="list-group-item"><span class="badge"><%= player %></span><%= name %></li>');
                }
                // Append rendered HTML
                renderedHtml = renderedHtml + listItem(el);
            }, this);
            htmlElement.innerHTML = renderedHtml;
        }
    },
    renderInfo: function(id, text) {
        var htmlElement = document.getElementById(id);
        if (htmlElement)
        {
            var templateItem = _.template('<em><%= infoText %></em>');
            htmlElement.innerHTML = templateItem({infoText: text});

        }
    }
};
