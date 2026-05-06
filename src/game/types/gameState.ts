export type GameSceneKey = 'garage';

export type InventoryItemId = 'portal-spark' | 'broken-gadget';

export type RelationshipId = 'rick' | 'morty' | 'summer' | 'jerry';

export interface GameState {
  chaos: number;
  inventory: InventoryItemId[];
  flags: Record<string, boolean>;
  relationships: Record<RelationshipId, number>;
  currentScene: GameSceneKey;
}
