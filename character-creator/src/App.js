import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";

function Background() {
  return <div className="background" />;
}

function App() {
  return (
    <>
      <Background />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
