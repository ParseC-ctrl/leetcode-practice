enum Color {
  RED = "RED",
  YELLOW = "YELLOW",
  BLUE = "BLUE",
  GREEN = "GREEN",
}

enum EquipName {
  HAT = "HAT",
  GLOVES = "GLOVES",
  CLOTHES = "CLOTHES",
}

type Equips = Record<EquipName, Equip>;

class Player {
  private playerName: string;
  private equips: Equips;
  constructor(name: string) {
    this.playerName = name;
    this.equips = this.initEquips() as Equips;
  }

  initEquips() {
    const arrays = Object.values(EquipName);
    let obj = {};
    arrays.forEach((item) => {
      obj[item] = new Equip(EquipName[item]);
    });
    console.log("初始状态",obj);
    return obj;
  }

  updateEquip(diceNum: number) {
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
  }

  checkIfAllEquipsIsRed() {
    const result = Object.values(this.equips).filter((item) => {
      return item.getColor() === Color.RED;
    });
    if (result.length === 3) return true;
    return false;
  }

  showCurrentEquips() {
    console.log(this.equips);
  }
}

class Game {
  private player: Player;
  private money: number;
  private isWin: boolean;
  constructor(initMoney: number, playerName: string) {
    this.player = new Player(playerName);
    this.money = initMoney;
    this.isWin = false;
  }

  rollDice() {
    this.money -= 10;
    const number = Math.floor(Math.random() * 6) + 1;
    this.player.updateEquip(number);
    this.isGameOver();
  }

  beginGame(): void {
    this.isGameOver();
    for (let i = 0; i < 10; i++) {
      console.log(`当前投掷次数是第${i + 1}次`);
      this.rollDice();
      this.player.showCurrentEquips();
      if (this.isWin) break;
      if(i === 9 && !this.isWin) console.log("游戏失败，霉逼"); 
    }
  }

  isGameOver(): boolean {
    if (this.player.checkIfAllEquipsIsRed()) {
      console.log("你成功做到了");
      this.isWin = true;
      return true;
    } else if (this.money === 0 && !this.player.checkIfAllEquipsIsRed()) {
      return false;
    }
  }
}

class Equip {
  private name: EquipName;
  private color: Color;

  constructor(name: EquipName) {
    this.color = Equip.getRandomColor();
    this.name = name;
  }

  getColor(): Color {
    return this.color;
  }

  setColor(color: Color): void {
    this.color = color;
  }

  static getRandomColor(): Color {
    const colors = Object.values(Color);
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
}

const game = new Game(100, "gyk");
game.beginGame();
