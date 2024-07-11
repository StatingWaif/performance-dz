import { useEffect, useRef } from "react";

export const Event = ({ onSize, slim, title, icon, subtitle, iconLabel }) => {
  const ref = useRef();
  useEffect(() => {
    const width = ref.current.offsetWidth;
    if (onSize) {
      // console.log(width)
      onSize(width);
    }
  }, [ref.current, onSize]);

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
