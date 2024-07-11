import { memo, useEffect } from "react";

export const Eventt = ({ slim, title, icon, subtitle, iconLabel }) => {
  useEffect(() => {
    console.log("создался");
    return () => console.log("исчез");
  });
  return (
    <li className={"event" + (slim ? " event_slim" : "")}>
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
// export const MemoEvent = Event;
