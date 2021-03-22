import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClickAdd = () => {
    setCount(count + 1);
  };

  const handleClickSubtract = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button className="btn" onClick={handleClickAdd}>
        +1
      </button>
      <h2>Count value: {count}</h2>
      <button className="btn" onClick={handleClickSubtract}>
        -1
      </button>
    </div>
  );
};
