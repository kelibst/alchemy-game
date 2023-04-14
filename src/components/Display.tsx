import React, { useState } from "react";
// import "./Game.css";

interface TileProps {
  color: string;
  onClick: () => void;
}

const Tile: React.FC<TileProps> = ({ color, onClick }) => {
  return <div className="tile" style={{ backgroundColor: color }} onClick={onClick} />;
};

interface SourceProps {
  color: string;
  style: any;
}

const Source: React.FC<SourceProps> = ({ color, style }) => {
  return <div className="source" style={{ backgroundColor: color, borderRadius: "50%" }} />;
};

interface GameProps {
  width: number;
  height: number;
}

const Game: React.FC<GameProps> = ({ width, height }) => {
  const [tiles, setTiles] = useState<string[][]>(
    new Array(height).fill(new Array(width).fill("rgb(0, 0, 0)"))
  );
  let sourceArr = [];
  for (let x = 1; x < 5; x += 1) {
    if (x % 2 !== 0) {
      sourceArr.push(new Array(width).fill("rgb(0, 0, 0)"))
    } else {
      sourceArr.push(new Array(height).fill("rgb(0, 0, 0)"))
    }
  }

  const [source, setSource] = useState<string[][]>(sourceArr)

  const handleTileClick = (rowIndex: number, colIndex: number) => {
    // Update the color of the clicked tile
    const newTiles = [...tiles];
    newTiles[rowIndex][colIndex] = "rgb(255, 255, 255)";
    setTiles(newTiles);
  };

  return (
    <div className="game">
      <div className="board">
        <div className="tile-board">
          <div className="flex justify-center">
            {source[0].map((row, ind) => <Source style={{ gridArea: "left" }} color={row} />)}
          </div>
          <div>
            {tiles.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <div className="flex justify-center">
                <Source color={source[1][rowIndex]} style={{ gridArea: "left" }}/>
              {row.map((color, colIndex) => (
                <Tile
                  key={`${rowIndex}-${colIndex}`}
                  color={color}
                  onClick={() => handleTileClick(rowIndex, colIndex)}
                />
              ))}
               <Source color={source[3][rowIndex]} style={{ gridArea: "left" }}/>
              </div>
            </React.Fragment>
          ))}
          </div>
          <div className="flex justify-center">
          {source[2].map((color, ind) => <Source style={{ gridArea: "left" }} color={color} />)}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
