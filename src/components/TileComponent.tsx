interface TileProps {
  style: React.CSSProperties;
  onClick: () => void;
}

const Tile: React.FC<TileProps> = ({ style, onClick }) => {
  return (
    <div 
      className="tile" 
      style={{...style }} 
    />
  );
};
export default Tile