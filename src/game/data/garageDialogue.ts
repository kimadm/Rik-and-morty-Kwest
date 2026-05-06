import type { DialogueNode } from '../types/dialogue';

export const garageDialogue: DialogueNode = {
  speaker: 'Unlicensed Scientist',
  text: 'The garage hums with unsafe machines, a wobbling portal ring, and one very impatient mentor. Your internship starts before the waiver prints.',
  choices: [
    {
      id: 'inspect-portal',
      label: 'Inspect the portal ring',
      response: 'The ring spits out a harmless green spark. Probably harmless. You bottle it before it eats the workbench.',
      effects: {
        chaosDelta: 1,
        addItem: 'portal-spark',
        setFlag: 'inspectedPortal',
      },
    },
    {
      id: 'calm-down',
      label: 'Ask for instructions',
      response: 'The mentor squints, then grudgingly admits that asking questions before touching glowing buttons is technically competent.',
      effects: {
        chaosDelta: -1,
        relationship: {
          id: 'rick',
          delta: 1,
        },
        setFlag: 'askedForInstructions',
      },
    },
  ],
};
