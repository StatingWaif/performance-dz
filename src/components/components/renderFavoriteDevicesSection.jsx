import { FavoriteDevicesSection } from "./FavoriteDevicesSection";
import ReactDOM from "react-dom/client";

export function renderFavoriteDevicesSection() {
  ReactDOM.createRoot(document.getElementById("favoriteRoot")).render(
    <FavoriteDevicesSection />
  );
}
