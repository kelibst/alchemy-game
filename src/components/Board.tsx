import { FC, useState } from "react";
import Tile from "../classes/Tile";
import Source from "../classes/Source";
import SourceComponent from "./SourceComponent";
import TileComponent from "./TileComponent";
import { RGBTuple, SourceInstance, TileInstance } from "../types";

interface BoardProps {
  rows: number;
  cols: number;
  target: RGBTuple;
}

const Board: FC<BoardProps> = ({ rows, cols, target }) => {
  const [movesLeft, setmovesLeft] = useState(8);

  const tiles: TileInstance[] = [];
  const firstRow: SourceInstance[] = [];
  const lastRow: SourceInstance[] = [];
  const firstCol: SourceInstance[] = [];
  const lastCol: SourceInstance[] = [];

  const gridStyles = {
    display: "grid",
    gridTemplateRows: `repeat(${cols}, 1fr)`,
    gridTemplateColumns: `repeat(${rows}, 1fr)`,
    gap: "1px",
    backgroundColor: "#ccc",
  };

  const rowSourceStyles = {
    display: "grid",
    gridTemplateColumns: `repeat(${rows}, 1fr)`,
    gap: "1px",
  };

  const colSourceStyles = {
    display: "grid",
    gridTemplateRows: `repeat(${cols}, 1fr)`,
    gap: "1px",
  };

  for (let i = 1; i <= rows; i++) {
    firstRow.push(new Source(0, i));
    lastRow.push(new Source(rows + 1, i));

    for (let j = 1; j <= cols; j++) {
      tiles.push(new Tile(i, j));
    }
  }

  for (let i = 1; i <= cols; i++) {
    firstCol.push(new Source(i, 0));
    lastCol.push(new Source(i, cols + 1));
  }

  const displayTiles = tiles.map((tile) => (
    <TileComponent tile={tile} key={`${tile.row},${tile.col}`} />
  ));

  const displayFirstRow = firstRow.map((source) => (
    <SourceComponent source={source} key={`${source.row},${source.col}`} />
  ));
  const displayFirstCol = firstCol.map((source) => (
    <SourceComponent source={source} key={`${source.row},${source.col}`} />
  ));

  const displayLastRow = lastRow.map((source) => (
    <SourceComponent source={source} key={`${source.row},${source.col}`} />
  ));

  const displayLastCol = lastCol.map((source) => (
    <SourceComponent source={source} key={`${source.row},${source.col}`} />
  ));

  // const change

  return (
    // [x]source
    // [x]tiles
    <div className="container">
      <div style={rowSourceStyles}>{displayFirstRow}</div>

      <div className="inner_container">
        <div style={colSourceStyles}>{displayFirstCol}</div>
        <div style={gridStyles}>{displayTiles}</div>
        <div style={colSourceStyles}>{displayLastCol}</div>
      </div>

      <div style={rowSourceStyles}>{displayFirstRow}</div>
    </div>
  );
};

export default Board;
