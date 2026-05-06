import type { ChoiceCondition, QuestChoice } from '../types/quest';
import type { GameState } from '../types/gameState';

const MIN_CHAOS = 0;
const MAX_CHAOS = 10;

export const clampChaos = (chaos: number) => Math.min(MAX_CHAOS, Math.max(MIN_CHAOS, chaos));

export function isConditionMet(state: GameState, condition: ChoiceCondition): boolean {
  if (condition.hasItem && !state.inventory.includes(condition.hasItem)) {
    return false;
  }

  if (condition.lacksItem && state.inventory.includes(condition.lacksItem)) {
    return false;
  }

  if (condition.flag && !state.flags[condition.flag]) {
    return false;
  }

  if (condition.notFlag && state.flags[condition.notFlag]) {
    return false;
  }

  if (condition.minChaos !== undefined && state.chaos < condition.minChaos) {
    return false;
  }

  if (condition.maxChaos !== undefined && state.chaos > condition.maxChaos) {
    return false;
  }

  if (
    condition.minRelationship &&
    state.relationships[condition.minRelationship.id] < condition.minRelationship.value
  ) {
    return false;
  }

  return true;
}

export function isChoiceAvailable(state: GameState, choice: QuestChoice): boolean {
  return choice.conditions?.every((condition) => isConditionMet(state, condition)) ?? true;
}

export function applyChoiceToState(state: GameState, choice: QuestChoice): GameState {
  if (!isChoiceAvailable(state, choice)) {
    return state;
  }

  const effects = choice.effects;
  const removedItems = new Set(effects?.removeItems ?? []);
  const existingItems = state.inventory.filter((item) => !removedItems.has(item));
  const inventory = [...existingItems];

  effects?.addItems?.forEach((item) => {
    if (!inventory.includes(item)) {
      inventory.push(item);
    }
  });

  const relationshipDeltas = effects?.relationships ?? {};
  const relationships: GameState['relationships'] = { ...state.relationships };

  Object.entries(relationshipDeltas).forEach(([id, delta]) => {
    const relationshipId = id as keyof GameState['relationships'];
    relationships[relationshipId] = (relationships[relationshipId] ?? 0) + (delta ?? 0);
  });

  return {
    ...state,
    chaos: clampChaos(state.chaos + (effects?.chaosDelta ?? 0)),
    inventory,
    flags: effects?.setFlags
      ? {
          ...state.flags,
          ...effects.setFlags,
        }
      : state.flags,
    relationships,
    currentScene: choice.nextScene ?? state.currentScene,
    currentEnding: choice.ending ?? state.currentEnding,
  };
}
