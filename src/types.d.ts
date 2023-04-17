import Tile from "./src/classes/Tile";
import Source from "./src/classes/Source";

type TileInstance = Tile;

type SourceInstance = Source;

type RGBTuple = [number, number, number];


export interface SourceProps {
    color: string;
    style: any;
    onClick: () => void;
}