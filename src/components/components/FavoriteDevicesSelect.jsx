import { memo } from "react";

const FavoriteDevicesSelect = ({ onSelectInput }) => {
  return (
    <>
      <h2 className="section__title-header">Избранные устройства</h2>

      <select
        className="section__select"
        defaultValue="all"
        onInput={onSelectInput}
      >
        <option value="all">Все</option>
        <option value="kitchen">Кухня</option>
        <option value="hall"></option>
        <option value="lights">Лампочки</option>
        <option value="cameras">Камеры</option>
      </select>
    </>
  );
};

export const MemoFavoriteDeviceSelect = memo(FavoriteDevicesSelect);
