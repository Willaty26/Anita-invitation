import { createFileRoute } from "@tanstack/react-router";
import mapImage from "@/assets/ros-niyom-map.jpg.asset.json";

const ADDRESS = "10-91 Jackson Ave, Long Island City, NY 11101";
const VENUE_QUERY = "Ros Niyom Thai Restaurant, 10-91 Jackson Ave, Long Island City, NY 11101";
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(VENUE_QUERY)}`;

const BLUE = "#1e4a8c";
const CREAM = "#faf8f3";
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

function CornerMark({ className, color = "#f4f1e8" }: { className: string; color?: string }) {
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

function Invitation() {
  return (
    <main
      className="min-h-screen font-[Inter,sans-serif]"
      style={{ background: CREAM, color: INK }}
    >
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-8 px-5 py-10 sm:py-16">

        {/* ============ COVER (blue) ============ */}
        <section
          className="relative w-full overflow-hidden px-6 py-12 sm:px-12 sm:py-18"
          style={{ background: BLUE, color: "#f4f1e8" }}
        >
          {/* Blueprint grid */}
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
                "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%)",
            }}
          />

          <div className="relative border border-[#f4f1e8]/40 px-4 py-8 sm:px-8 sm:py-10">
            <CornerMark className="-left-2 -top-2" />
            <CornerMark className="-right-2 -top-2" />
            <CornerMark className="-left-2 -bottom-2" />
            <CornerMark className="-right-2 -bottom-2" />

            <div className="mb-5 flex justify-center">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
                <path d="M24 6 L40 18 L40 42 L8 42 L8 18 Z" stroke="#f4f1e8" strokeWidth="1.5" fill="none" />
                <rect x="14" y="24" width="5" height="6" fill="#f4f1e8" />
                <rect x="21.5" y="24" width="5" height="6" fill="#f4f1e8" />
                <rect x="29" y="24" width="5" height="6" fill="#f4f1e8" />
                <rect x="14" y="33" width="5" height="6" fill="#f4f1e8" />
                <rect x="21.5" y="33" width="5" height="9" fill="#f4f1e8" />
                <rect x="29" y="33" width="5" height="6" fill="#f4f1e8" />
              </svg>
            </div>

            <p className="text-center text-[10px] font-medium uppercase tracking-[0.32em] text-[#f4f1e8]/85 sm:text-xs">
              New York City Housing Authority
            </p>

            <div className="my-5 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#f4f1e8]/50 sm:w-20" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#f4f1e8]/70">
                Cordially Invites You
              </span>
              <span className="h-px w-12 bg-[#f4f1e8]/50 sm:w-20" />
            </div>

            <h1 className="text-center font-[Cormorant_Garamond,serif] text-5xl font-semibold leading-[0.95] tracking-tight text-[#f4f1e8] sm:text-7xl">
              Retirement
              <br />
              Celebration
            </h1>

            <div className="mx-auto my-6 flex items-center justify-center gap-3">
              <span className="h-px w-16 bg-[#f4f1e8]/60 sm:w-24" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[#f4f1e8]/80" />
              <span className="h-px w-16 bg-[#f4f1e8]/60 sm:w-24" />
            </div>

            <p className="text-center text-sm uppercase tracking-[0.28em] text-[#f4f1e8]/85">
              In Honor of
            </p>
            <p className="mt-2 text-center font-[Cormorant_Garamond,serif] text-3xl font-semibold text-[#f4f1e8] sm:text-4xl">
              Anita Wright-Antoine
            </p>
            <p className="mx-auto mt-3 max-w-md text-center font-[Cormorant_Garamond,serif] text-lg italic text-[#f4f1e8]/90 sm:text-xl">
              A Blueprint of Memories
              <br />
              and a Legacy of Excellence
            </p>
          </div>
        </section>

        {/* ============ DETAILS (cream) ============ */}
        <Card>
          <div className="mx-auto mb-5 flex flex-col items-center opacity-70" style={{ color: BLUE }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M12 2 L4 22 L20 22 Z M12 8 L8 22 M12 8 L16 22 M7 18 L17 18"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
            <span className="mt-2 h-px w-40 sm:w-56" style={{ background: "rgba(30,74,140,0.4)" }} />
          </div>

          <SectionTitle>The Details</SectionTitle>

          <dl className="mx-auto grid max-w-xl grid-cols-1 gap-y-5 sm:grid-cols-[110px_1fr] sm:gap-x-6">
            <DetailRow label="Date" value="Monday · June 29" />
            <DetailRow label="Time" value="12:00 PM – 2:00 PM" />
            <DetailRow label="Venue" value="Ros Niyom Thai Restaurant" />
            <DetailRow label="Address" value={ADDRESS} mono />
          </dl>
        </Card>

        {/* ============ MAP (cream) ============ */}
        <Card>
          <SectionTitle>Find Us</SectionTitle>

          <div className="relative mx-auto w-full max-w-xl">
            <div
              className="absolute -left-1.5 -top-5 text-[10px] uppercase tracking-[0.3em]"
              style={{ color: BLUE }}
            >
              Plot · 01
            </div>
            <div className="relative p-1.5" style={{ border: `1px solid ${BLUE}55` }}>
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
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 text-[11px] uppercase tracking-[0.28em] transition"
                style={{ background: BLUE, color: "#f4f1e8", border: `1px solid ${BLUE}` }}
              >
                Get Directions
              </a>
            </div>
          </div>
        </Card>

        {/* ============ LEGACY (cream) ============ */}
        <Card>
          <div className="text-center">
            <SectionTitle>Celebrating a Remarkable Career</SectionTitle>
            <p
              className="mb-4 text-[10px] uppercase tracking-[0.3em]"
              style={{ color: "rgba(30,74,140,0.7)" }}
            >
              Projects &amp; Milestones
            </p>
            <div
              className="flex flex-col items-center gap-2 font-[Cormorant_Garamond,serif] text-base sm:text-lg"
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

        <p
          className="text-center text-[10px] uppercase tracking-[0.3em]"
          style={{ color: "rgba(30,74,140,0.55)" }}
        >
          Drawing No. AWA-2026 · Sheet 01 of 01
        </p>
      </div>
    </main>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="relative w-full px-6 py-8 sm:px-10 sm:py-10"
      style={{ background: CREAM, border: `1px solid ${BLUE}40` }}
    >
      <CornerMark className="-left-2 -top-2" color={BLUE} />
      <CornerMark className="-right-2 -top-2" color={BLUE} />
      <CornerMark className="-left-2 -bottom-2" color={BLUE} />
      <CornerMark className="-right-2 -bottom-2" color={BLUE} />
      {children}
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mb-6 text-center font-[Cormorant_Garamond,serif] text-3xl"
      style={{ color: BLUE }}
    >
      {children}
    </h2>
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
        className="text-[10px] uppercase tracking-[0.32em] sm:text-right"
        style={{ color: "rgba(30,74,140,0.7)" }}
      >
        {label}
      </dt>
      <dd
        className={`pb-2 text-base sm:text-lg ${
          mono ? "font-mono text-sm sm:text-base" : "font-[Cormorant_Garamond,serif]"
        }`}
        style={{ color: INK, borderBottom: "1px dotted rgba(30,74,140,0.3)" }}
      >
        {value}
      </dd>
    </>
  );
}
