import { createContext } from "react";

export interface IAppContext {
  totalMoves: number;
  sourceMove: number;
  setTotalMoves: (number: number) => void;
  setSourceMoves: (number: number) => void;
  source: number[][][];
  tiles: number[][][];
  updateSourceColor: (sourceRowIndex: number, sourceColIndex: number, newColor: number[]) => void;
  updateTilesColor: (pos: number, rowIndex: number, colIndex: number, type: "width" | "height") => void
}

export interface IAction {
  type: string;
  payload: any;
}

export const AppContext = createContext<IAppContext>({
  totalMoves: 8,
  sourceMove: 0,
  source: [],
  tiles: [],
  setTotalMoves: () => {},
  setSourceMoves: () => {},
  updateSourceColor: ()=>{},
  updateTilesColor: ()=> {}
});