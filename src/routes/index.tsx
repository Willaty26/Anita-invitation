import { createFileRoute } from "@tanstack/react-router";
import mapImage from "@/assets/ros-niyom-map.jpg.asset.json";
import celebrationImage from "@/assets/celebration.webp.asset.json";

const ADDRESS = "10-91 Jackson Ave, Long Island City, NY 11101";
const VENUE_QUERY = "Ros Niyom Thai Restaurant, 10-91 Jackson Ave, Long Island City, NY 11101";
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(VENUE_QUERY)}`;

const BLUE = "#1e4a8c";
const BLUE_DEEP = "#163a73";
const CREAM = "#faf8f3";
const CREAM_WARM = "#f4f1e8";
const INK = "#1a2a44";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anita Wright-Antoine — Retirement Celebration" },
      {
        name: "description",
        content:
          "You're invited to celebrate Anita Wright-Antoine's retirement from the New York City Housing Authority — A Blueprint of Memories and a Legacy of Excellence.",
      },
      { property: "og:title", content: "Anita Wright-Antoine — Retirement Celebration" },
      {
        property: "og:description",
        content: "A Blueprint of Memories and a Legacy of Excellence — Long Island City, NY.",
      },
    ],
  }),
  component: Invitation,
});

function CornerMark({ className, color = CREAM_WARM }: { className: string; color?: string }) {
  return (
    <span
      className={`absolute h-4 w-4 ${className}`}
      aria-hidden
      style={{
        color,
        backgroundImage:
          "linear-gradient(currentColor, currentColor), linear-gradient(currentColor, currentColor)",
        backgroundSize: "100% 1px, 1px 100%",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}

function Ornament({ color = BLUE }: { color?: string }) {
  return (
    <div className="my-2 flex items-center justify-center gap-3" aria-hidden>
      <span className="h-px w-14 sm:w-20" style={{ background: `${color}55` }} />
      <svg width="22" height="10" viewBox="0 0 22 10" fill="none">
        <path
          d="M1 5 Q5.5 1 11 5 Q16.5 9 21 5"
          stroke={color}
          strokeWidth="0.8"
          fill="none"
          opacity="0.7"
        />
        <circle cx="11" cy="5" r="1.4" fill={color} opacity="0.8" />
      </svg>
      <span className="h-px w-14 sm:w-20" style={{ background: `${color}55` }} />
    </div>
  );
}

function Invitation() {
  return (
    <main
      className="min-h-screen font-[Inter,sans-serif]"
      style={{ background: CREAM, color: INK }}
    >
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-10 px-5 py-12 sm:gap-12 sm:py-20">

        {/* ============ COVER (blue) ============ */}
        <section
          className="relative w-full overflow-hidden px-6 py-14 sm:px-14 sm:py-20"
          style={{
            background: `linear-gradient(180deg, ${BLUE} 0%, ${BLUE_DEEP} 100%)`,
            color: CREAM_WARM,
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
              backgroundSize: "120px 120px, 120px 120px, 24px 24px, 24px 24px",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.5) 100%)",
            }}
          />

          <div
            className="relative px-4 py-10 sm:px-10 sm:py-12"
            style={{ border: `1px solid ${CREAM_WARM}66`, outline: `1px solid ${CREAM_WARM}1f`, outlineOffset: "6px" }}
          >
            <CornerMark className="-left-2 -top-2" />
            <CornerMark className="-right-2 -top-2" />
            <CornerMark className="-left-2 -bottom-2" />
            <CornerMark className="-right-2 -bottom-2" />

            {/* Building logo */}
            <div className="mb-6 flex justify-center">
              <svg width="52" height="52" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path d="M24 6 L40 18 L40 42 L8 42 L8 18 Z" stroke={CREAM_WARM} strokeWidth="1.5" fill="none"/>
                <rect x="14" y="24" width="5" height="6" fill={CREAM_WARM}/>
                <rect x="21.5" y="24" width="5" height="6" fill={CREAM_WARM}/>
                <rect x="29" y="24" width="5" height="6" fill={CREAM_WARM}/>
                <rect x="14" y="33" width="5" height="6" fill={CREAM_WARM}/>
                <rect x="21.5" y="33" width="5" height="9" fill={CREAM_WARM}/>
                <rect x="29" y="33" width="5" height="6" fill={CREAM_WARM}/>
              </svg>
            </div>

            <p
              className="text-center text-[10px] font-medium uppercase sm:text-xs"
              style={{ letterSpacing: "0.4em", color: `${CREAM_WARM}d9` }}
            >
              New York City Housing Authority
            </p>

            <div className="my-6 flex items-center justify-center gap-3">
              <span className="h-px w-14 sm:w-24" style={{ background: `${CREAM_WARM}80` }} />
              <span
                className="text-[10px] uppercase"
                style={{ letterSpacing: "0.45em", color: `${CREAM_WARM}b3` }}
              >
                Cordially Invites You
              </span>
              <span className="h-px w-14 sm:w-24" style={{ background: `${CREAM_WARM}80` }} />
            </div>

            <h1
              className="text-center font-[Cormorant_Garamond,serif] text-5xl font-light leading-[0.95] sm:text-7xl"
              style={{ color: CREAM_WARM, letterSpacing: "-0.01em" }}
            >
              Retirement
              <br />
              <em className="font-medium italic">Celebration</em>
            </h1>

            <div className="mx-auto my-7 flex items-center justify-center gap-3">
              <span className="h-px w-16 sm:w-28" style={{ background: `${CREAM_WARM}99` }} />
              <span className="h-1.5 w-1.5 rotate-45" style={{ background: CREAM_WARM }} />
              <span className="h-px w-16 sm:w-28" style={{ background: `${CREAM_WARM}99` }} />
            </div>

            <div className="mx-auto mb-5 w-[120px] sm:w-[140px]">
              <div
                className="relative p-1"
                style={{
                  background: CREAM_WARM,
                  border: `1px solid ${CREAM_WARM}66`,
                  outline: `1px solid ${CREAM_WARM}26`,
                  outlineOffset: "4px",
                }}
              >
                <img
                  src={celebrationImage.url}
                  alt="Anita Wright-Antoine"
                  className="block aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p
              className="text-center text-xs uppercase sm:text-sm"
              style={{ letterSpacing: "0.45em", color: `${CREAM_WARM}d9` }}
            >
              In Honor of
            </p>

            <p
              className="mt-3 text-center font-[Cormorant_Garamond,serif] text-3xl font-medium sm:text-5xl"
              style={{ color: CREAM_WARM, letterSpacing: "0.01em" }}
            >
              Anita Wright-Antoine
            </p>
            <p
              className="mx-auto mt-4 max-w-md text-center font-[Cormorant_Garamond,serif] text-lg italic sm:text-xl"
              style={{ color: `${CREAM_WARM}e6` }}
            >
              A Blueprint of Memories
              <br />
              and a Legacy of Excellence
            </p>
          </div>
        </section>




        {/* ============ DETAILS (cream) ============ */}
        <Card>
          <SectionTitle eyebrow="The Invitation">The Details</SectionTitle>

          <dl className="mx-auto grid max-w-xl grid-cols-1 gap-y-5 sm:grid-cols-[120px_1fr] sm:gap-x-8">
            <DetailRow label="Date" value="Monday · June 29" />
            <DetailRow label="Time" value="12:00 PM – 2:00 PM" />
            <DetailRow label="Venue" value="Ros Niyom Thai Restaurant" />
            <DetailRow label="Address" value={ADDRESS} mono />
          </dl>
        </Card>

        {/* ============ MAP (cream) ============ */}
        <Card>
          <SectionTitle eyebrow="Location">Find Us</SectionTitle>

          <div className="relative mx-auto w-full max-w-xl">
            <div
              className="absolute -left-1 -top-5 text-[10px] uppercase"
              style={{ letterSpacing: "0.35em", color: BLUE }}
            >
              Plot · 01
            </div>
            <div
              className="relative p-1.5"
              style={{
                border: `1px solid ${BLUE}55`,
                outline: `1px solid ${BLUE}1f`,
                outlineOffset: "5px",
              }}
            >
              <div className="relative overflow-hidden">
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Ros Niyom Thai Restaurant in Google Maps"
                >
                  <img
                    src={mapImage.url}
                    alt="Map to Ros Niyom Thai Restaurant, 10-91 Jackson Ave, Long Island City, NY"
                    className="block h-64 w-full object-cover sm:h-80"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3 text-[11px] uppercase transition hover:opacity-90"
                style={{
                  background: BLUE,
                  color: CREAM_WARM,
                  border: `1px solid ${BLUE}`,
                  letterSpacing: "0.32em",
                }}
              >
                Get Directions
              </a>
            </div>
          </div>
        </Card>

        {/* ============ LEGACY (cream) ============ */}
        <Card>
          <div className="text-center">
            <SectionTitle eyebrow="Her Legacy">Celebrating a Remarkable Career</SectionTitle>

            <Ornament />

            <p
              className="mt-4 mb-5 text-[10px] uppercase"
              style={{ letterSpacing: "0.4em", color: `${BLUE}b3` }}
            >
              Projects &amp; Milestones
            </p>
            <div
              className="flex flex-col items-center gap-2.5 font-[Cormorant_Garamond,serif] text-lg leading-relaxed sm:text-xl"
              style={{ color: INK }}
            >
              <span>Washington CC · Tompkins CC · Parkside CC</span>
              <span>McKinley Roofing · Castle Hill Roofing</span>
              <span>Pelham Parkway Roofing</span>
              <span>Various Antenna Reviews</span>
              <span>Zoning Studies for Various Wasteyards</span>
              <span>Queens Public Library</span>
            </div>
          </div>
        </Card>

        <div className="flex flex-col items-center gap-2">
          <Ornament />
          <p
            className="text-center text-[10px] uppercase"
            style={{ letterSpacing: "0.4em", color: `${BLUE}8c` }}
          >
            Drawing No. AWA-2026 · Sheet 01 of 01
          </p>
        </div>
      </div>
    </main>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="relative w-full px-6 py-10 sm:px-12 sm:py-14"
      style={{
        background: CREAM,
        border: `1px solid ${BLUE}40`,
        outline: `1px solid ${BLUE}14`,
        outlineOffset: "6px",
      }}
    >
      <CornerMark className="-left-2 -top-2" color={BLUE} />
      <CornerMark className="-right-2 -top-2" color={BLUE} />
      <CornerMark className="-left-2 -bottom-2" color={BLUE} />
      <CornerMark className="-right-2 -bottom-2" color={BLUE} />
      {children}
    </section>
  );
}

function SectionTitle({
  children,
  eyebrow,
}: {
  children: React.ReactNode;
  eyebrow?: string;
}) {
  return (
    <div className="mb-7 text-center">
      {eyebrow && (
        <p
          className="mb-2 text-[10px] uppercase"
          style={{ letterSpacing: "0.45em", color: `${BLUE}99` }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="font-[Cormorant_Garamond,serif] text-3xl font-medium sm:text-4xl"
        style={{ color: BLUE, letterSpacing: "0.005em" }}
      >
        {children}
      </h2>
    </div>
  );
}

function DetailRow({
  label,
  value,
  mono = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <>
      <dt
        className="text-[10px] uppercase sm:text-right"
        style={{ letterSpacing: "0.4em", color: `${BLUE}b3` }}
      >
        {label}
      </dt>
      <dd
        className={`pb-2 text-base sm:text-lg ${
          mono ? "font-mono text-sm sm:text-base" : "font-[Cormorant_Garamond,serif] text-lg sm:text-xl"
        }`}
        style={{ color: INK, borderBottom: `1px dotted ${BLUE}4d` }}
      >
        {value}
      </dd>
    </>
  );
}
