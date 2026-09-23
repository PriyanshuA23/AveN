import "./SideBar.css";

type Notes = string[];

const SideBar = ({
  setIsWelcomeState,
  notesTitle,
}: {
  setIsWelcomeState: any;
  notesTitle: Notes;
}) => {
  return (
    <div id="side-bar">
      <button onClick={() => setIsWelcomeState(false)}>+ New Note</button>
      {notesTitle.map((note) => (
        <div>{note}</div>
      ))}
    </div>
  );
};

export default SideBar;
