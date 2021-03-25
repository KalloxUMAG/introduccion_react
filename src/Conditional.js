import React from "react";

export const Conditional = ({ totalMessages }) => {
  return (
    <>
      <h1>Condicional</h1>
      {totalMessages > 0 && <h2>Tu tienes mensajes</h2>}
      <h2>Tu {totalMessages > 0 ? "" : "no"} tienes mensajes</h2>
    </>
  );
};
