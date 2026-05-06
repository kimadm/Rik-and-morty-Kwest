import type { DialogueChoice, DialogueNode } from '../game/types/dialogue';

interface DialogueBoxProps {
  dialogue: DialogueNode;
  latestResponse?: string;
  onChoose: (choice: DialogueChoice) => void;
}

export function DialogueBox({ dialogue, latestResponse, onChoose }: DialogueBoxProps) {
  return (
    <section className="panel dialogue-box" aria-label="Dialogue">
      <p className="speaker">{dialogue.speaker}</p>
      <p className="dialogue-text">{latestResponse ?? dialogue.text}</p>
      <div className="choice-list">
        {dialogue.choices.map((choice) => (
          <button className="choice-button" key={choice.id} type="button" onClick={() => onChoose(choice)}>
            {choice.label}
          </button>
        ))}
      </div>
    </section>
  );
}
