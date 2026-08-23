import { useState } from "react";
import "./App.css";
import CreateNotes from "./components/create_note/CreateNotes.tsx";
import SideBar from "./components/side_bar/SideBar.tsx";
import WelcomeScreen from "./components/welcome_screen/WelcomeScreen.tsx";

function App() {
  const [isWelcomeState, setIsWelcomeState] = useState(true);

  return (
    <div id="editor">
      <SideBar setIsWelcomeState={setIsWelcomeState} />
      {isWelcomeState ? <WelcomeScreen /> : <CreateNotes />}
    </div>
  );
}

export default App;
