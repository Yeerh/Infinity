return (
  <span
    ref={containerRef}
    className={className}
    style={{
      display: "inline-block",
      textAlign,
      color: "#ffffff", // FORÇA BRANCO NO CONTAINER
    }}
    aria-label={text}
  >
    {units.map((unit, i) => (
      <span
        key={`${unit}-${i}`}
        data-split
        style={{
          display: "inline-block",
          whiteSpace: unit === " " ? "pre" : "normal",
          color: "#ffffff", // FORÇA BRANCO EM CADA LETRA
        }}
      >
        {unit === " " ? "\u00A0" : unit}
      </span>
    ))}
  </span>
);
