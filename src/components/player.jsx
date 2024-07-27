import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleSaveClick() {
    setIsEditing(false);
  }

  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{name}</span>
        ) : (
          <input type="text" />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      {!isEditing ? (
        <button onClick={handleEditClick}>Edit</button>
      ) : (
        <button onClick={handleSaveClick}>Save</button>
      )}
    </li>
  );
}
