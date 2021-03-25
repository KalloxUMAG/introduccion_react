import React, { useState } from "react";

export const Conditional2 = ({ students }) => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Condicional 2</h1>
      {students <= 0 ? (
        <h2>No hay estudiantes</h2>
      ) : (
        <h2>Hay {students} estudiantes</h2>
      )}
    </>
  );
};
