import React from "react";
import { TABS, TABS_KEYS } from "./TABS";

export const FavoriteDevicesSelect = ({ onSelectInput }) => {
  return (
    <>
      <h2 className="section__title-header">Избранные устройства</h2>

      <select
        className="section__select"
        defaultValue="all"
        onInput={onSelectInput}
      >
        {TABS_KEYS.map((key) => (
          <option key={key} value={key}>
            {TABS[key].title}
          </option>
        ))}
      </select>
    </>
  );
};
