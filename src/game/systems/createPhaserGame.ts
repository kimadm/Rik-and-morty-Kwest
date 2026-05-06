import Phaser from 'phaser';
import { BootScene } from '../scenes/BootScene';
import { GarageScene } from '../scenes/GarageScene';

export function createPhaserGame(parent: HTMLElement) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    parent,
    width: 960,
    height: 540,
    backgroundColor: '#060812',
    scene: [BootScene, GarageScene],
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
  });
}
