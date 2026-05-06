import type { QuestEnding, QuestEndingId } from '../types/quest';

export const questEndings: Record<QuestEndingId, QuestEnding> = {
  good: {
    id: 'good',
    title: 'Stable Portal, Unstable Praise',
    tone: 'good',
    description: 'The portal opens cleanly, Morty stops panic-sweating, and Rik admits the plan was “not completely infant-brained.”',
    conditions: [
      { hasItem: 'stability-crystal' },
      { hasItem: 'anti-bureaucracy-stamp' },
      { maxChaos: 5 },
    ],
  },
  bad: {
    id: 'bad',
    title: 'Paperwork Singularity',
    tone: 'bad',
    description: 'Missing approvals fold the garage into a waiting room where every chair asks for triplicate consent.',
    conditions: [
      { notFlag: 'formsApproved' },
      { maxChaos: 9 },
    ],
  },
  chaos: {
    id: 'chaos',
    title: 'Chaos Collapse',
    tone: 'chaos',
    description: 'Reality notices the chaos meter, panics, and turns the finale into a neon blender of unresolved choices.',
    conditions: [{ minChaos: 10 }],
  },
  selfish: {
    id: 'selfish',
    title: 'Coupon-Based Betrayal',
    tone: 'selfish',
    description: 'You keep the best loot, leave the hard work to everyone else, and become a very small legend in an illegal food court.',
    conditions: [
      { hasItem: 'shawarma-coupon' },
      { flag: 'keptCoupon' },
    ],
  },
};
