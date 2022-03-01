import TitleBar from "../TitleBar";
import "./style.css";

export default function Header() {
  return (
    <div className="header">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <TitleBar icon={""} color="yellow" />
        <TitleBar icon={""} color="green" />
        <TitleBar icon={""} color="red" />
        <span className="title-name bold">{"Terminal"}</span>
        <span className="title-address">~/AndroidSdk/Programs/</span>
      </div>
    </div>
  );
}
