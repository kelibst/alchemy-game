import { TileInstance } from "../../types";

const TileComponent = ({ tile }: { tile: TileInstance }) => {
  const color = tile.getColor();
  return (
    <div
      title={`${color[0]}, ${color[1]}, ${color[2]}`}
      className="tile"
      style={{
        backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
      }}
    />
  );
};

export default TileComponent;
