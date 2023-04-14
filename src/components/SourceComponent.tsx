import { SourceInstance } from "../types";

const SourceComponent = ({ source }: { source: SourceInstance }) => {
  const color = source.getColor();
  return (
    <div
      className="source"
      title={`${color[0]},${color[1]},${color[2]}`}
      style={{
        backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})`,
      }}
    ></div>
  );
};

export default SourceComponent;
