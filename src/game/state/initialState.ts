import type { GameState } from '../types/gameState';

export const initialGameState: GameState = {
  chaos: 1,
  inventory: ['broken-gadget'],
  flags: {
    garageVisited: true,
  },
  relationships: {
    rick: 0,
    morty: 0,
    summer: 0,
    jerry: 0,
    livingManual: 0,
    blipBlop: 0,
    council: 0,
  },
  currentScene: 'garage',
};
