import { useEffect, useRef, useState } from "react";
import { MemoEvent } from "./Event";
import { TABS_KEYS, TABS } from "./TABS";

export const EventList = ({ activeTab }) => {
  console.log("1");
  const ref = useRef();
  const panelRef = useRef();
  const [hasHorizontalScroll, setHasHorizontalScroll] = useState(false);
  const widths = {
    all: 102400,
    kitchen: 478,
    hall: 400,
    lights: 813,
    cameras: 200,
  };

  useEffect(() => {
    if (ref.current) {
      const handleResize = () => {
        setHasHorizontalScroll(widths[activeTab] > ref.current.offsetWidth);
      };

      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [activeTab]);

  const onArrowCLick = () => {
    const scroller = panelRef.current;

    if (scroller) {
      scroller.scrollTo({
        left: scroller.scrollLeft + 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="section__panel-wrapper" ref={ref}>
      {TABS_KEYS.map((key) => (
        <div
          ref={key === activeTab ? panelRef : null}
          key={key}
          role="tabpanel"
          className={
            "section__panel" +
            (key === activeTab ? "" : " section__panel_hidden")
          }
          aria-hidden={key === activeTab ? "false" : "true"}
          id={`panel_${key}`}
          aria-labelledby={`tab_${key}`}
        >
          <ul className="section__panel-list">
            {TABS[key].items.map((item, index) => (
              <MemoEvent key={index} {...item} />
            ))}
          </ul>
        </div>
      ))}
      {hasHorizontalScroll && (
        <div className="section__arrow" onClick={onArrowCLick}></div>
      )}
    </div>
  );
};