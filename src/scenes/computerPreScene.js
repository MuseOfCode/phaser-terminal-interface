import { ComputerFace } from "../components/computerFace";

export default class ComputerPreScene extends Phaser.Scene {
  constructor() {
    super("computerPreScene");
  }

  preload() {
    this.load.image(
      "computer_blank",
      "/src/assets/computerwithface/defaultExpressions/computer_blank.png"
    );
  }

  create() {
    this.face = new ComputerFace(this, 400, 240);
  }
}
