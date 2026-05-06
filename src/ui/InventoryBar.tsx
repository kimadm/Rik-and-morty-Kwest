import { questItems } from '../game/data/items';
import type { InventoryItemId } from '../game/types/quest';

interface InventoryBarProps {
  items: InventoryItemId[];
}

export function InventoryBar({ items }: InventoryBarProps) {
  return (
    <section className="panel inventory-bar" aria-label="Inventory">
      <h2>Inventory</h2>
      <div className="inventory-items">
        {items.length === 0 ? (
          <span className="empty-slot">Empty pockets</span>
        ) : (
          items.map((item) => (
            <span className="inventory-item" key={item} title={questItems[item].description}>
              {questItems[item].name}
            </span>
          ))
        )}
      </div>
    </section>
  );
}
