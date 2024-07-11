import { useCallback, useEffect, useRef, useState } from "react";
import { Event } from "./Event";
import { TABS_KEYS, TABS } from "./TABS";

export const EventList = ({ activeTab }) => {
  const ref = useRef();
  const panelRef = useRef();

  const [hasRightScroll, setHasRightScroll] = useState(false);
  // let sumWidth = 0;
  // const [sumWidth, setSumWidth] = useState(0);
  // const onSize = useCallback(size => {
  //     setSumWidth(prev => prev += size);
  // }, [activeTab]);

  // useEffect(() => setSumWidth(0), [activeTab])

  // useEffect(() => {
  //     console.log(sumWidth, ref.current.offsetWidth)
  //     const newHasRightScroll = sumWidth > ref.current.offsetWidth;
  //     if (newHasRightScroll !== hasRightScroll) {
  //         // console.log(newHasRightScroll ? "теперь есть" : "больше нет")
  //         setHasRightScroll(newHasRightScroll);
  //     }

  // }, [sumWidth]);

  const sizes = [];

  const getAllSize = () => {
    const sumWidth = sizes.reduce((acc, item) => acc + item, 0);
    return sumWidth;
  };

  const onSize = useCallback((size) => {
    sizes.push(size);
  });
  useEffect(() => {
    const sumWidth = getAllSize();
    const newHasRightScroll = sumWidth > ref.current.offsetWidth;
    if (newHasRightScroll !== hasRightScroll) {
      setHasRightScroll(newHasRightScroll);
    }
  });

  const onArrowCLick = () => {
    const scroller = panelRef.current;

    if (scroller) {
      // console.log(scroller.scrollLeft)
      // const key = scroller.id.split("panel_").pop();
      // TABS[key].items.concat(TABS[key].items)
      // if (scroller.scrollLeft >= getAllSize() / 2) {
      //     scroller.scrollLeft -= getAllSize() / 2
      // }
      // else if (scroller.scrollLeft <= 0) {
      //     scroller.scrollLeft += getAllSize() / 2
      // }
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
              <Event key={index} {...item} onSize={onSize} />
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
