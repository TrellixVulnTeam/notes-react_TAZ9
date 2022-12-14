/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
{
  /*this component is for adding new note in our notes application*/
}
function AddNote({ handleAddNote }) {
  {
    /*this noteText is the value for adding Note input*/
  }
  const [noteText, setNoteText] = useState("");
  // here this is an limit for the note
  const charLimit = 10000;
  {
    /*this function is defined for the onChange event of out adding note input*/
  }
  const handleChange = (event) => {
    {
      /*with typing the character limit will change with the input text's length*/
    }
    if (charLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  {
    /*this is for saving the new note*/
  }
  const handelSaveClick = () => {
    {
      /*if there's no character in input , then we will not save the note*/
    }
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="note new">
      {/* the text area for our input */}
      <textarea
        cols="10"
        rows="8"
        placeholder="Type your note here..."
        onChange={handleChange}
        value={noteText}
      ></textarea>

      <div className="note-footer">
        <small>{charLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handelSaveClick}>
          save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
