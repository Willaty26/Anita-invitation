import { createFileRoute } from "@tanstack/react-router";

const ADDRESS = "10-91 Jackson Ave, Long Island City, NY 11101";
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

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

function CornerMark({ className }: { className: string }) {
  return (
    <span
      className={`absolute h-4 w-4 ${className}`}
      aria-hidden
      style={{
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
    <main className="relative min-h-screen overflow-hidden bg-[#0d2a52] text-[#f4f1e8] font-[Inter,sans-serif]">
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
      {/* Vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      {/* Architectural elevations decoration */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 w-full opacity-30"
        viewBox="0 0 1200 140"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <g className="text-[#f4f1e8]">
          <path d="M20 130 L20 60 L120 60 L120 30 L260 30 L260 60 L380 60 L380 80 L520 80 L520 50 L640 50 L640 130 Z" />
          <path d="M40 130 L40 90 L80 90 L80 130 M150 130 L150 90 L190 90 L190 130 M290 130 L290 75 L340 75 L340 130 M420 130 L420 95 L470 95 L470 130 M560 130 L560 95 L610 95 L610 130" />
          <path d="M700 130 L700 70 L820 70 L820 40 L960 40 L960 70 L1080 70 L1080 90 L1180 90 L1180 130 Z" />
          <path d="M730 130 L730 95 L780 95 L780 130 M860 130 L860 80 L920 80 L920 130 M1000 130 L1000 95 L1050 95 L1050 130 M1110 130 L1110 105 L1150 105 L1150 130" />
        </g>
      </svg>
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 w-full opacity-25 rotate-180"
        viewBox="0 0 1200 140"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <g className="text-[#f4f1e8]">
          <path d="M20 130 L20 60 L160 60 L160 30 L320 30 L320 70 L500 70 L500 50 L680 50 L680 130 Z" />
          <path d="M720 130 L720 80 L880 80 L880 50 L1040 50 L1040 90 L1180 90 L1180 130 Z" />
        </g>
      </svg>

      <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center px-5 py-10 sm:py-16">
        {/* Frame */}
        <div className="relative w-full border border-[#f4f1e8]/40 px-6 py-10 sm:px-12 sm:py-14">
          <CornerMark className="-left-2 -top-2 text-[#f4f1e8]" />
          <CornerMark className="-right-2 -top-2 text-[#f4f1e8]" />
          <CornerMark className="-left-2 -bottom-2 text-[#f4f1e8]" />
          <CornerMark className="-right-2 -bottom-2 text-[#f4f1e8]" />

          {/* Building icon */}
          <div className="mb-6 flex justify-center">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
              <path
                d="M24 6 L40 18 L40 42 L8 42 L8 18 Z"
                stroke="#f4f1e8"
                strokeWidth="1.5"
                fill="none"
              />
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

          <h1 className="text-center font-[Cormorant_Garamond,serif] text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl">
            Retirement
            <br />
            Celebration
          </h1>

          <div className="mx-auto my-7 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#f4f1e8]/60 sm:w-24" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#f4f1e8]/80" />
            <span className="h-px w-16 bg-[#f4f1e8]/60 sm:w-24" />
          </div>

          <p className="text-center text-sm uppercase tracking-[0.28em] text-[#f4f1e8]/85">
            In Honor of
          </p>
          <p className="mt-3 text-center font-[Cormorant_Garamond,serif] text-3xl font-semibold sm:text-4xl">
            Anita Wright-Antoine
          </p>
          <p className="mx-auto mt-3 max-w-md text-center font-[Cormorant_Garamond,serif] text-lg italic text-[#f4f1e8]/90 sm:text-xl">
            A Blueprint of Memories
            <br />
            and a Legacy of Excellence
          </p>

          {/* Antenna divider */}
          <div className="mx-auto my-8 flex flex-col items-center text-[#f4f1e8]/70">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M12 2 L4 22 L20 22 Z M12 8 L8 22 M12 8 L16 22 M7 18 L17 18"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
            <span className="mt-2 h-px w-40 bg-[#f4f1e8]/40 sm:w-56" />
          </div>

          {/* Details cartouche */}
          <dl className="mx-auto grid max-w-xl grid-cols-1 gap-y-5 sm:grid-cols-[110px_1fr] sm:gap-x-6">
            <DetailRow label="Date" value="Monday · June 29" />
            <DetailRow label="Time" value="12:00 PM – 2:00 PM" />
            <DetailRow label="Venue" value="The Bordone LIC" />
            <DetailRow label="Address" value={ADDRESS} mono />
            <DetailRow label="Attire" value="Cocktail · Blueprint Blue Encouraged" />
          </dl>

          {/* Map */}
          <div className="relative mx-auto mt-10 w-full max-w-xl">
            <div className="absolute -left-1.5 -top-1.5 text-[10px] uppercase tracking-[0.3em] text-[#f4f1e8]/80">
              Plot · 01
            </div>
            <div className="relative border border-[#f4f1e8]/40 p-1.5">
              <CornerMark className="-left-1.5 -top-1.5 text-[#f4f1e8]" />
              <CornerMark className="-right-1.5 -top-1.5 text-[#f4f1e8]" />
              <CornerMark className="-left-1.5 -bottom-1.5 text-[#f4f1e8]" />
              <CornerMark className="-right-1.5 -bottom-1.5 text-[#f4f1e8]" />
              <div className="relative overflow-hidden">
                <iframe
                  title="Map to The Bordone LIC"
                  src={MAPS_EMBED}
                  className="block h-64 w-full sm:h-80"
                  style={{
                    border: 0,
                    filter:
                      "grayscale(1) invert(0.92) sepia(0.4) hue-rotate(180deg) saturate(2.5) brightness(0.85) contrast(1.05)",
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(13,42,82,0.25), rgba(13,42,82,0.1) 40%, rgba(13,42,82,0.35))",
                  }}
                />
              </div>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="border border-[#f4f1e8]/70 px-5 py-2 text-[11px] uppercase tracking-[0.28em] text-[#f4f1e8] transition hover:bg-[#f4f1e8] hover:text-[#0d2a52]"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Footer key */}
          <div className="mt-12 flex flex-col items-center gap-2 border-t border-[#f4f1e8]/25 pt-6 text-[10px] uppercase tracking-[0.3em] text-[#f4f1e8]/60">
            <span>Drawing No. AWA-2026 · Sheet 01 of 01</span>
            <span>Celebrating a Remarkable Career</span>
          </div>
        </div>
      </div>
    </main>
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
      <dt className="text-[10px] uppercase tracking-[0.32em] text-[#f4f1e8]/60 sm:text-right">
        {label}
      </dt>
      <dd
        className={`border-b border-dotted border-[#f4f1e8]/30 pb-2 text-base text-[#f4f1e8] sm:text-lg ${
          mono ? "font-mono text-sm sm:text-base" : "font-[Cormorant_Garamond,serif]"
        }`}
      >
        {value}
      </dd>
    </>
  );
}
