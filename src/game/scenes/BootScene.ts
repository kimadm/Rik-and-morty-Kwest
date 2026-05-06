import Phaser from 'phaser';

export class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  create() {
    this.cameras.main.setBackgroundColor('#060812');

    const { width, height } = this.scale;
    this.add.text(width / 2, height / 2, 'Booting unstable quest engine...', {
      color: '#9cff6d',
      fontFamily: 'monospace',
      fontSize: '24px',
    }).setOrigin(0.5);

    this.time.delayedCall(500, () => {
      this.scene.start('GarageScene');
    });
  }
}
