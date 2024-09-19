import { useEffect, useState } from "react";
import NewItem from "./components/NewItem/NewItem";
import Item from "./components/Item/Item";
import "./App.css";

const ITEMS_LOCAL_STORAGE_KEY = "items";

function App() {
  const localStorageItem = localStorage.getItem(ITEMS_LOCAL_STORAGE_KEY);

  const [items, setItems] = useState<
    {
      name: string;
      isChecked: boolean;
      id: number;
    }[]
  >(localStorageItem === null ? [] : JSON.parse(localStorageItem));

  const onAddNewItem = (value: string) => {
    const newItem = { name: value, isChecked: false, id: Date.now() };
    setItems([...items, newItem]);
  };

  // On component mount, set items to local storage
  useEffect(() => {
    // Save items to local storage
    localStorage.setItem(ITEMS_LOCAL_STORAGE_KEY, JSON.stringify(items));
    console.log("set", JSON.stringify(items));
  }, [items]);

  const onToggleCheck = (id: number) => {
    const newItems = items.map((item) =>
      id === item.id ? { ...item, isChecked: !item.isChecked } : item
    );
    setItems(newItems);
  };

  const onDelete = (id: number) => {
    const newItems = items.filter((item) => id !== item.id);
    setItems(newItems);
  };

  return (
    <div className="container">
      <NewItem onAddNewItem={onAddNewItem} />
      {items.length !== 0 ? (
        <ul className="list">
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              onToggleCheck={onToggleCheck}
              onDelete={onDelete}
            />
          ))}
        </ul>
      ) : (
        <p>no items here</p>
      )}
    </div>
  );
}

export default App;
