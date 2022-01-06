import React, { useState, useEffect } from "react";

function EffectHookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);
  }, []);

  return <div>
      Use effect mouse position X - {x} Y - {y}
  </div>;
}

export default EffectHookMouse;
