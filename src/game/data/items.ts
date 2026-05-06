import type { InventoryItemId, QuestItem } from '../types/quest';

export const questItems: Record<InventoryItemId, QuestItem> = {
  'broken-gadget': {
    id: 'broken-gadget',
    name: 'Broken Gadget',
    description: 'A sparking handheld device that might be useful once it stops screaming in binary.',
  },
  'portal-spark': {
    id: 'portal-spark',
    name: 'Portal Spark',
    description: 'A bottled green spark from the garage portal ring. It smells like batteries and regret.',
  },
  'portal-gun': {
    id: 'portal-gun',
    name: 'Portal Gun',
    description: 'A prototype dimension hopper with a cracked safety label and exactly one trustworthy button.',
  },
  'stability-crystal': {
    id: 'stability-crystal',
    name: 'Stability Crystal',
    description: 'A humming crystal that keeps portals from becoming hungry geometry.',
  },
  'anti-bureaucracy-stamp': {
    id: 'anti-bureaucracy-stamp',
    name: 'Anti-Bureaucracy Stamp',
    description: 'A rubber stamp that marks paperwork as already emotionally resolved.',
  },
  'living-manual': {
    id: 'living-manual',
    name: 'Living Manual',
    description: 'An instruction booklet with opinions, feelings, and a tiny pair of reading glasses.',
  },
  'shawarma-coupon': {
    id: 'shawarma-coupon',
    name: 'Interdimensional Shawarma Coupon',
    description: 'Redeemable for one sandwich or one suspicious favor in most illegal markets.',
  },
  'fake-council-pass': {
    id: 'fake-council-pass',
    name: 'Fake Council Pass',
    description: 'A laminated pass that looks official if nobody reads the word “definitely” too closely.',
  },
  'toxic-battery': {
    id: 'toxic-battery',
    name: 'Toxic Battery',
    description: 'Extra portal power with the minor drawback of making reality wheeze.',
  },
  'family-photo': {
    id: 'family-photo',
    name: 'Family Photo',
    description: 'A wrinkled photo that can remind nervous companions why survival is fashionable.',
  },
  'jerry-scent-stabilizer': {
    id: 'jerry-scent-stabilizer',
    name: 'Jerry Scent Stabilizer',
    description: 'A baffling spray that makes monsters politely choose another hallway.',
  },
};
