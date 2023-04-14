import React, { useState } from "react";
import "./App.css";
import { AppContext } from "./context/sourcContext";
import Display from "./components/Display";

const App: React.FC = () => {
const [totalMoves, setTotalMoves] = useState(8)
const [sourceMove, setSourceMoves] = useState(0)
  return (
    <AppContext.Provider value={{ totalMoves, setTotalMoves, sourceMove, setSourceMoves }}>
      <Display {...{ width: 10, height: 4}} />
    </AppContext.Provider>
  );
};

export default App;

