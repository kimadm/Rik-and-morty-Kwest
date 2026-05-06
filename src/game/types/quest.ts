export type QuestSceneId = 'garage' | 'black-market' | 'living-instructions' | 'bureaucracy' | 'final-garage';

export type QuestEndingId = 'good' | 'bad' | 'chaos' | 'selfish';

export type InventoryItemId =
  | 'broken-gadget'
  | 'portal-spark'
  | 'portal-gun'
  | 'stability-crystal'
  | 'anti-bureaucracy-stamp'
  | 'living-manual'
  | 'shawarma-coupon'
  | 'fake-council-pass'
  | 'toxic-battery'
  | 'family-photo'
  | 'jerry-scent-stabilizer';

export type CharacterId = 'rick' | 'morty' | 'summer' | 'jerry' | 'livingManual' | 'blipBlop' | 'council';

export interface QuestItem {
  id: InventoryItemId;
  name: string;
  description: string;
}

export interface QuestCharacter {
  id: CharacterId;
  name: string;
  role: string;
}

export interface ChoiceCondition {
  hasItem?: InventoryItemId;
  lacksItem?: InventoryItemId;
  flag?: string;
  notFlag?: string;
  minChaos?: number;
  maxChaos?: number;
  minRelationship?: {
    id: CharacterId;
    value: number;
  };
}

export interface QuestChoiceEffects {
  chaosDelta?: number;
  addItems?: InventoryItemId[];
  removeItems?: InventoryItemId[];
  setFlags?: Record<string, boolean>;
  relationships?: Partial<Record<CharacterId, number>>;
}

export interface QuestChoice {
  id: string;
  label: string;
  response: string;
  conditions?: ChoiceCondition[];
  effects?: QuestChoiceEffects;
  nextScene?: QuestSceneId;
  ending?: QuestEndingId;
}

export interface QuestScene {
  id: QuestSceneId;
  title: string;
  location: string;
  background: string;
  characters: CharacterId[];
  dialogue: {
    speaker: CharacterId;
    text: string;
  };
  choices: QuestChoice[];
}

export interface QuestEnding {
  id: QuestEndingId;
  title: string;
  tone: 'good' | 'bad' | 'chaos' | 'selfish';
  description: string;
  conditions: ChoiceCondition[];
}

