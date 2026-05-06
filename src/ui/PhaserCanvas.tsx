import { useEffect, useRef } from 'react';
import type Phaser from 'phaser';
import { createPhaserGame } from '../game/systems/createPhaserGame';

export function PhaserCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (!containerRef.current || gameRef.current) {
      return;
    }

    gameRef.current = createPhaserGame(containerRef.current);

    return () => {
      gameRef.current?.destroy(true);
      gameRef.current = null;
    };
  }, []);

  return <div className="phaser-shell" ref={containerRef} aria-label="Game scene canvas" />;
}
