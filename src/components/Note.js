import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/*this is our note card component
here am using id,text,date,handleDeleteNote as props which have been defined in App.js*/
function Note({ id, text, date, handleDelete }) {
  return (
    <div className="note">
      {/* This part will contain the main note's text part */}

      <span>{text}</span>
      <div className="note-footer">
        {/* it will store date on which the user is going to create the note*/}
        <small>{date}</small>
        {/* this if for deleting the mote using each note's unique id as parameter so we have passed handleDeleteNote function as it's onClick event */}

        <MdDeleteForever
          onClick={() => handleDelete(id)}
          className="delete-icon "
          size="1.3rem"
        />
      </div>
    </div>
  );
}
export default Note;
