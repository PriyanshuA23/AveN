import { useState } from "react";
import { saveNotes } from "../../actions/save_action";
import "./CreateNotes.css";

const CreateNotes = () => {
  const [title, setTitle] = useState("Untitled");
  const [content, setContent] = useState("");
  const [isBtnEnable, setEnableBtn] = useState(false);

  return (
    <div id="notes-area">
      <input
        id="title"
        defaultValue="Untitled"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setEnableBtn(true);
        }}
      />
      <div
        id="content"
        content-placeholder="Start writing from here ....."
        contentEditable="true"
        onInput={(e) => {
          setContent(e.currentTarget.textContent);
          setEnableBtn(true);
        }}
      ></div>
      {isBtnEnable && (
        <button
          onClick={() => {
            saveNotes(title, content);
            setEnableBtn(false);
          }}
        >
          save
        </button>
      )}
    </div>
  );
};

export default CreateNotes;
