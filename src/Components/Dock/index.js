import AppIcon from "../AppIcon";
import "./style.css";

export default function Dock() {
  return (
    <div className="dock-container">
      <div className="dock">
        <AppIcon filePath="https://media.macosicons.com/parse/files/macOSicons/d7b1f398d98df47d93c0b57c1d5d7a3d_low_res_Spotify_Light.png" />
        <AppIcon filePath="https://media.macosicons.com/parse/files/macOSicons/9bf402fbf341904db6f1a50ea1b985c5_low_res_GitHub_Desktop.png" />
        <AppIcon filePath="https://media.macosicons.com/parse/files/macOSicons/068fe7eb9479665d2c2835370808c3a6_low_res_Raspberry_Pi_Imager.png" />
        <AppIcon filePath="https://media.macosicons.com/parse/files/macOSicons/1fc33ce9aa00f07ffa691f33fbdf3b76_low_res_Adobe_xD_Neon__funny_.png" />
        <AppIcon filePath="https://media.macosicons.com/parse/files/macOSicons/b0166cbcb0adfc25bb25970ff4bee1a7_low_res_VLC_Media_Player.png" />
      </div>
    </div>
  );
}
