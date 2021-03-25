import React, { useEffect, useState } from "react";

const Note = ({ note }) => {
  return <li>{note.content}</li>;
};

const Notes = (props) => {
  const [notas, setNotas] = useState([]);
  const [nuevaNota, setNuevaNota] = useState("");
  const [important, setImportant] = useState(false);

  const addNote = (e) => {
    e.preventDefault();
    const noteObject = {
      content: nuevaNota,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notas.length + 1
    };

    setNotas([...notas, noteObject]);
    setNuevaNota("");
  };

  useEffect(() => {
    console.log("Notas", notas);
  }, [notas]);

  const handleNoteChange = ({ target }) => {
    setNuevaNota(target.value);
  };

  const handleShowNotes = () => {
    setImportant(!important);
  };

  const notesToShow = important
    ? notas.filter((note) => note.important === true)
    : notas;

  return (
    <div>
      <h1>Notas</h1>
      <button onClick={handleShowNotes}>Mostrar importante</button>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input onChange={handleNoteChange} value={nuevaNota} />
        <button type="submit">Guardar nota</button>
      </form>
    </div>
  );
};

export default Notes;
