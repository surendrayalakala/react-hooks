import React, { useState } from "react";

function HookCounterFour() {
  const [state, setState] = useState([]);

  const addNumber = () => {
      setState([...state, {
          id: state.length,
          value: Math.floor(Math.random() * 10) + 1
      }])
  };

  return (
    <div>
      <button onClick={addNumber}>Add a number</button>
      <ul>
        {state.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default HookCounterFour;
