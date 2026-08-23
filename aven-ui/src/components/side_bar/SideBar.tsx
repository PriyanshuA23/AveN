import "./SideBar.css";

const SideBar = ({ setIsWelcomeState }: any) => {
  const dataList = ["shopping", "fitness", "learning", "Personal Project"];
  return (
    <div id="side-bar">
      <button onClick={() => setIsWelcomeState(false)}>+ New Note</button>
      {dataList.map((note) => (
        <div>{note}</div>
      ))}
    </div>
  );
};

export default SideBar;
