import { createContext } from "react";

export interface IAppContext {
    totalMoves: number;
    sourceMove: number;
    setTotalMoves: (number: number) => void;
    setSourceMoves: (number: number) => void;
  }
  

export const AppContext = createContext<IAppContext>({
  totalMoves: 8,
  sourceMove: 0,
  setTotalMoves:  () => {},
  setSourceMoves:  () => {}
});
