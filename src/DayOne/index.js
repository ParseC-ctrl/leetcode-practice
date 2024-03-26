var Color;
(function (Color) {
    Color["RED"] = "RED";
    Color["YELLOW"] = "YELLOW";
    Color["BLUE"] = "BLUE";
    Color["GREEN"] = "GREEN";
})(Color || (Color = {}));
var EquipName;
(function (EquipName) {
    EquipName["HAT"] = "HAT";
    EquipName["GLOVES"] = "GLOVES";
    EquipName["CLOTHES"] = "CLOTHES";
})(EquipName || (EquipName = {}));
var Player = /** @class */ (function () {
    function Player(name) {
        this.playerName = name;
        this.equips = this.initEquips();
    }
    Player.prototype.initEquips = function () {
        var arrays = Object.values(EquipName);
        var obj = {};
        arrays.forEach(function (item) {
            obj[item] = new Equip(EquipName[item]);
        });
        console.log("初始状态", obj);
        return obj;
    };
    Player.prototype.updateEquip = function (diceNum) {
        switch (diceNum) {
            case 2:
                this.equips[EquipName.GLOVES].setColor(Color.RED);
                break;
            case 3:
                this.equips[EquipName.CLOTHES].setColor(Color.RED);
                break;
            case 4:
                this.equips[EquipName.HAT].setColor(Color.RED);
                break;
            default:
                break;
        }
    };
    Player.prototype.checkIfAllEquipsIsRed = function () {
        var result = Object.values(this.equips).filter(function (item) {
            return item.getColor() === Color.RED;
        });
        if (result.length === 3)
            return true;
        return false;
    };
    Player.prototype.showCurrentEquips = function () {
        console.log(this.equips);
    };
    return Player;
}());
var Game = /** @class */ (function () {
    function Game(initMoney, playerName) {
        this.player = new Player(playerName);
        this.money = initMoney;
        this.isWin = false;
    }
    Game.prototype.rollDice = function () {
        this.money -= 10;
        var number = Math.floor(Math.random() * 6) + 1;
        this.player.updateEquip(number);
        this.isGameOver();
    };
    Game.prototype.beginGame = function () {
        this.isGameOver();
        for (var i = 0; i < 10; i++) {
            console.log("\u5F53\u524D\u6295\u63B7\u6B21\u6570\u662F\u7B2C".concat(i + 1, "\u6B21"));
            this.rollDice();
            this.player.showCurrentEquips();
            if (this.isWin)
                break;
            if (i === 9 && !this.isWin)
                console.log("游戏失败，霉逼");
        }
    };
    Game.prototype.isGameOver = function () {
        if (this.player.checkIfAllEquipsIsRed()) {
            console.log("你成功做到了");
            this.isWin = true;
            return true;
        }
        else if (this.money === 0 && !this.player.checkIfAllEquipsIsRed()) {
            return false;
        }
    };
    return Game;
}());
var Equip = /** @class */ (function () {
    function Equip(name) {
        this.color = Equip.getRandomColor();
        this.name = name;
    }
    Equip.prototype.getColor = function () {
        return this.color;
    };
    Equip.prototype.setColor = function (color) {
        this.color = color;
    };
    Equip.getRandomColor = function () {
        var colors = Object.values(Color);
        var randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };
    return Equip;
}());
var game = new Game(100, "gyk");
game.beginGame();
