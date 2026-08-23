import "./WelcomeScreen.css";

const WelcomeScreen = () => {
  return (
    <div id="welcome-area">
      <h1>Welcome to Note taking App</h1>
      <div className="welcome-instruction">Select a note from side bar</div>
      <div className="welcome-instruction">Or</div>
      <div className="welcome-instruction">Click "New Note" to create a note</div>
    </div>
  );
};

export default WelcomeScreen;
