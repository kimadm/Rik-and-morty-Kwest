import { useState } from 'react';
import { garageDialogue } from './game/data/garageDialogue';
import { initialGameState } from './game/state/initialState';
import { applyChoiceToState } from './game/systems/gameStateReducer';
import type { DialogueChoice } from './game/types/dialogue';
import type { GameState } from './game/types/gameState';
import { ChaosMeter } from './ui/ChaosMeter';
import { DialogueBox } from './ui/DialogueBox';
import { InventoryBar } from './ui/InventoryBar';
import { PhaserCanvas } from './ui/PhaserCanvas';
import './styles.css';

function App() {
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [latestResponse, setLatestResponse] = useState<string>();

  const handleChoice = (choice: DialogueChoice) => {
    setGameState((currentState) => applyChoiceToState(currentState, choice));
    setLatestResponse(choice.response);
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
            <strong>{gameState.currentScene}</strong>
          </div>
          <InventoryBar items={gameState.inventory} />
          <div className="panel relationship-card">
            <h2>Relationships</h2>
            {Object.entries(gameState.relationships).map(([name, score]) => (
              <div className="relationship-row" key={name}>
                <span>{name}</span>
                <strong>{score}</strong>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <DialogueBox dialogue={garageDialogue} latestResponse={latestResponse} onChoose={handleChoice} />
    </main>
  );
}

export default App;
