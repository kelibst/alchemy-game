import React, { useReducer } from "react";
import "./App.css";
import { AppContext } from "./context/sourcContext";
import Display from "./components/Display";
import sourceReducer, { initialState } from "./reducers/movesReducer";

const App: React.FC = () => {
  const [state, dispatch] = useReducer(sourceReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        totalMoves: state.totalMoves,
        sourceMove: state.sourceMove,
        source: state.source,
        tiles: state.tiles,
        setTotalMoves: (totalMoves: number) =>
          dispatch({ type: "setTotalMoves", payload: totalMoves }),
        setSourceMoves: (sourceMove: number) =>
          dispatch({ type: "setSourceMoves", payload: sourceMove }),
        updateSourceColor: (sourceRowIndex: number, sourceColIndex: number, newColor: number[]) =>
          dispatch({ type: "updateSourceColor", payload: { sourceRowIndex, sourceColIndex, newColor } }),
        updateTilesColor: (pos: number, rowIndex: number, colIndex: number, type: "width" | "height") =>
          dispatch({ type: "updateTilesColor", payload: { pos, rowIndex, colIndex, type } }),
      }}
    >
      <Display {...{ width: 10, height: 4 }} />
    </AppContext.Provider>
  );
};

export default App;
