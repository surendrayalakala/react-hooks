import React, { useEffect, useState } from "react";

function EffectHookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const incrementCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
     document.title = `You clciked ${count} times`
  }, [count])

  return (
    <div>
      <label>Effect Hook Demo</label>
      <div>
          <input type={'text'} value={name} onChange={e => setName(e.target.value)} />
        <button onClick={incrementCount}>Click {count} times</button>
      </div>
    </div>
  );
}

export default EffectHookCounterOne;
