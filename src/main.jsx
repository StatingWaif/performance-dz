import("./components/components/renderHeader").then(({ renderHeader }) => {
  renderHeader();
});

import("./components/components/renderFavoriteDevicesSection").then(
  ({ renderFavoriteDevicesSection }) => {
    renderFavoriteDevicesSection();
  }
);
