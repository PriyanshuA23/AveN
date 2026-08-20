import { useState } from "react";
import { saveNotes } from "../actions/save_action";
import "./CreateNotes.css";

const CreateNotes = () => {
  const [title, setTitle] = useState("Untitled");
  const [content, setContent] = useState("");

  return (
    <div id="notes-area">
      <input
        id="title"
        defaultValue="Untitled"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div
        id="content"
        contentEditable="true"
        onInput={(e) => setContent(e.currentTarget.textContent)}
      ></div>
      <button onClick={() => saveNotes(title, content)}>save</button>
    </div>
  );
};

export default CreateNotes;
