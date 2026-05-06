import { questCharacters } from '../game/data/characters';
import { isChoiceAvailable } from '../game/systems/gameStateReducer';
import type { QuestChoice, QuestScene } from '../game/types/quest';
import type { GameState } from '../game/types/gameState';

interface DialogueBoxProps {
  scene: QuestScene;
  gameState: GameState;
  latestResponse?: string;
  onChoose: (choice: QuestChoice) => void;
}

export function DialogueBox({ scene, gameState, latestResponse, onChoose }: DialogueBoxProps) {
  const speaker = questCharacters[scene.dialogue.speaker];

  return (
    <section className="panel dialogue-box" aria-label="Dialogue">
      <p className="speaker">{speaker.name}</p>
      <p className="dialogue-text">{latestResponse ?? scene.dialogue.text}</p>
      <div className="choice-list">
        {scene.choices.map((choice) => {
          const available = isChoiceAvailable(gameState, choice);

          return (
            <button
              className="choice-button"
              disabled={!available || Boolean(gameState.currentEnding)}
              key={choice.id}
              type="button"
              onClick={() => onChoose(choice)}
            >
              {choice.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}
