import type { GameState } from './gameState';

export interface DialogueChoice {
  id: string;
  label: string;
  response: string;
  nextScene?: string;
  effects?: Partial<{
    chaosDelta: number;
    addItem: GameState['inventory'][number];
    setFlag: string;
    relationship: {
      id: keyof GameState['relationships'];
      delta: number;
    };
  }>;
}

export interface DialogueNode {
  speaker: string;
  text: string;
  choices: DialogueChoice[];
}
