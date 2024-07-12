import ReactDOM from "react-dom/client";
import { Header } from "./components/Header.jsx";
import { FavoriteDevicesSection } from "./components/FavoriteDevicesSection.jsx";

ReactDOM.createRoot(document.getElementById("header")).render(<Header />);

ReactDOM.createRoot(document.getElementById("favoriteRoot")).render(
  <FavoriteDevicesSection />
);
