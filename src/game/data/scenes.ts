import type { QuestScene, QuestSceneId } from '../types/quest';

export const questScenes: Record<QuestSceneId, QuestScene> = {
  garage: {
    id: 'garage',
    title: 'Garage Calibration Disaster',
    location: 'Rik’s Garage',
    background: 'placeholder-garage-lab',
    characters: ['rick', 'morty', 'jerry'],
    dialogue: {
      speaker: 'rick',
      text: 'The portal ring coughs sparks across the garage. Rik needs parts, Morty needs reassurance, and the workbench needs fewer teeth.',
    },
    choices: [
      {
        id: 'garage-inspect-portal',
        label: 'Bottle a portal spark',
        response: 'The spark rattles around the jar like it owes someone money. Useful, probably radioactive, definitely yours.',
        conditions: [{ lacksItem: 'portal-spark' }],
        effects: {
          chaosDelta: 1,
          addItems: ['portal-spark'],
          setFlags: { inspectedPortal: true },
        },
      },
      {
        id: 'garage-ask-instructions',
        label: 'Ask for actual instructions',
        response: 'Rik groans, but Morty relaxes. The plan: get a stability crystal before the portal eats the block.',
        effects: {
          chaosDelta: -1,
          relationships: { rick: 1, morty: 1 },
          setFlags: { askedForInstructions: true },
        },
      },
      {
        id: 'garage-take-portal-gun',
        label: 'Grab the portal gun and leave',
        response: 'You take the patched portal gun. It buzzes approvingly, which nobody finds comforting.',
        conditions: [{ hasItem: 'portal-spark' }],
        effects: {
          addItems: ['portal-gun', 'family-photo'],
          setFlags: { garageCleared: true },
          relationships: { rick: -1, morty: 1 },
        },
        nextScene: 'black-market',
      },
    ],
  },
  'black-market': {
    id: 'black-market',
    title: 'Illegal Food Court Exchange',
    location: 'Interdimensional Black Market',
    background: 'placeholder-neon-market',
    characters: ['morty', 'summer', 'blipBlop'],
    dialogue: {
      speaker: 'blipBlop',
      text: 'Blip-Blop offers portal parts between counterfeit diplomas and soup that predicts lawsuits.',
    },
    choices: [
      {
        id: 'market-trade-spark',
        label: 'Trade the portal spark for a crystal',
        response: 'Blip-Blop pockets the spark and hands over a stability crystal wrapped in a napkin contract.',
        conditions: [{ hasItem: 'portal-spark' }, { lacksItem: 'stability-crystal' }],
        effects: {
          chaosDelta: -1,
          addItems: ['stability-crystal', 'shawarma-coupon'],
          removeItems: ['portal-spark'],
          relationships: { blipBlop: 1, morty: 1 },
          setFlags: { madeCleanTrade: true },
        },
      },
      {
        id: 'market-steal-pass',
        label: 'Steal a fake Council pass',
        response: 'Summer is impressed. The booth alarm is also impressed, loudly.',
        conditions: [{ lacksItem: 'fake-council-pass' }],
        effects: {
          chaosDelta: 3,
          addItems: ['fake-council-pass'],
          relationships: { summer: 1, blipBlop: -2 },
          setFlags: { stoleCouncilPass: true },
        },
      },
      {
        id: 'market-visit-manual',
        label: 'Find the living instructions',
        response: 'A vending machine dispenses a tiny screaming manual and exact coordinates to somewhere quieter.',
        conditions: [{ hasItem: 'stability-crystal' }],
        effects: {
          addItems: ['living-manual'],
          setFlags: { foundManual: true },
        },
        nextScene: 'living-instructions',
      },
    ],
  },
  'living-instructions': {
    id: 'living-instructions',
    title: 'Manual With Boundaries',
    location: 'Living Instructions Dimension',
    background: 'placeholder-paper-library',
    characters: ['morty', 'livingManual', 'jerry'],
    dialogue: {
      speaker: 'livingManual',
      text: 'The manual clears its throat, unfolds extra pages, and demands to be treated like a professional document.',
    },
    choices: [
      {
        id: 'manual-read-politely',
        label: 'Read every safety step politely',
        response: 'The manual blushes in footnotes and reveals the correct stamp sequence for the bureaucracy dimension.',
        effects: {
          chaosDelta: -2,
          relationships: { livingManual: 2, morty: 1 },
          setFlags: { learnedStampSequence: true },
        },
      },
      {
        id: 'manual-rip-shortcut',
        label: 'Rip out the shortcut page',
        response: 'The shortcut works, but the manual declares a tiny paper vendetta.',
        conditions: [{ notFlag: 'learnedStampSequence' }],
        effects: {
          chaosDelta: 2,
          addItems: ['toxic-battery'],
          relationships: { livingManual: -3, rick: 1 },
          setFlags: { angeredManual: true },
        },
      },
      {
        id: 'manual-go-bureaucracy',
        label: 'Open the bureaucracy portal',
        response: 'The portal opens into a beige hallway where time itself is waiting for a signature.',
        conditions: [{ hasItem: 'living-manual' }],
        nextScene: 'bureaucracy',
      },
    ],
  },
  bureaucracy: {
    id: 'bureaucracy',
    title: 'Department of Portal Consequences',
    location: 'Bureaucracy Dimension',
    background: 'placeholder-endless-office',
    characters: ['morty', 'council', 'jerry'],
    dialogue: {
      speaker: 'council',
      text: 'A clerk slides forms across the counter. Each page has a checkbox for “existential splatter risk.”',
    },
    choices: [
      {
        id: 'bureaucracy-use-sequence',
        label: 'Use the manual’s stamp sequence',
        response: 'The clerk weeps one regulation tear and gives you the anti-bureaucracy stamp.',
        conditions: [{ flag: 'learnedStampSequence' }, { lacksItem: 'anti-bureaucracy-stamp' }],
        effects: {
          chaosDelta: -1,
          addItems: ['anti-bureaucracy-stamp'],
          setFlags: { formsApproved: true },
          relationships: { council: 1, livingManual: 1 },
        },
      },
      {
        id: 'bureaucracy-flash-pass',
        label: 'Flash the fake Council pass',
        response: 'The pass gets you through three doors and onto seven watchlists.',
        conditions: [{ hasItem: 'fake-council-pass' }],
        effects: {
          chaosDelta: 2,
          addItems: ['anti-bureaucracy-stamp'],
          setFlags: { formsApproved: true, councilSuspicious: true },
          relationships: { council: -2, summer: 1 },
        },
      },
      {
        id: 'bureaucracy-jerry-spray',
        label: 'Accept Jerry’s pocket stabilizer',
        response: 'Nobody knows why Jerry had this spray. Nobody wants to ask. It does calm the hallway.',
        conditions: [{ lacksItem: 'jerry-scent-stabilizer' }],
        effects: {
          chaosDelta: -1,
          addItems: ['jerry-scent-stabilizer'],
          relationships: { jerry: 2, morty: -1 },
          setFlags: { jerryHelped: true },
        },
      },
      {
        id: 'bureaucracy-return-garage',
        label: 'Return for the final portal build',
        response: 'You escape with enough paperwork to make a portal legally nervous.',
        conditions: [{ hasItem: 'anti-bureaucracy-stamp' }],
        nextScene: 'final-garage',
      },
      {
        id: 'bureaucracy-skip-forms',
        label: 'Run back without approval',
        response: 'The clerk whispers “noncompliance” as alarms begin filling out incident reports.',
        conditions: [{ lacksItem: 'anti-bureaucracy-stamp' }],
        effects: {
          chaosDelta: 2,
          setFlags: { skippedForms: true },
        },
        nextScene: 'final-garage',
      },
    ],
  },
  'final-garage': {
    id: 'final-garage',
    title: 'Final Garage Portal',
    location: 'Rik’s Garage, Worse Somehow',
    background: 'placeholder-final-garage',
    characters: ['rick', 'morty', 'summer', 'jerry'],
    dialogue: {
      speaker: 'rick',
      text: 'Everyone crowds around the rebuilt portal. The meter jitters, the stamp smokes, and the universe waits for your last decision.',
    },
    choices: [
      {
        id: 'final-open-stable-portal',
        label: 'Open the stable portal together',
        response: 'The portal blooms safely. Against all odds, teamwork and paperwork prevent dimensional soup.',
        conditions: [
          { hasItem: 'stability-crystal' },
          { hasItem: 'anti-bureaucracy-stamp' },
          { maxChaos: 5 },
        ],
        effects: {
          relationships: { rick: 1, morty: 1, jerry: 1 },
          setFlags: { openedStablePortal: true },
        },
        ending: 'good',
      },
      {
        id: 'final-force-portal',
        label: 'Force the portal open anyway',
        response: 'The portal technically opens, then immediately audits the garage into a folding chair dimension.',
        conditions: [{ notFlag: 'formsApproved' }],
        effects: {
          chaosDelta: 2,
          setFlags: { forcedPortal: true },
        },
        ending: 'bad',
      },
      {
        id: 'final-overload-battery',
        label: 'Overload it with toxic power',
        response: 'The toxic battery shrieks. The chaos meter stops being a meter and starts being weather.',
        conditions: [{ hasItem: 'toxic-battery' }],
        effects: {
          chaosDelta: 10,
          setFlags: { overloadedPortal: true },
        },
        ending: 'chaos',
      },
      {
        id: 'final-keep-coupon',
        label: 'Keep the coupon and bail',
        response: 'You quietly leave through a side portal to spend the coupon before anyone asks about responsibility.',
        conditions: [{ hasItem: 'shawarma-coupon' }],
        effects: {
          setFlags: { keptCoupon: true },
          relationships: { morty: -2, rick: -1, blipBlop: 1 },
        },
        ending: 'selfish',
      },
    ],
  },
};
