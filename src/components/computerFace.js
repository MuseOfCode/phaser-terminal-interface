export class ComputerFace {
  constructor(scene, x, y) {
    this.scene = scene;
    this.x = x;
    this.y = y;

    this.image = scene.add.image(x, y, "computer_blank").setDepth(-1);
    this.currentAnimation = null;
    this.frameIndex = 0;
    this.timer = null;
  }
}
