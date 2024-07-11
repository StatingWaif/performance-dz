import { useEffect, useRef } from "react";

export const Event = ({ onSize, slim, title, icon, subtitle, iconLabel }) => {
  const ref = useRef();

  useEffect(() => {
    if (onSize) {
      const width = ref.current.offsetWidth;
      onSize(width);
    }
  }, [onSize]);

  return (
    <li ref={ref} className={"event" + (slim ? " event_slim" : "")}>
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
