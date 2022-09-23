export default function ProductColor(props) {
  const { color } = props;

  const { hex_value, colour_name } = color;

  const divStyle = {
    backgroundColor: hex_value,
    borderColor: hex_value,
  };
  return <div title={colour_name} style={divStyle} className="color"></div>;
}
