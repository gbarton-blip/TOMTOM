import { useState, type CSSProperties, type ReactNode } from "react";

type IconName =
  | "battery"
  | "bolt"
  | "calendar"
  | "car"
  | "check"
  | "chevron"
  | "clock"
  | "close"
  | "cloud"
  | "dog"
  | "food"
  | "lock"
  | "map"
  | "moon"
  | "pin"
  | "route"
  | "search"
  | "seat"
  | "settings"
  | "snow"
  | "sound"
  | "sun"
  | "toilet"
  | "turn"
  | "user"
  | "warning";

const paths: Record<IconName, ReactNode> = {
  battery: (
    <>
      <rect x="3" y="7" width="16" height="10" rx="2" />
      <path d="M21 10v4M6 10h8v4H6z" />
    </>
  ),
  bolt: <path d="m13 2-8 12h6l-1 8 9-13h-6z" />,
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </>
  ),
  car: (
    <path d="m5 17-2-2v-4l2-1 2-5h10l2 5 2 1v4l-2 2zM7 17v2M17 17v2M7 13h.01M17 13h.01M6 10h12" />
  ),
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6 6 18" />,
  cloud: (
    <>
      <path d="M7 18h10a4 4 0 0 0 .4-8A6 6 0 0 0 6 9a4.5 4.5 0 0 0 1 9Z" />
      <path d="m8 21 2-2M13 21l2-2" />
    </>
  ),
  dog: (
    <>
      <path d="M7 10 5 6l4 2h6l4-2-2 4v6a5 5 0 0 1-10 0z" />
      <path d="M9 13h.01M15 13h.01M10 17h4" />
    </>
  ),
  food: <path d="M6 3v8M3 3v5a3 3 0 0 0 6 0V3M6 11v10M16 3v18M16 3c3 2 4 5 4 8h-4" />,
  lock: (
    <>
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  map: <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15M15 6v15" />,
  moon: <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" />,
  pin: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <path d="M8 18h3a3 3 0 0 0 3-3V9a3 3 0 0 1 3-3" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.2-4.2" />
    </>
  ),
  seat: <path d="M7 4v9a4 4 0 0 0 4 4h8M7 10h5a3 3 0 0 1 3 3v4M5 20h14" />,
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.5-2.4 1A8 8 0 0 0 15 6l-.4-2.5h-4L10 6a8 8 0 0 0-1.5 1L6 6 4 9.5 6.1 11a7 7 0 0 0 0 2L4 14.5 6 18l2.5-1A8 8 0 0 0 10 18l.5 2.5h4L15 18a8 8 0 0 0 1.5-1l2.5 1 2-3.5-2.1-1.5a7 7 0 0 0 .1-1Z" />
    </>
  ),
  snow: <path d="M12 2v20M4 7l16 10M4 17 20 7M9 4l3 3 3-3M9 20l3-3 3 3" />,
  sound: (
    <>
      <path d="M4 10v4h4l5 4V6L8 10z" />
      <path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  toilet: (
    <>
      <path d="M7 4h10v5a5 5 0 0 1-5 5 5 5 0 0 1-5-5zM8 14h8l1 6H7zM6 4h12" />
    </>
  ),
  turn: <path d="M8 21V11a4 4 0 0 1 4-4h7M15 3l4 4-4 4" />,
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  warning: (
    <>
      <path d="M12 3 2.5 20h19z" />
      <path d="M12 9v5M12 17h.01" />
    </>
  ),
};

