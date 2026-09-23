import { useEffect, useState } from "react";
import "./App.css";
import CreateNotes from "./components/create_note/CreateNotes.tsx";
import SideBar from "./components/side_bar/SideBar.tsx";
import WelcomeScreen from "./components/welcome_screen/WelcomeScreen.tsx";

const sendGetReq = async (url: string) => {
  const res = await fetch(`http://localhost:8080/${url}`);
  console.log("response is: ", res);
  return res.json();
};

const App = () => {
  const [isWelcomeState, setIsWelcomeState] = useState(true);
  const [notesTitle, setNotesTitle] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const notes = await sendGetReq("notes");
      setNotesTitle(notes);
    };

    getNotes();
  }, []);


  return (
    <div id="editor">
      <SideBar setIsWelcomeState={setIsWelcomeState} notesTitle={notesTitle} />
      {isWelcomeState ? <WelcomeScreen /> : <CreateNotes />}
    </div>
  );
};

export default App;
