import "./style.css";

export default function AppIcon({ filePath }) {
  return (
    <div draggable="true" className="app-icon">
      <img src={filePath} />
    </div>
  );
}