function Icon({ name, size = "r" }: { name: IconName; size?: "s" | "r" | "l" | "xl" }) {
  return (
    <svg
      aria-hidden="true"
      className={`icon icon--${size}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

/** Contained button — tt_cmp_containedButton_{primary|secondary|tertiary} */
function Button({
  children,
  onClick,
  variant = "primary",
  icon,
  disabled = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tertiary";
  icon?: IconName;
  disabled?: boolean;
}) {
  return (
    <button className={`btn btn--${variant}`} onClick={onClick} disabled={disabled}>
      {icon && <Icon name={icon} size="s" />}
      <span>{children}</span>
    </button>
  );
}

/** Status chip — maps to tt_sys_color alert / warning / criticalWarning / positive / ev */
function Chip({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "alert" | "warning" | "critical" | "positive" | "ev";
}) {
  return <span className={`chip chip--${tone}`}>{children}</span>;
}

const amenityFilters: { id: IconName; label: string }[] = [
  { id: "toilet", label: "Restrooms" },
  { id: "food", label: "Dining" },
  { id: "dog", label: "Pet-friendly areas" },
];

const stepLabels = ["Check range", "Review stops", "Drive & monitor", "Charge & continue"];

const brandPacks = [
  {
    name: "TomTom",
    accent: "#0a7ec0",
    description: "Default white-label theme: TomTom blue brand tokens on cool grey surfaces.",
  },
  {
    name: "Polar",
    accent: "#2f6fd6",
    description: "Crisp cobalt accent for Scandinavian-minimal cabin interiors.",
  },
  {
    name: "Aurum",
    accent: "#c0811a",
    description: "Warm amber accent for premium grand-touring models.",
  },
];

export default function App() {
  const [view, setView] = useState<"drive" | "plan" | "vehicle">("drive");
  const [colorMode, setColorMode] = useState<"dark" | "light">("dark");
  const [activeFilters, setActiveFilters] = useState<IconName[]>(["toilet", "food", "dog"]);
  const [planB, setPlanB] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [step, setStep] = useState(1);
  const [brand, setBrand] = useState("TomTom");

  const toggleFilter = (id: IconName) =>
    setActiveFilters((cur) => (cur.includes(id) ? cur.filter((i) => i !== id) : [...cur, id]));

  const activatePlanB = () => {
    setPlanB(true);
    setStep((s) => Math.max(s, 2));
  };

  return (
    <main className={`app-shell oem-${brand.toLowerCase()}`} data-color-mode={colorMode}>
      <header className="topbar">
        <div className="brand" aria-label="TomTom EV">
          <span className="brand__mark">
            <Icon name="pin" />
          </span>
          <strong>tomtom</strong>
          <span className="brand__product">EV Navigation</span>
        </div>
        <nav className="tabs" aria-label="Primary">
          {(
            [
              { id: "drive", label: "Live drive" },
              { id: "plan", label: "Trip planner" },
              { id: "vehicle", label: "Vehicle" },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              className={view === item.id ? "tab is-selected" : "tab"}
              aria-current={view === item.id ? "page" : undefined}
              onClick={() => setView(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="topbar__status">
          <span className="live-indicator">
            <i /> Live
          </span>
          <span className="topbar__battery">
            <Icon name="battery" /> 78%
          </span>
          <button
            className="icon-btn"
            aria-label={colorMode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setColorMode(colorMode === "dark" ? "light" : "dark")}
          >
            <Icon name={colorMode === "dark" ? "sun" : "moon"} />
          </button>
          <button className="icon-btn" aria-label="Open profile">
            <Icon name="user" />
          </button>
        </div>
      </header>

      {view === "vehicle" ? (
        <BrandPacks brand={brand} setBrand={setBrand} />
      ) : view === "plan" ? (
        <TripPlanner
          filters={activeFilters}
          toggleFilter={toggleFilter}
          onDone={() => setView("drive")}
        />
      ) : (
        <div className="dashboard">
          <aside className="panel panel--start">
            <section className="trip-heading">
              <div>
                <p className="overline">Peak travel day · Sat 21 Dec</p>
                <h1 className="title-m">
                  London <span>to</span> Edinburgh
                </h1>
              </div>
              <button className="icon-btn" aria-label="Trip settings">
                <Icon name="settings" />
              </button>
            </section>

            <section className="card card--info">
              <div className="card__icon card__icon--alert">
                <Icon name="snow" />
              </div>
              <div className="card__body">
                <div className="row-between">
                  <strong className="subtitle-s">Cold-weather range</strong>
                  <Chip tone="alert">Live</Chip>
                </div>
                <p className="body-s muted">−4°C and cabin heating reduce range by 14%</p>
                <div className="range-compare">
                  <div>
                    <b className="title-s">326 km</b>
                    <small className="label-s muted">Rated</small>
                  </div>
                  <i aria-hidden="true" />
                  <div className="align-end">
                    <b className="title-s">280 km</b>
                    <small className="label-s muted">Today</small>
                  </div>
                </div>
              </div>
            </section>

            <section className="itinerary" aria-label="Itinerary">
              <ol>
                <li>
                  <span className="node node--start" />
                  <div>
                    <b className="subtitle-s">Shoreditch, London</b>
                    <small className="body-s muted">Depart · 100%</small>
                  </div>
                  <time className="label-m">07:00</time>
                </li>
                <li>
                  <span className="node node--ev">
                    <Icon name="bolt" size="s" />
                  </span>
                  <div>
                    <b className="subtitle-s">{planB ? "Fastned Leeds Skelton" : "IONITY Leeds"}</b>
                    <small className="body-s muted">
                      {planB ? "Plan B · 4 free · 22 min" : "1 free · 28 min"}
                    </small>
                  </div>
                  <time className="label-m">{planB ? "09:34" : "09:28"}</time>
                </li>
                <li>
                  <span className="node node--ev">
                    <Icon name="bolt" size="s" />
                  </span>
                  <div>
                    <b className="subtitle-s">InstaVolt Alnwick</b>
                    <small className="body-s muted">3 free · 24 min</small>
                  </div>
                  <time className="label-m">12:02</time>
                </li>
                <li>
                  <span className="node node--end" />
                  <div>
                    <b className="subtitle-s">Edinburgh</b>
                    <small className="body-s muted">Arrive · 16%</small>
                  </div>
                  <time className="label-m">14:18</time>
                </li>
              </ol>
            </section>

            <section>
              <div className="section-head">
                <span className="subtitle-s">Family stop filters</span>
                <button className="text-btn" onClick={() => setActiveFilters([])}>
                  Clear
                </button>
              </div>
              <div className="chip-group">
                {amenityFilters.map((f) => {
                  const selected = activeFilters.includes(f.id);
                  return (
                    <button
                      key={f.id}
                      className={selected ? "filter-chip is-selected" : "filter-chip"}
                      onClick={() => toggleFilter(f.id)}
                      aria-pressed={selected}
                    >
                      <Icon name={f.id} size="s" />
                      <span>{f.label}</span>
                      {selected && <Icon name="check" size="s" />}
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="driver-flow">
              <div className="section-head">
                <span className="subtitle-s">Charging flow</span>
                <span className="label-m muted">{step}/4</span>
              </div>
              <ol className="stepper">
                {stepLabels.map((label, i) => (
                  <li
                    key={label}
                    className={`${i + 1 < step ? "is-done" : ""} ${i + 1 === step ? "is-current" : ""}`}
                  >
                    <span>{i + 1 < step ? <Icon name="check" size="s" /> : i + 1}</span>
                    <p>{label}</p>
                  </li>
                ))}
              </ol>
              <Button
                onClick={() => setStep((c) => Math.min(4, c + 1))}
                disabled={step === 4}
                icon={step === 1 ? "car" : "chevron"}
              >
                {step === 1 ? "Start drive" : step === 4 ? "Journey ready" : "Continue"}
              </Button>
            </section>
          </aside>

          <section className="map" aria-label="Route map">
            <div className="map__texture" />
            <svg
              className="map__routes"
              viewBox="0 0 700 860"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path className="road" d="M0 640C160 600 300 700 700 560" />
              <path className="road" d="M120 0C200 260 120 480 260 860" />
              <path className="road" d="M700 300C520 340 420 220 300 120" />
              <path
                className="route route--casing"
                d="M90 780C180 690 132 610 245 548S437 486 390 390 428 260 580 176 586 80 625 30"
              />
              <path
                className="route route--main"
                d="M90 780C180 690 132 610 245 548S437 486 390 390 428 260 580 176 586 80 625 30"
              />
              <path className="route route--traffic" d="M390 390C380 330 410 290 470 250" />
              {planB && <path className="route route--alt" d="M244 548C302 500 272 430 390 390" />}
            </svg>
            <div className="poi city" style={{ left: "8%", bottom: "4%" }}>
              London
            </div>
            <div className="poi city" style={{ left: "29%", top: "61%" }}>
              Leeds
            </div>
            <div className="poi city" style={{ right: "16%", top: "29%" }}>
              Newcastle
            </div>
            <div className="poi city" style={{ right: "4%", top: "3%" }}>
              Edinburgh
            </div>
            <div className="ev-marker" style={{ left: "35%", top: "60%" }}>
              <Icon name="bolt" size="s" />
              <span>{planB ? "4 free" : "1 free"}</span>
            </div>
            <div className="ev-marker" style={{ left: "61%", top: "30%" }}>
              <Icon name="bolt" size="s" />
              <span>3 free</span>
            </div>
            <div
              className="chevron-marker"
              style={{ left: "20%", bottom: "15%" }}
              aria-label="Your vehicle"
            />

            <div className="guidance">
              <div className="guidance__instruction">
                <Icon name="turn" size="xl" />
                <div>
                  <div className="row-between">
                    <span className="display-s">42 km</span>
                    <span className="shield shield--motorway">A1(M)</span>
                  </div>
                  <p className="subtitle-m">Continue towards Newcastle</p>
                </div>
              </div>
              {!dismissed && !planB && (
                <div className="guidance__row">
                  <span className="row-icon row-icon--critical">
                    <Icon name="bolt" size="s" />
                  </span>
                  <div>
                    <b className="subtitle-s">128 km</b>
                    <small className="body-s muted">Charger busy · IONITY Leeds</small>
                  </div>
                  <Chip tone="critical">+24 min</Chip>
                </div>
              )}
              <div className="guidance__row">
                <span className="row-icon row-icon--warning">
                  <Icon name="snow" size="s" />
                </span>
                <div>
                  <b className="subtitle-s">64 km</b>
                  <small className="body-s muted">Light snow · reduce speed</small>
                </div>
                <Chip tone="warning">−4°C</Chip>
              </div>
            </div>

            <div className="fab-stack">
              <button className="fab fab--ev is-active" aria-label="Charge finder">
                <Icon name="bolt" />
              </button>
              <button className="fab" aria-label="Search">
                <Icon name="search" />
              </button>
              <span className="fab-stack__spacer" />
              <button className="fab" aria-label="Route overview">
                <Icon name="route" />
              </button>
              <button className="fab" aria-label="Voice guidance">
                <Icon name="sound" />
              </button>
              <button className="fab" aria-label="Map settings">
                <Icon name="settings" />
              </button>
            </div>

            <div className="eta-panel">
              <div>
                <div className="eta-panel__main">
                  <span className="display-s">14:18</span>
                  <span className="eta-battery">
                    <Icon name="battery" size="s" /> 16%
                  </span>
                </div>
                <p className="body-s muted">
                  648 km · 7:18 hr ·{" "}
                  <span className="traffic-delay">{planB ? "+0 min" : "+24 min"}</span>
                </p>
              </div>
              <div className="eta-panel__weather">
                <Icon name="cloud" size="l" />
                <div>
                  <b className="subtitle-s">−4°C</b>
                  <small className="body-s muted">Snow · roads dry</small>
                </div>
              </div>
            </div>
          </section>

          <aside className="panel panel--end">
            <section className="card">
              <div className="section-head">
                <span className="subtitle-s">Trip metrics</span>
                <Chip tone="positive">Optimised</Chip>
              </div>
              <div className="metric-hero">
                <span className="display-m">
                  {planB ? "31" : "23"}
                  <small> min</small>
                </span>
                <p className="body-s muted">Waiting time saved on this trip</p>
              </div>
              <div className="metric-grid">
                <div>
                  <Icon name="bolt" size="s" />
                  <b className="title-s">2</b>
                  <small className="label-s muted">Charge stops</small>
                </div>
                <div>
                  <Icon name="clock" size="s" />
                  <b className="title-s">74 min</b>
                  <small className="label-s muted">Charging time</small>
                </div>
                <div>
                  <Icon name="battery" size="s" />
                  <b className="title-s">16%</b>
                  <small className="label-s muted">Arrival charge</small>
                </div>
                <div>
                  <Icon name="route" size="s" />
                  <b className="title-s">€42.80</b>
                  <small className="label-s muted">Est. charging cost</small>
                </div>
              </div>
            </section>

            <section
              className={`card alert-card ${planB ? "alert-card--positive" : "alert-card--critical"}`}
              aria-live="polite"
            >
              <div className="alert-card__head">
                <span className={`row-icon ${planB ? "row-icon--positive" : "row-icon--critical"}`}>
                  <Icon name={planB ? "check" : "warning"} size="s" />
                </span>
                <div>
                  <b className="subtitle-s">{planB ? "Plan B active" : "Busy charger ahead"}</b>
                  <small className="body-s muted">
                    {planB ? "Low-wait station added to route" : "IONITY Leeds · 7 of 9 in use"}
                  </small>
                </div>
              </div>
              {!planB && (
                <div className="occupancy" role="img" aria-label="78% occupied">
                  <div className="occupancy__bar">
                    <i style={{ width: "78%" }} />
                  </div>
                  <div className="row-between label-s">
                    <span className="muted">78% occupied</span>
                    <b className="text-critical">~24 min wait</b>
                  </div>
                </div>
              )}
              <div className="option-card">
                <div className="option-card__head">
                  <span className="row-icon row-icon--ev">
                    <Icon name="bolt" size="s" />
                  </span>
                  <div>
                    <b className="subtitle-s">Fastned Leeds Skelton</b>
                    <small className="body-s muted">
                      {planB ? "On route" : "+8 min detour · 4 free · 300 kW"}
                    </small>
                  </div>
                  <Chip tone="ev">{planB ? "Selected" : "Best"}</Chip>
                </div>
                <div className="amenities">
                  <span>
                    <Icon name="toilet" size="s" /> Restrooms
                  </span>
                  <span>
                    <Icon name="food" size="s" /> Dining
                  </span>
                  <span>
                    <Icon name="dog" size="s" /> Pet area
                  </span>
                </div>
                <p className="save-line body-s">
                  <Icon name="clock" size="s" /> Saves <b>16 min</b> overall
                </p>
              </div>
              <Button
                onClick={activatePlanB}
                variant={planB ? "secondary" : "primary"}
                icon={planB ? "check" : "route"}
                disabled={planB}
              >
                {planB ? "Alternative selected" : "Switch to Plan B"}
              </Button>
              {!planB && (
                <button className="text-btn text-btn--center" onClick={() => setDismissed(true)}>
                  Keep current route
                </button>
              )}
            </section>

            <section className="lock-note">
              <Icon name="lock" size="s" />
              <div>
                <b className="label-m">Safety-critical UI locked</b>
                <p className="body-s muted">
                  Guidance, alerts and EV indicators use fixed system tokens across OEM themes.
                </p>
              </div>
            </section>
          </aside>
        </div>
      )}
    </main>
  );
}

function TripPlanner({
  filters,
  toggleFilter,
  onDone,
}: {
  filters: IconName[];
  toggleFilter: (id: IconName) => void;
  onDone: () => void;
}) {
  return (
    <div className="page">
      <div className="page__heading">
        <div>
          <p className="overline">Plan before you go</p>
          <h1 className="title-xl">Build a cold-weather trip</h1>
          <p className="body-m muted">
            Live weather and charger demand are factored into every estimate.
          </p>
        </div>
        <Button onClick={onDone} icon="map">
          View live route
        </Button>
      </div>
      <div className="planner-grid">
        <section className="card card--lg">
          <div className="field-grid">
            {(
              [
                ["From", "pin", "Shoreditch, London"],
                ["To", "pin", "Edinburgh City Centre"],
                ["Departure", "calendar", "Sat, 21 Dec · 07:00"],
                ["Passengers", "seat", "2 adults · 2 children · 1 dog"],
              ] as const
            ).map(([label, icon, value]) => (
              <label key={label} className="field">
                <span className="label-m">{label}</span>
                <div className="field__input">
                  <Icon name={icon} size="s" />
                  <input defaultValue={value} />
                </div>
              </label>
            ))}
          </div>
          <div className="divider" />
          <h2 className="title-s">Make every stop work for the family</h2>
          <p className="body-m muted">
            Only compatible fast chargers with your selected amenities will be suggested.
          </p>
          <div className="option-grid">
            {amenityFilters.map((f) => {
              const selected = filters.includes(f.id);
              return (
                <button
                  key={f.id}
                  onClick={() => toggleFilter(f.id)}
                  className={selected ? "option-tile is-selected" : "option-tile"}
                  aria-pressed={selected}
                >
                  <Icon name={f.id} size="l" />
                  <span className="subtitle-s">{f.label}</span>
                  {selected && <Icon name="check" size="s" />}
                </button>
              );
            })}
          </div>
        </section>
        <aside className="card card--lg card--guidance">
          <span className="card__icon card__icon--alert">
            <Icon name="snow" size="l" />
          </span>
          <p className="overline">Pre-departure estimate</p>
          <span className="display-l">280 km</span>
          <p className="body-m muted">
            Expected range at −4°C with cabin heating and four passengers.
          </p>
          <div className="range-bar">
            <i />
          </div>
          {[
            ["Summer baseline", "326 km"],
            ["Weather impact", "−14%"],
            ["Arrival reserve", "16%"],
            ["Charge stops", "2"],
          ].map(([k, v]) => (
            <div key={k} className="kv">
              <span className="body-s muted">{k}</span>
              <b className="subtitle-s">{v}</b>
            </div>
          ))}
          <Button onClick={onDone}>Optimise journey</Button>
        </aside>
      </div>
    </div>
  );
}

function BrandPacks({ brand, setBrand }: { brand: string; setBrand: (b: string) => void }) {
  return (
    <div className="page">
      <div className="page__heading">
        <div>
          <p className="overline">OEM theming</p>
          <h1 className="title-xl">Brand packs</h1>
          <p className="body-m muted">
            Packs override brand system tokens only. Guidance, alert and EV tokens stay locked.
          </p>
        </div>
        <Chip tone="positive">
          <Icon name="lock" size="s" /> Safety tokens locked
        </Chip>
      </div>
      <div className="pack-grid" role="radiogroup" aria-label="Brand pack">
        {brandPacks.map((p) => (
          <button
            key={p.name}
            role="radio"
            aria-checked={brand === p.name}
            className={brand === p.name ? "pack is-selected" : "pack"}
            onClick={() => setBrand(p.name)}
            style={{ "--pack-accent": p.accent } as CSSProperties}
          >
            <div className="pack__preview">
              <div className="pack__map">
                <i />
              </div>
              <div className="pack__ui">
                <span className="pack__guidance">↱ 2.4 km</span>
                <span className="pack__cta">Let’s go</span>
              </div>
            </div>
            <div className="pack__copy">
              <div>
                <h2 className="title-s">{p.name}</h2>
                <p className="body-s muted">{p.description}</p>
              </div>
              <span className="radio">
                <i />
              </span>
            </div>
          </button>
        ))}
      </div>
      <section className="card card--lg locked">
        <div className="locked__intro">
          <span className="card__icon">
            <Icon name="lock" size="l" />
          </span>
          <div>
            <h2 className="title-s">Locked safety-critical tokens</h2>
            <p className="body-m muted">
              These system tokens are excluded from OEM overrides to preserve recognition and
              contrast.
            </p>
          </div>
        </div>
        <ul>
          {[
            "Guidance colours (World / USA)",
            "Alert, warning & critical warning",
            "EV tones and EV glow",
            "Road signage & shields",
            "Minimum touch targets per size mode",
            "Text contrast on surfaces",
          ].map((t) => (
            <li key={t} className="subtitle-s">
              <Icon name="check" size="s" /> {t}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
