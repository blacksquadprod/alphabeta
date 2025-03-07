export const SunIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transform scale-75"
    >
      <circle cx="12" cy="12" r="5" fill="url(#sun_gradient)" />
      <g>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <line
            key={i}
            x1="12"
            y1="12"
            x2={12 + Math.cos((angle * Math.PI) / 180) * 8}
            y2={12 + Math.sin((angle * Math.PI) / 180) * 8}
            stroke="url(#ray_gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            transform={`rotate(${angle}, 12, 12)`}
          />
        ))}
      </g>
      <defs>
        <linearGradient
          id="sun_gradient"
          x1="12"
          y1="7"
          x2="12"
          y2="17"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD700" />
          <stop offset="1" stopColor="#FFA500" />
        </linearGradient>
        <linearGradient
          id="ray_gradient"
          x1="12"
          y1="12"
          x2="20"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD700" />
          <stop offset="1" stopColor="#FFA500" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}; 