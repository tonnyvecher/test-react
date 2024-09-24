export default function TodoItem({
    onDelete,
    onComplete,
    item,
   }) {
    return (
      <div>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => onComplete(item)}
        />
        <span
   
          style={{
            textDecoration: item.completed
              ? "line-through"
              : "none",
          }}
        >
          {item.todo}
        </span>
        <button onClick={() => onDelete(item)}>
          Delete
        </button>
      </div>
    );
   }