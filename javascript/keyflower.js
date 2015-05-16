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
            _.each(keyflower.data.games, function(el, index) {
                if (_.indexOf(includeList, el.id) >= 0)
                {
                    tileCollection = _.union(tileCollection, el.tiles);
                }
            }, this);
            console.log(tileCollection);
            // Tiles from all games combined
            // TODO: Add feature to select which games you want to play with

            // Grabbing rules for current player count
            var rules = _.findWhere(keyflower.data.rules.playerCounts, {number: playerCount});
            var thisGame = keyflower.currentGame;

            // Split out by season
            thisGame.tilePool.home = _.where(tileCollection, {type: "home"});
            //thisGame.tilePool.order = _.where(tileCollection, {type: "order"});
            //thisGame.tilePool.boat = _.where(tileCollection, {type: "boat"});
            thisGame.tilePool.spring = _.where(tileCollection, {type: "spring"});
            thisGame.tilePool.summer = _.where(tileCollection, {type: "summer"});
            thisGame.tilePool.autumn = _.where(tileCollection, {type: "autumn"});

            // Sample the appropriate number of tiles from the stacks
            // This should reduce the size
            thisGame.tiles.home = _.sample(thisGame.tilePool.home, rules.homeCount);
            thisGame.tiles.spring = _.sample(thisGame.tilePool.spring, rules.springCount);
            thisGame.tiles.summer = _.sample(thisGame.tilePool.summer, rules.summerCount);
            thisGame.tiles.autumn = _.sample(thisGame.tilePool.autumn, rules.autumnCount);
        }
    },
    loadSettings: function() {

    },
    verifyData: function() {
        console.log("In verifyData().");
        if (keyflower.data && keyflower.data.games) {
            if (_.isArray(keyflower.data.games) && keyflower.data.games.length == 4) {
                return true;
            }
        }
        return false;
    }
};
