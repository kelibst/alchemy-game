import { IAction } from "../context/sourcContext";
import produce from "immer";

export interface IinitialState {
  totalMoves: number;
  sourceMove: number;
  source: number[][][];
  tiles: number[][][];
}

const tilesArr = Array.from({ length: 4 }, () => new Array(10).fill([0, 0, 0]));

const sourceArr: number[][][] = Array.from({ length: 4 }, (v, i) => {
  if (i % 2 !== 0) {
    return new Array(4).fill([0, 0, 0]);
  } else {
    return new Array(10).fill([0, 0, 0]);
  }
});

export const initialState: IinitialState = {
  totalMoves: 8,
  sourceMove: 0,
  source: sourceArr,
  tiles: tilesArr,
};

export const generateMixColor = (tiles, x, colIndex, type, pos) => {
  if(type === "height") {
     let r1 = tiles[x-1] && tiles[x-1][colIndex] ? tiles[x-1][colIndex][0] : 0;
          let r2 = tiles[x+1] && tiles[x+1][colIndex] ? tiles[x+1][colIndex][0] : 0;
          let r3 = tiles[x] && tiles[x][colIndex+1] ? tiles[x][colIndex+1][0] : 0;
          let r4 = tiles[x] && tiles[x][colIndex-1] ? tiles[x][colIndex-1][0] : 0;

          let alr = r1 + r2 + r3 + r4;

          let g1 = tiles[x-1] && tiles[x-1][colIndex] ? tiles[x-1][colIndex][1] : 0;
          let g2 = tiles[x+1] && tiles[x+1][colIndex] ? tiles[x+1][colIndex][1] : 0;
          let g3 = tiles[x] && tiles[x][colIndex+1] ? tiles[x][colIndex+1][1] : 0;
          let g4 = tiles[x] && tiles[x][colIndex-1] ? tiles[x][colIndex-1][1] : 0;

          let alg = g1 + g2 + g3 + g4;

          let b1 = tiles[x-1] && tiles[x-1][colIndex] ? tiles[x-1][colIndex][2] : 0;
          let b2 = tiles[x+1] && tiles[x+1][colIndex] ? tiles[x+1][colIndex][2] : 0;
          let b3 = tiles[x] && tiles[x][colIndex+1] ? tiles[x][colIndex+1][2] : 0;
          let b4 = tiles[x] && tiles[x][colIndex-1] ? tiles[x][colIndex-1][2] : 0;

          let alb =  b1 + b2 + b3 + b4;

          let f = 255/(Math.max(alr, alg, alb, 255))
          let result = [alr*f, alg*f, alb*f]
          return result;
  }
  if(type === "width") {
    let r1 = tiles[colIndex-1] && tiles[colIndex-1][x] ? tiles[colIndex-1][x][0] : 0;
let r2 = tiles[colIndex+1] && tiles[colIndex+1][x] ? tiles[colIndex+1][x][0] : 0;
let r3 = tiles[colIndex] && tiles[colIndex][x+1] ? tiles[colIndex][x+1][0] : 0;
let r4 = tiles[colIndex] && tiles[colIndex][x-1] ? tiles[colIndex][x-1][0] : 0;

let alr = r1 + r2 + r3 + r4;

let g1 = tiles[colIndex-1] && tiles[colIndex-1][x] ? tiles[colIndex-1][x][1] : 0;
let g2 = tiles[colIndex+1] && tiles[colIndex+1][x] ? tiles[colIndex+1][x][1] : 0;
let g3 = tiles[colIndex] && tiles[colIndex][x+1] ? tiles[colIndex][x+1][1] : 0;
let g4 = tiles[colIndex] && tiles[colIndex][x-1] ? tiles[colIndex][x-1][1] : 0;

let alg = g1 + g2 + g3 + g4;

let b1 = tiles[colIndex-1] && tiles[colIndex-1][x] ? tiles[colIndex-1][x][2] : 0;
let b2 = tiles[colIndex+1] && tiles[colIndex+1][x] ? tiles[colIndex+1][x][2] : 0;
let b3 = tiles[colIndex] && tiles[colIndex][x+1] ? tiles[colIndex][x+1][2] : 0;
let b4 = tiles[colIndex] && tiles[colIndex][x-1] ? tiles[colIndex][x-1][2] : 0;

let alb =  b1 + b2 + b3 + b4;

let f = 255/(Math.max(alr, alg, alb, 255));
let result = [alr*f, alg*f, alb*f];
return result;

  }

  if(type === '-height') {
    let r1 = tiles[Math.abs(x-pos)-1] && tiles[Math.abs(x-pos)-1][colIndex] ? tiles[Math.abs(x-pos)-1][colIndex][0] : 0;
let r2 = tiles[Math.abs(x-pos)+1] && tiles[Math.abs(x-pos)+1][colIndex] ? tiles[Math.abs(x-pos)+1][colIndex][0] : 0;
let r3 = tiles[Math.abs(x-pos)] && tiles[Math.abs(x-pos)][colIndex+1] ? tiles[Math.abs(x-pos)][colIndex+1][0] : 0;
let r4 = tiles[Math.abs(x-pos)] && tiles[Math.abs(x-pos)][colIndex-1] ? tiles[Math.abs(x-pos)][colIndex-1][0] : 0;

let alr = r1 + r2 + r3 + r4;

let g1 = tiles[Math.abs(x-pos)-1] && tiles[Math.abs(x-pos)-1][colIndex] ? tiles[Math.abs(x-pos)-1][colIndex][1] : 0;
let g2 = tiles[Math.abs(x-pos)+1] && tiles[Math.abs(x-pos)+1][colIndex] ? tiles[Math.abs(x-pos)+1][colIndex][1] : 0;
let g3 = tiles[Math.abs(x-pos)] && tiles[Math.abs(x-pos)][colIndex+1] ? tiles[Math.abs(x-pos)][colIndex+1][1] : 0;
let g4 = tiles[Math.abs(x-pos)] && tiles[Math.abs(x-pos)][colIndex-1] ? tiles[Math.abs(x-pos)][colIndex-1][1] : 0;

let alg = g1 + g2 + g3 + g4;

let b1 = tiles[Math.abs(x-pos)-1] && tiles[Math.abs(x-pos)-1][colIndex] ? tiles[Math.abs(x-pos)-1][colIndex][2] : 0;
let b2 = tiles[Math.abs(x-pos)+1] && tiles[Math.abs(x-pos)+1][colIndex] ? tiles[Math.abs(x-pos)+1][colIndex][2] : 0;
let b3 = tiles[Math.abs(x-pos)] && tiles[Math.abs(x-pos)][colIndex+1] ? tiles[Math.abs(x-pos)][colIndex+1][2] : 0;
let b4 = tiles[Math.abs(x-pos)] && tiles[Math.abs(x-pos)][colIndex-1] ? tiles[Math.abs(x-pos)][colIndex-1][2] : 0;

let alb = b1 + b2 + b3 + b4;

let f = 255/(Math.max(alr, alg, alb, 255))
let result = [alr*f, alg*f, alb*f]
return result;

  }

  if(type === '-width') {
    let pos = x >= 0 ? 0 : tiles.length - 1;
  let r1 = tiles[colIndex][Math.abs(x-pos)-1] ? tiles[colIndex][Math.abs(x-pos)-1][0] : 0;
  let r2 = tiles[colIndex][Math.abs(x-pos)+1] ? tiles[colIndex][Math.abs(x-pos)+1][0] : 0;
  let r3 = tiles[colIndex+1] && tiles[colIndex+1][Math.abs(x-pos)] ? tiles[colIndex+1][Math.abs(x-pos)][0] : 0;
  let r4 = tiles[colIndex-1] && tiles[colIndex-1][Math.abs(x-pos)] ? tiles[colIndex-1][Math.abs(x-pos)][0] : 0;

  let alr = r1 + r2 + r3 + r4;

  let g1 = tiles[colIndex][Math.abs(x-pos)-1] ? tiles[colIndex][Math.abs(x-pos)-1][1] : 0;
  let g2 = tiles[colIndex][Math.abs(x-pos)+1] ? tiles[colIndex][Math.abs(x-pos)+1][1] : 0;
  let g3 = tiles[colIndex+1] && tiles[colIndex+1][Math.abs(x-pos)] ? tiles[colIndex+1][Math.abs(x-pos)][1] : 0;
  let g4 = tiles[colIndex-1] && tiles[colIndex-1][Math.abs(x-pos)] ? tiles[colIndex-1][Math.abs(x-pos)][1] : 0;

  let alg = g1 + g2 + g3 + g4;

  let b1 = tiles[colIndex][Math.abs(x-pos)-1] ? tiles[colIndex][Math.abs(x-pos)-1][2] : 0;
  let b2 = tiles[colIndex][Math.abs(x-pos)+1] ? tiles[colIndex][Math.abs(x-pos)+1][2] : 0;
  let b3 = tiles[colIndex+1] && tiles[colIndex+1][Math.abs(x-pos)] ? tiles[colIndex+1][Math.abs(x-pos)][2] : 0;
  let b4 = tiles[colIndex-1] && tiles[colIndex-1][Math.abs(x-pos)] ? tiles[colIndex-1][Math.abs(x-pos)][2] : 0;

  let alb =  b1 + b2 + b3 + b4;

  let f = 255/(Math.max(alr, alg, alb, 255))
  let result = [alr*f, alg*f, alb*f]
  return result;

  }
 return [0,0,0]
}

