import React, { useState, useEffect } from "react";
import "./index.css";
import Note from "./components/Note";
import Header from "./components/Header";
import AddNote from "./components/AddNote";
import Search from "./components/Search";
import NotesList from "./components/NotesList";


function App() {
  const [notes, setNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [searchNote, setSearchNote] = useState("");

  // show notes
  useEffect(() => {
    const getNotes = async () => {
      const getFromServer = await fetchNotes();
      setNotes(getFromServer);
    };

    getNotes();
  }, []);

  // fetch notes
  const fetchNotes = async () => {
    const res = await fetch("http://localhost:3300/notes");
    const data = await res.json();

    return data;
  };

  // add note
  const addNote = async (text) => {
    const date = new Date();
    var number = 0;
    const newNote = {
      id: number,
      text: text,
      time: date.toLocaleTimeString(),
      date: date.toLocaleDateString(),
    };

    /* add note to db */
    const res = await fetch("http://localhost:3300/notes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newNote),
    });

    const data = await res.json();

    setNotes([...NotesList, data.res]);
  };
  // this for deleting notes
  const deletingNote = async (id) => {
    const response = await fetch(`http://localhost:3300/notes/${id}`, {
      method: "DELETE",
    });
    //We should control the response status to decide if we will change the state or not.
    response.status === 200
      ? setNotes(notes.filter((note) => note.id !== id))
      : alert("Error Deleting This Note");
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <div>

        </div>
        <Search handleSearch={searchNote} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchNote)
          )}
          handleAddNote={addNote}
          handleDelete={deletingNote}
        />
      </div>

    </div>

  );
}

export default App;
