import Phaser from "phaser";

export class mainScene extends Phaser.Scene {
  constructor() {
    super("mainScene");
  }
}

WebFont.load({
  google: {
    families: ["VT323", "Press Start 2P", "Silkscreen"],
  },
  active: () => {
    startGame();
  },
});

function startGame() {
  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 448,
    backgroundColor: "#2d2d2d",

    parent: "game-container",

    dom: {
      createContainer: true,
    },
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 0 },
        debug: false,
      },
    },

    scene: [],
  };
  const game = new Phaser.Game(config);
}
