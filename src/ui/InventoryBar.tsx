import type { InventoryItemId } from '../game/types/gameState';

interface InventoryBarProps {
  items: InventoryItemId[];
}

const itemLabels: Record<InventoryItemId, string> = {
  'broken-gadget': 'Broken Gadget',
  'portal-spark': 'Portal Spark',
};

export function InventoryBar({ items }: InventoryBarProps) {
  return (
    <section className="panel inventory-bar" aria-label="Inventory">
      <h2>Inventory</h2>
      <div className="inventory-items">
        {items.length === 0 ? (
          <span className="empty-slot">Empty pockets</span>
        ) : (
          items.map((item) => (
            <span className="inventory-item" key={item}>
              {itemLabels[item]}
            </span>
          ))
        )}
      </div>
    </section>
  );
}
