import React, { SetStateAction, useContext, useState } from "react";
import { AppContext, IAppContext } from "../context/sourcContext";
import Source from "./SourceComponent";
import Tile from "./TileComponent";
import { generateColor } from "../reducers/movesReducer";

const Game: React.FC<{ width: number; height: number }> = ({ width, height }) => {
  const { totalMoves, sourceMove, setTotalMoves, setSourceMoves, tiles, source, updateSourceColor, updateTilesColor } = useContext(
    AppContext
  ) as IAppContext;




  const sourceClicked = (rowIndex: number): string => {
    switch(rowIndex){
      case 0:
        return "Top";
      case 1: 
        return "Left";
      case 2: 
        return "Bottom";
      default:
        return "Right";
    }
  };


  const handleTileClick = (rowIndex: number, colIndex: number) => {
    
  };

  const handleSourceClick = (rowIndex: number, colIndex: number) => {
    const sourceDir = sourceClicked(rowIndex);
  
    if (sourceMove < 3) {
      switch (sourceDir) {
        case "Top":
           const newCol1 = generateColor(height, rowIndex, sourceMove);
          updateSourceColor( rowIndex, colIndex, newCol1);
          updateTilesColor(height, rowIndex, colIndex, "height");
          break;
        case "Left":
          const newCol2 = generateColor(width, rowIndex, sourceMove);
          updateSourceColor( rowIndex, colIndex, newCol2);
          updateTilesColor(width, rowIndex, colIndex, "width");
          break;
        case "Bottom":
          // TODO: Implement this case
          const newCol3 = generateColor(width, rowIndex, sourceMove);
          updateSourceColor( rowIndex, colIndex, newCol3);
          updateTilesColor(height-1, rowIndex, colIndex, "-height");
          break;
        case "Right":
          // TODO: Implement this case
          const newCol4 = generateColor(height, rowIndex, sourceMove);
          updateSourceColor( rowIndex, colIndex, newCol4);
          updateTilesColor(width-1, rowIndex, colIndex, "-width");
          break;
      }
      setSourceMoves(sourceMove + 1);
    }
  };
  
  
  return (
    <div className="game">
  <div className="board">
    <div className="tile-board">
      <div className="flex justify-center">
        {source[0].map((row, ind) => (
          <Source
            key={`source-top-${ind}`}
            style={{ backgroundColor: `rgb(${row[0]}, ${row[1]},${row[2]})`}}
            onClick={() => handleSourceClick(0, ind)}
          />
        ))}
      </div>
      <div>
        {tiles.map((row, rowIndex) => (
          <React.Fragment key={`row-${rowIndex}`}>
            <div className="flex justify-center">
              <Source
                style={{ backgroundColor: `rgb(${source[1][rowIndex][0]}, ${source[1][rowIndex][1]},${source[1][rowIndex][2]})`}}
                onClick={() => handleSourceClick(1, rowIndex)}
              />
              {row.map((colRow, colIndex) => (
                <Tile
                  key={`${rowIndex}-${colIndex}`}
                  style={{ backgroundColor: `rgb(${colRow[0]}, ${colRow[1]},${colRow[2]})`}}
                  onClick={() => handleTileClick(rowIndex, colIndex)}
                />
              ))}
              <Source
                style={{ backgroundColor: `rgb(${source[3][rowIndex][0]}, ${source[3][rowIndex][1]},${source[3][rowIndex][2]})`}}
                onClick={() => handleSourceClick(3, rowIndex)}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-center">
        {source[2].map((row, ind) => (
          <Source
            key={`source-bottom-${ind}`}
            style={{ backgroundColor: `rgb(${row[0]}, ${row[1]},${row[2]})`}}
            onClick={() => handleSourceClick(2, ind)}
          />
        ))}
      </div>
    </div>
  </div>
</div>
  );}

  export default Game
