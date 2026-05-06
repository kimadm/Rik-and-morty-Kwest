# AGENTS.md

## Project

This is a browser-based animated quest game inspired by absurd sci-fi animated comedy.

The game should feel like a full point-and-click / visual novel quest with:

- animated characters;
- clickable scenes;
- dialogue choices;
- inventory;
- chaos meter;
- flags and relationships;
- multiple endings;
- save/load.

## Tech stack

Use:

- Vite
- React
- TypeScript
- Phaser 3

React should handle UI panels, menus, dialogue box, inventory and state display.
Phaser should handle game canvas, scenes, backgrounds, sprites, placeholder animations, portals and visual effects.

## Development rules

- Keep game logic data-driven.
- Store scenes, choices, items, flags, relationships and endings in separate data files.
- Do not hardcode all story logic inside React components.
- Use TypeScript types for scenes, choices, items and endings.
- Use placeholder assets first.
- Use simple animated shapes or temporary sprites until final art is added.
- Do not include copyrighted images, audio, logos or ripped assets.
- Keep the first version playable from start to at least one ending.
- Avoid overengineering before MVP is playable.

## Required checks

Every coding task should finish with:

```bash
npm run build
```

If tests or lint scripts are later added, run them too.

## MVP scope

Implement first:

1. Main menu.
2. Garage scene.
3. Black market scene.
4. Living instructions scene.
5. Bureaucracy scene.
6. Final garage scene.
7. Inventory system.
8. Chaos meter.
9. Dialogue choices.
10. Four endings.
11. LocalStorage save/load.
12. Placeholder character and portal animations.

## Suggested folder structure

```text
src/
  game/
    scenes/
    data/
    state/
    systems/
    types/
  ui/
  App.tsx
  main.tsx
public/
  assets/
    characters/
    backgrounds/
    items/
    sounds/
docs/
  GAME_DESIGN.md
  CODEX_TASKS.md
```

## Legal / assets

For now use placeholder/parody assets only.
Do not include copyrighted images, audio, logos or ripped assets.

Recognizable characters may be referenced in the design document for a private fan prototype, but the code and assets should make it easy to replace them with original parody equivalents later.

## Implementation priority

1. Working game loop.
2. Data-driven scenes.
3. Inventory and chaos logic.
4. Endings.
5. Save/load.
6. Placeholder animations.
7. Better visuals.
8. Final art and sound.
