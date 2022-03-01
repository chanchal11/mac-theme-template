import "./style.css";

export default function TitleBar({ icon, color }) {
  return (
    <div className="titleBar" style={{ backgroundColor: color }}>
      {icon}
    </div>
  );
}
