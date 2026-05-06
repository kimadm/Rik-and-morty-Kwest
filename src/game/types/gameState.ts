import type { CharacterId, InventoryItemId, QuestEndingId, QuestSceneId } from './quest';

export type GameSceneKey = QuestSceneId;

export type RelationshipId = CharacterId;

export interface GameState {
  chaos: number;
  inventory: InventoryItemId[];
  flags: Record<string, boolean>;
  relationships: Record<RelationshipId, number>;
  currentScene: GameSceneKey;
  currentEnding?: QuestEndingId;
}
