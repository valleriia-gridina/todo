import { useState } from "react";

type TProps = {
  onAddNewItem: (value: string) => void;
};

const NewItem = ({ onAddNewItem }: TProps) => {
  const [value, setValue] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        onAddNewItem(value);
        setValue("");
      }}
    >
      <input type="text" onChange={handleInputChange} value={value} />
      <button className="btn" type="submit" disabled={!value}>
        Add new item
      </button>
    </form>
  );
};

export default NewItem;
