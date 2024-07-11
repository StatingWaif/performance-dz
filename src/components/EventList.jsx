import { useCallback, useEffect, useRef, useState } from "react";
import { Event } from "./Event";
import { TABS_KEYS, TABS } from "./TABS";

export const EventList = ({ activeTab }) => {
  const ref = useRef();
  const panelRef = useRef();
  const [allSize, setAllSize] = useState(0);
  const [hasRightScroll, setHasRightScroll] = useState(false);
  const [tabChanged, setTabChanged] = useState(false);
  // console.log(allSize);

  useEffect(() => {
    setAllSize(0);
    setTabChanged(!tabChanged);
  }, [activeTab]);

  const onSize = useCallback(
    (size) => {
      setAllSize((prev) => prev + size);
    },
    [tabChanged]
  );

  useEffect(() => {
    const newHasRightScroll = allSize > ref.current.offsetWidth;
    if (newHasRightScroll !== hasRightScroll) {
      setHasRightScroll(newHasRightScroll);
    }
  }, [allSize]);

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
              <Event
                key={`${key}_${item.title}_${index}`}
                {...item}
                onSize={onSize}
              />
            ))}
          </ul>
        </div>
      ))}
      {hasRightScroll && (
        <div className="section__arrow" onClick={onArrowCLick}></div>
      )}
    </div>
  );
};
