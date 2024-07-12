import ReactDOM from "react-dom/client";
import { Header } from "./components/components/Header.jsx";
import { FavoriteDevicesSection } from "./components/components/FavoriteDevicesSection.jsx";
import "./styles/styles.css";
ReactDOM.createRoot(document.getElementById("header")).render(<Header />);

ReactDOM.createRoot(document.getElementById("favoriteRoot")).render(
  <FavoriteDevicesSection />
);
