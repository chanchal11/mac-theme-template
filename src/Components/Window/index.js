import Content from "../Content";
import Header from "../Header";
import "./style.css";

export default function Window() {
  return (
    <div draggable="true" className="window">
      <Header />
      <Content />
    </div>
  );
}
