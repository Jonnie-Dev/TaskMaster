const Item = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.completed}
        checked={item.completed}
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
      <div className="eachItem">
        <h3 style={item.completed ? { textDecoration: "line-through" } : {}}>
          {item.title}
        </h3>
        <p style={item.completed ? { textDecoration: "line-through" } : {}}>
          {item.description}
        </p>
      </div>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
