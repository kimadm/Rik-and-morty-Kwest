import type { DialogueChoice } from '../types/dialogue';
import type { GameState } from '../types/gameState';

const clampChaos = (chaos: number) => Math.min(10, Math.max(0, chaos));

export function applyChoiceToState(state: GameState, choice: DialogueChoice): GameState {
  const effects = choice.effects;

  if (!effects) {
    return state;
  }

  const nextState: GameState = {
    ...state,
    chaos: clampChaos(state.chaos + (effects.chaosDelta ?? 0)),
    inventory: effects.addItem && !state.inventory.includes(effects.addItem)
      ? [...state.inventory, effects.addItem]
      : state.inventory,
    flags: effects.setFlag
      ? {
          ...state.flags,
          [effects.setFlag]: true,
        }
      : state.flags,
    relationships: effects.relationship
      ? {
          ...state.relationships,
          [effects.relationship.id]: state.relationships[effects.relationship.id] + effects.relationship.delta,
        }
      : state.relationships,
    currentScene: state.currentScene,
  };

  return nextState;
}
