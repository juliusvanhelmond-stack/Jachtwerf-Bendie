/**
 * The Bendie logo, redrawn as a vector from the original 329×57 logo (bendie.nl):
 * the red line of a motor yacht on its waterline, with the spaced wordmark beneath.
 * The line is traced from the original pixels; the original letters are Bank Gothic,
 * set here in the display face as a close stand-in until the client supplies the source file.
 */
export function Logo({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  const text = tone === "light" ? "#ffffff" : "#0b1b26";
  return (
    <svg className={className} viewBox="0 0 329 57" role="img" aria-label="Jachtwerf Bendie">
      <path
        d="M0 35.5H202L187.5 18.5H221L228.5 11H260.5L271 1.5H311.5V4.5H300L306 18.5H321L328 35.5"
        fill="none"
        stroke="#ce2c33"
        strokeWidth="2.2"
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      />
      <text
        x="0"
        y="56"
        fill={text}
        textLength="329"
        lengthAdjust="spacing"
        style={{ fontFamily: "var(--font-display)", fontSize: "11.5px", fontWeight: 500 }}
      >
        JACHTWERF BENDIE
      </text>
    </svg>
  );
}
