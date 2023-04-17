interface SourceProps {
  style: React.CSSProperties;
  onClick: () => void;
}

const Source: React.FC<SourceProps> = ({ style, onClick }) => {
  return (
    <div 
      className="source" 
      style={{ borderRadius: "50%", ...style }} 
      onClick={onClick} 
    />
  );
};
export default Source