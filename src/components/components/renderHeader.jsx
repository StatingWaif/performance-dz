export function renderHeader() {
  Promise.all([import("react-dom/client"), import("./Header")]).then(
    ([{ createRoot }, { Header }]) => {
      createRoot(document.getElementById("header")).render(<Header />);
    }
  );
}
