import { memo } from "react";

export const Eventt = ({ title, icon, subtitle, iconLabel }) => {
  return (
    <li className="event">
      <button className="event__button">
        <span
          className={`event__icon event__icon_${icon}`}
          role="img"
          aria-label={iconLabel}
        ></span>
        <h4 className="event__title">{title}</h4>
        {subtitle && <span className="event__subtitle">{subtitle}</span>}
      </button>
    </li>
  );
};
export const Event = memo(Eventt);
