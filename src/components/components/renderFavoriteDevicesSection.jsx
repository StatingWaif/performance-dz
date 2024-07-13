export function renderFavoriteDevicesSection() {
  Promise.all([
    import("react-dom/client"),
    import("./FavoriteDevicesSection"),
  ]).then(([ReactDOM, { FavoriteDevicesSection }]) => {
    ReactDOM.createRoot(document.getElementById("favoriteRoot")).render(
      <FavoriteDevicesSection />
    );
  });
}
