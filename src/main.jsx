import ReactDOM from "react-dom/client";
import { Header } from "./components/components/Header.jsx";
import { FavoriteDevicesSection } from "./components/components/FavoriteDevicesSection.jsx";
import "./styles/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <header className="header" id="header">
      <Header />
    </header>

    <main className="main">
      <section className="section main__general">
        <h2 className="section__title section__title-header section__main-title">
          Главное
        </h2>
        <div className="hero-dashboard">
          <div className="hero-dashboard__primary">
            <h3 className="hero-dashboard__title">Привет, Геннадий!</h3>
            <p className="hero-dashboard__subtitle">
              Двери и окна закрыты, сигнализация включена.
            </p>
            <ul className="hero-dashboard__info">
              <li className="hero-dashboard__item">
                <div className="hero-dashboard__item-title">Дома</div>
                <div className="hero-dashboard__item-details">
                  +23
                  <span className="a11y-hidden">°</span>
                </div>
              </li>
              <li className="hero-dashboard__item">
                <div className="hero-dashboard__item-title">За окном</div>
                <div className="hero-dashboard__item-details">
                  +19
                  <span className="a11y-hidden">°</span>
                  <div
                    className="hero-dashboard__icon hero-dashboard__icon_rain"
                    role="img"
                    aria-label="Дождь"
                  ></div>
                </div>
              </li>
            </ul>
          </div>
          <ul className="hero-dashboard__schedule">
            <li className="event">
              <button className="event__button">
                <span
                  className="event__icon event__icon_temp"
                  role="img"
                  aria-label="Температура"
                ></span>
                <h4 className="event__title">Philips Cooler</h4>
                <span className="event__subtitle">
                  Начнет охлаждать в 16:30
                </span>
              </button>
            </li>
            <li className="event">
              <button className="event__button">
                <span
                  className="event__icon event__icon_light"
                  role="img"
                  aria-label="Освещение"
                ></span>
                <h4 className="event__title">Xiaomi Yeelight LED Smart Bulb</h4>
                <span className="event__subtitle">Включится в 17:00</span>
              </button>
            </li>
            <li className="event">
              <button className="event__button">
                <span
                  className="event__icon event__icon_light"
                  role="img"
                  aria-label="Освещение"
                ></span>
                <h4 className="event__title">Xiaomi Yeelight LED Smart Bulb</h4>
                <span className="event__subtitle">Включится в 17:00</span>
              </button>
            </li>
          </ul>
        </div>
      </section>

      <section className="section main__scripts">
        <h2 className="section__title section__title-header">
          Избранные сценарии
        </h2>

        <ul className="event-grid">
          <li className="event event_slim">
            <button className="event__button">
              <span
                className="event__icon event__icon_light2"
                role="img"
                aria-label="Освещение"
              ></span>
              <h4 className="event__title">
                Выключить весь свет в доме и во дворе
              </h4>
            </button>
          </li>

          <li className="event event_slim">
            <button className="event__button">
              <span
                className="event__icon event__icon_schedule"
                role="img"
                aria-label="Расписание"
              ></span>
              <h4 className="event__title">Я ухожу</h4>
            </button>
          </li>

          <li className="event event_slim">
            <button className="event__button">
              <span
                className="event__icon event__icon_light2"
                role="img"
                aria-label="Освещение"
              ></span>
              <h4 className="event__title">Включить свет в коридоре</h4>
            </button>
          </li>

          <li className="event event_slim">
            <button className="event__button">
              <span
                className="event__icon event__icon_temp2"
                role="img"
                aria-label="Температура"
              ></span>
              <h4 className="event__title">Набрать горячую ванну</h4>
              <span className="event__subtitle">Начнётся в 18:00</span>
            </button>
          </li>

          <li className="event event_slim">
            <button className="event__button">
              <span
                className="event__icon event__icon_temp2"
                role="img"
                aria-label="Температура"
              ></span>
              <h4 className="event__title">
                Сделать пол тёплым во всей квартире
              </h4>
            </button>
          </li>
        </ul>
      </section>

      <section className="section main__devices" id="favoriteRoot">
        <FavoriteDevicesSection />
      </section>
    </main>
  </>
);