const colors = [
  [255, 0, 0],
  [0, 255, 0],
  [0, 0, 255],
  [0, 0, 0],
];

export const generateColor = (pos: number, dir: number, sourceMove: number) => {
  const diff = (pos + 1 - dir) / (pos + 1);
  const res = Math.round(255 * diff);
  return colors[sourceMove].map((c, i) => (i === sourceMove ? res : c));
};

const sourceReducer = (state: IinitialState, action: IAction) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case "setTotalMoves":
        draftState.totalMoves = action.payload;
        break;
      case "setSourceMoves":
        draftState.sourceMove = action.payload;
        break;
      case "updateSourceColor": {
        const { sourceRowIndex, sourceColIndex, newColor } = action.payload;
        draftState.source[sourceRowIndex][sourceColIndex] = newColor;
        break;
      }
      case "updateTilesColor": {
        const { pos, rowIndex, colIndex, type } = action.payload;
        let tilesDir = 0;
        for (let x = 0; x < pos; x++) {
          const newColor = generateColor(pos, tilesDir + 1, state.sourceMove);
          
          
          console.log(newColor, 'color', x, rowIndex, colIndex)
          if (type === "height") {
            const newColors = generateMixColor(draftState.tiles, x,colIndex, type, pos)
            const sum = draftState.tiles[x][colIndex].reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            draftState.tiles[x][colIndex] = sum < 1 ? newColor : newColors;
          } else if (type === "width") {
            const newColors = generateMixColor(draftState.tiles, x,colIndex, type, pos)
            const sum = draftState.tiles[colIndex][x].reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            draftState.tiles[colIndex][x] =  sum < 1 ? newColor : newColors;
          } else if (type === "-height") {
            const newColors = generateMixColor(draftState.tiles, x,colIndex, type, pos)
            const sum = draftState.tiles[Math.abs(x-pos)][colIndex].reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            draftState.tiles[Math.abs(x-pos)][colIndex] = sum < 1 ? newColor : newColors;
          } else if (type === "-width") {
            const newColors = generateMixColor(draftState.tiles, x,colIndex, type, pos)
            const sum = draftState.tiles[colIndex][Math.abs(x-pos)].reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            draftState.tiles[colIndex][Math.abs(x-pos)] =  sum < 1 ? newColor : newColors;
          }
          tilesDir++;
        }
        break;
      }
      default:
        break;
    }
  });
};

export default sourceReducer;