import Phaser from 'phaser';

export class GarageScene extends Phaser.Scene {
  private portalPulse?: Phaser.GameObjects.Arc;

  constructor() {
    super('GarageScene');
  }

  create() {
    const { width, height } = this.scale;

    this.add.rectangle(width / 2, height / 2, width, height, 0x101724);
    this.add.rectangle(width / 2, height - 80, width, 160, 0x1b2230);
    this.add.rectangle(width * 0.26, height * 0.56, 210, 130, 0x263241).setStrokeStyle(3, 0x536878);
    this.add.rectangle(width * 0.72, height * 0.58, 260, 100, 0x30283c).setStrokeStyle(3, 0x7a5cff);

    this.add.text(28, 24, 'Garage Prototype Scene', {
      color: '#e4f7ff',
      fontFamily: 'monospace',
      fontSize: '22px',
    });

    this.add.text(width * 0.26, height * 0.56, 'workbench\nplaceholder', {
      align: 'center',
      color: '#d2e7ef',
      fontFamily: 'monospace',
      fontSize: '18px',
    }).setOrigin(0.5);

    this.add.text(width * 0.72, height * 0.58, 'portal parts\nplaceholder', {
      align: 'center',
      color: '#efe4ff',
      fontFamily: 'monospace',
      fontSize: '18px',
    }).setOrigin(0.5);

    this.createPlaceholderCharacter(width * 0.48, height * 0.56, 0x8be9fd, 'mentor');
    this.createPlaceholderCharacter(width * 0.58, height * 0.62, 0xffd166, 'intern');
    this.createPortal(width * 0.82, height * 0.34);
  }

  update() {
    if (!this.portalPulse) {
      return;
    }

    const pulse = 0.5 + Math.sin(this.time.now / 180) * 0.12;
    this.portalPulse.setScale(1 + pulse * 0.2);
    this.portalPulse.setAlpha(0.35 + pulse * 0.35);
  }

  private createPlaceholderCharacter(x: number, y: number, color: number, label: string) {
    const body = this.add.ellipse(x, y, 46, 86, color);
    const head = this.add.circle(x, y - 58, 25, color);
    this.add.text(x, y + 58, label, {
      align: 'center',
      color: '#ffffff',
      fontFamily: 'monospace',
      fontSize: '14px',
    }).setOrigin(0.5);

    this.tweens.add({
      targets: [body, head],
      y: '+=8',
      duration: 900,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut',
    });
  }

  private createPortal(x: number, y: number) {
    this.portalPulse = this.add.circle(x, y, 58, 0x39ff88, 0.45);
    this.add.circle(x, y, 76, 0x00ffaa, 0.12).setStrokeStyle(5, 0x9cffd5, 0.8);
    this.add.text(x, y + 98, 'unstable portal', {
      color: '#a9ffd0',
      fontFamily: 'monospace',
      fontSize: '16px',
    }).setOrigin(0.5);
  }
}
