# Codex Tasks

Этот файл содержит пошаговый план для Codex. Не проси Codex сразу сделать всю игру. Двигайся маленькими задачами.

---

## Task 1 — Create initial project

Prompt for Codex:

```text
Read AGENTS.md and docs/GAME_DESIGN.md.

Set up the initial project using Vite + React + TypeScript + Phaser 3.

Create the basic folder structure:
- src/game/scenes
- src/game/data
- src/game/state
- src/game/systems
- src/game/types
- src/ui
- public/assets/characters
- public/assets/backgrounds
- public/assets/items
- public/assets/sounds

Implement:
1. Main React app shell.
2. Phaser game canvas mounted inside React.
3. BootScene.
4. GarageScene with placeholder background.
5. DialogueBox React component.
6. InventoryBar React component.
7. ChaosMeter React component.
8. Shared GameState with:
   - chaos
   - inventory
   - flags
   - relationships
   - currentScene

Use placeholder graphics only.

After implementation, run:
npm run build

Explain how to run the project locally.
```

---

## Task 2 — Data-driven quest system

Prompt for Codex:

```text
Implement the data-driven quest system.

Create these files:
- src/game/types/quest.ts
- src/game/data/items.ts
- src/game/data/characters.ts
- src/game/data/scenes.ts
- src/game/data/endings.ts

Each scene should support:
- id
- title
- location
- background
- characters
- dialogue text
- choices
- choice conditions
- inventory changes
- chaos changes
- relationship changes
- next scene id
- flags

Implement the first playable path:
Garage -> Black Market -> Living Instructions -> Bureaucracy -> Final Garage.

Use the story and gameplay from docs/GAME_DESIGN.md.

Add at least:
- 8 items
- 5 characters
- 5 scenes
- 4 endings
- chaos logic from 0 to 10

Run:
npm run build

Fix any errors.
```

---

## Task 3 — Playable MVP

Prompt for Codex:

```text
Make the MVP playable from start to ending.

Implement:
1. Main menu.
2. New game.
3. Continue game if save exists.
4. Scene transitions based on choices.
5. Inventory updates.
6. Chaos updates.
7. Choice conditions based on items and flags.
8. Ending screen.
9. Restart button.
10. LocalStorage save/load.

The player must be able to reach at least 4 endings:
- good ending
- bad ending
- chaos ending
- selfish ending

Run:
npm run build
```

---

## Task 4 — Placeholder animations

Prompt for Codex:

```text
Add simple placeholder animations for characters and portals.

Implement:
1. Rick placeholder with idle, talking, angry and facepalm states.
2. Morty placeholder with nervous, panic and hopeful states.
3. Summer placeholder with idle phone and eye roll states.
4. Jerry placeholder with awkward idle and panic states.
5. Mr. Meeseeks placeholder spawn/disappear animation.
6. Portal animation with green particles and screen shake.
7. Chaos visual effects:
   - chaos 0-3 normal
   - chaos 4-6 slight glitches
   - chaos 7-9 stronger glitches
   - chaos 10 collapse effect

Use simple Phaser shapes or temporary sprites if real art is not available.
Do not add copyrighted assets.

Run:
npm run build
```

---

## Task 5 — Expand quest

Prompt for Codex:

```text
Expand the quest according to docs/GAME_DESIGN.md.

Add:
1. Toxic Dimension scene.
2. Citadel scene.
3. Optional path through Toxic Dimension.
4. Optional Council intervention if chaos >= 7.
5. Secret Jerry ending.
6. Meeseeks ending.
7. Ideal ending conditions.

Keep all logic data-driven.
Add validation so all scene next IDs point to existing scenes or endings.

Run:
npm run build
```

---

## Task 6 — Polish UI

Prompt for Codex:

```text
Improve UI and player feedback.

Add:
1. Inventory item descriptions on hover/click.
2. Last action log.
3. Better dialogue box styling.
4. Chaos meter animation.
5. Scene title transitions.
6. Ending unlock list.
7. Settings menu with sound on/off placeholder.

Run:
npm run build
```

---

## Task 7 — Final asset replacement plan

Prompt for Codex:

```text
Create docs/ASSET_LIST.md.

List every needed asset:
- backgrounds
- character sprites
- character animation states
- items
- UI icons
- sound effects
- music loops

For each asset include:
- file path
- description
- size suggestion
- animation states if needed
- whether it is required for MVP or final version

Do not add copyrighted assets.
```

---

## Manual checklist after every Codex task

Check:

1. Does `npm run build` pass?
2. Does the game open locally?
3. Can the player start a new game?
4. Can the player reach at least one ending?
5. Does inventory update correctly?
6. Does chaos update correctly?
7. Are there any broken scene transitions?
8. Did Codex avoid copyrighted assets?
