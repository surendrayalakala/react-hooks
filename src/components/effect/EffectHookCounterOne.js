import React, { useEffect, useState } from "react";

function EffectHookCounterOne() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
     document.title = `You clciked ${count} times`
  })

  return (
    <div>
      <label>Effect Hook Demo</label>
      <div>
        <button onClick={incrementCount}>Click {count} times</button>
      </div>
    </div>
  );
}

export default EffectHookCounterOne;
