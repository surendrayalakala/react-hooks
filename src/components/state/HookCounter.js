import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <label>State Hook Demo</label>
      <div>
        <button onClick={incrementCount}>Click {count}</button>
      </div>
    </div>
  );
}

export default HookCounter;
