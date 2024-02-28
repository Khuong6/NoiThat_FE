import { useState } from "react";
import reactLogo from "/src/assets/react.svg";
import viteLogo from "/vite.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import VideoHoverPlay from "../components/VideoHoverPlay";
import React from "react";
import "daisyui/dist/full.css";

export const Test = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Item 1", checked: false },
    { id: 2, text: "Item 2", checked: false },
    { id: 3, text: "Item 3", checked: false },
  ]);

  const handleCheckboxChange = (itemId) => {
    setItems(
      items.map((item) => {
        if (item.id === itemId) {
          return { ...item, checked: !item.checked };
        }
        return item;
      })
    );
  };

  const handleDeleteClick = () => {
    setItems(items.filter((item) => !item.checked));
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(item.id)}
            />
            <span
              style={{ textDecoration: item.checked ? "line-through" : "none" }}
            >
              {item.text}
            </span>
          </li>
        ))}
      </ul>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default Test;
