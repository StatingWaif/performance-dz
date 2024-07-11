import { useEffect, useState } from "react";
import { EventList } from "./EventList";
import { TABS_KEYS, TABS } from "./TABS";
import { FavoriteDevicesSelect } from "./FavoriteDevicesSelect";

export const FavoriteDevicesSection = () => {
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    setActiveTab(new URLSearchParams(location.search).get("tab") || "all");
  }, []);

  const onSelectInput = (event) => {
    setActiveTab(event.target.value);
  };

  return (
    <section className="section main__devices">
      <div className="section__title">
        <FavoriteDevicesSelect onSelectInput={onSelectInput} />

        <ul role="tablist" className="section__tabs">
          {TABS_KEYS.map((key) => (
            <li
              key={key}
              role="tab"
              aria-selected={key === activeTab ? "true" : "false"}
              tabIndex={key === activeTab ? "0" : undefined}
              className={
                "section__tab" +
                (key === activeTab ? " section__tab_active" : "")
              }
              id={`tab_${key}`}
              aria-controls={`panel_${key}`}
              onClick={() => setActiveTab(key)}
            >
              {TABS[key].title}
            </li>
          ))}
        </ul>
      </div>

      <EventList activeTab={activeTab} />
    </section>
  );
};
