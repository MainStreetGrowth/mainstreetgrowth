type Props = {
  size?: number;
  ring?: string;    // ring, ticks, hub stroke
  north?: string;   // north needle (accent)
  south?: string;   // south needle
  hub?: string;     // hub fill (usually the background color)
};

export default function CompassMark({
  size = 30,
  ring = "#1E3A2F",
  north = "#C4713E",
  south = "#1E3A2F",
  hub = "#FBF4E9",
}: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" aria-hidden="true" style={{ display: "block" }}>
      <circle cx="64" cy="64" r="56" fill="none" stroke={ring} strokeWidth={7} />
      <g stroke={ring} strokeWidth={7} strokeLinecap="round">
        <line x1="64" y1="3" x2="64" y2="18" />
        <line x1="64" y1="110" x2="64" y2="125" />
        <line x1="3" y1="64" x2="18" y2="64" />
        <line x1="110" y1="64" x2="125" y2="64" />
      </g>
      <polygon points="64,22 76,64 52,64" fill={north} />
      <polygon points="64,106 76,64 52,64" fill={south} />
      <circle cx="64" cy="64" r="8.5" fill={hub} stroke={ring} strokeWidth={5} />
    </svg>
  );
}
