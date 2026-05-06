import type { CharacterId, QuestCharacter } from '../types/quest';

export const questCharacters: Record<CharacterId, QuestCharacter> = {
  rick: {
    id: 'rick',
    name: 'Rik',
    role: 'Unlicensed scientist mentor with a portal problem and limited patience.',
  },
  morty: {
    id: 'morty',
    name: 'Morty',
    role: 'Anxious intern whose survival instincts are usually correct.',
  },
  summer: {
    id: 'summer',
    name: 'Summer',
    role: 'Confident hacker who respects bold plans more than safe ones.',
  },
  jerry: {
    id: 'jerry',
    name: 'Jerry',
    role: 'Accidental chaos sponge with unexpectedly useful pocket clutter.',
  },
  livingManual: {
    id: 'livingManual',
    name: 'Living Manual',
    role: 'Sentient instructions that reward politeness and punish skimming.',
  },
  blipBlop: {
    id: 'blipBlop',
    name: 'Blip-Blop',
    role: 'Black market trader who accepts coupons, favors, and bad decisions.',
  },
  council: {
    id: 'council',
    name: 'Council Clerk',
    role: 'A multidimensional bureaucrat guarding the final form stack.',
  },
};
