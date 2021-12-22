const getRandomVal = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currRound: 0,
      winner: null,
      battleLogs: [],
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth > 0 ? this.monsterHealth + "%" : "0" };
    },
    playerBarStyles() {
      return { width: this.playerHealth > 0 ? this.playerHealth + "%" : "0" };
    },
    specialAttackAvailable() {
      return this.currRound % 3 === 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  methods: {
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currRound = 0;
      this.winner = null;
      this.battleLogs = [];
    },
    attackMonster() {
      const attackVal = getRandomVal(5, 12);
      this.monsterHealth -= attackVal;
      this.addLogMessage("player", "attack", attackVal);
      this.attackPlayer();
      this.currRound++;
    },
    attackPlayer() {
      const attackVal = getRandomVal(8, 15);
      this.playerHealth -= attackVal;
      this.addLogMessage("monster", "attack", attackVal);
    },
    specialAttackMonster() {
      const attackVal = getRandomVal(10, 25);
      this.monsterHealth -= attackVal;
      this.addLogMessage("player", "attack", attackVal);
      this.attackPlayer();
      this.currRound++;
    },
    healPlayer() {
      const healVal = getRandomVal(5, 20);
      this.playerHealth += Math.min(healVal, 100 - this.playerHealth);
      this.addLogMessage("player", "heal", healVal);
      this.attackPlayer();
      this.currRound++;
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMessage(who, action, value) {
      const logMsg = {
        actionBy: who,
        actionType: action,
        actionValue: value,
      };
      this.battleLogs.unshift(logMsg);
    },
  },
});

app.mount("#game");
