type TProps = {
  item: { name: string; isChecked: boolean; id: number };
  onToggleCheck: (id: number) => void;
  onDelete: (id: number) => void;
};

const Item = ({ item, onToggleCheck, onDelete }: TProps) => {
  const { name, isChecked, id } = item;

  const toggleCheck = () => {
    onToggleCheck(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li className="listItem">
      <label>
        <button className="checkBtn" onClick={toggleCheck}>
          {isChecked ? "done" : "to do"}
        </button>
        <span>{name}</span>
        <button className="deleteBtn" onClick={handleDelete}>
          delete
        </button>
      </label>
    </li>
  );
};

export default Item;
