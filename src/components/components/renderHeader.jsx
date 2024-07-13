import { Header } from "./Header";
import ReactDOM from "react-dom/client";

export function renderHeader() {
  ReactDOM.createRoot(document.getElementById("header")).render(<Header />);
}
