export function renderHeader() {
  Promise.all([import("react-dom/client"), import("./Header")]).then(
    ([ReactDOM, { Header }]) => {
      ReactDOM.createRoot(document.getElementById("header")).render(<Header />);
    }
  );
}
