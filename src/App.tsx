import { useState } from 'react';
import { questCharacters } from './game/data/characters';
import { questEndings } from './game/data/endings';
import { questScenes } from './game/data/scenes';
import { initialGameState } from './game/state/initialState';
import { applyChoiceToState } from './game/systems/gameStateReducer';
import type { QuestChoice } from './game/types/quest';
import type { GameState } from './game/types/gameState';
import { ChaosMeter } from './ui/ChaosMeter';
import { DialogueBox } from './ui/DialogueBox';
import { InventoryBar } from './ui/InventoryBar';
import { PhaserCanvas } from './ui/PhaserCanvas';
import './styles.css';

function App() {
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [latestResponse, setLatestResponse] = useState<string>();
  const currentScene = questScenes[gameState.currentScene];
  const currentEnding = gameState.currentEnding ? questEndings[gameState.currentEnding] : undefined;

  const handleChoice = (choice: QuestChoice) => {
    setGameState((currentState) => applyChoiceToState(currentState, choice));
    setLatestResponse(choice.nextScene ? undefined : choice.response);
  };

  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Prototype Quest</p>
          <h1>Rik and Morty Kwest</h1>
        </div>
        <ChaosMeter chaos={gameState.chaos} />
      </header>

      <section className="game-layout">
        <PhaserCanvas />
        <aside className="side-panel">
          <div className="panel scene-card">
            <span>Current Scene</span>
            <strong>{currentScene.title}</strong>
            <small>{currentScene.location}</small>
            <small>Background: {currentScene.background}</small>
          </div>
          <div className="panel cast-card">
            <h2>Scene Cast</h2>
            {currentScene.characters.map((characterId) => (
              <span className="cast-pill" key={characterId} title={questCharacters[characterId].role}>
                {questCharacters[characterId].name}
              </span>
            ))}
          </div>
          <InventoryBar items={gameState.inventory} />
          <div className="panel relationship-card">
            <h2>Relationships</h2>
            {Object.entries(gameState.relationships).map(([id, score]) => (
              <div className="relationship-row" key={id}>
                <span>{questCharacters[id as keyof typeof questCharacters].name}</span>
                <strong>{score}</strong>
              </div>
            ))}
          </div>
        </aside>
      </section>

      {currentEnding ? (
        <section className={`panel ending-card ending-${currentEnding.tone}`} aria-label="Ending">
          <p className="speaker">Ending Unlocked</p>
          <h2>{currentEnding.title}</h2>
          <p className="dialogue-text">{latestResponse}</p>
          <p>{currentEnding.description}</p>
        </section>
      ) : (
        <DialogueBox scene={currentScene} gameState={gameState} latestResponse={latestResponse} onChoose={handleChoice} />
      )}
    </main>
  );
}

export default App;
