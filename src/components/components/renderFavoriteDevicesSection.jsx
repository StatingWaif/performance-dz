export function renderFavoriteDevicesSection() {
  Promise.all([
    import("react-dom/client"),
    import("./FavoriteDevicesSection"),
  ]).then(([{ createRoot }, { FavoriteDevicesSection }]) => {
    createRoot(document.getElementById("favoriteRoot")).render(
      <FavoriteDevicesSection />
    );
  });
}
