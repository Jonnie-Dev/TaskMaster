import { useState } from "react";
import Item from "./Item";

const PackingList = ({ item, onDeleteItem, onToggleItem, setNewItem }) => {
  const [sortBy, setSortBy] = useState("input");

  function handleSortBy(e) {
    setSortBy(e.target.value);
  }

  let sortedItems;
  if (sortBy === "input") sortedItems = item;
  if (sortBy === "description")
    sortedItems = [...item].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  if (sortBy === "completed") {
    sortedItems = [...item].sort((a, b) => a.completed - b.completed);
  }
  if (sortBy === "title") {
    sortedItems = [...item].sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select onChange={handleSortBy} value={sortBy}>
          <option value={"input"}>Sort by input order</option>
          <option value={"description"}>Sort by description</option>
          <option value={"title"}>Sort by title</option>
          <option value={"completed"}>Sort by completion status</option>
        </select>
        <button
          onClick={() => {
            const confirmed = window.confirm(
              "Are you sure you want to delete all items?"
            );
            confirmed &&
              (() => {
                setNewItem([]);
                localStorage.clear();
              })();
          }}
        >
          Clear list 🗑️
        </button>
      </div>
    </div>
  );
};

export default PackingList;
