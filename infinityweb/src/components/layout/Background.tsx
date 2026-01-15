import "@/components/ui/Dither.css";
import Dither from "@/components/ui/Dither";

export function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <Dither
        waveColor={[0.49411764705882355, 0, 0.9019607843137255]}
        disableAnimation={false}
        enableMouseInteraction
        mouseRadius={1}
        colorNum={4}
        pixelSize={2}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.05}
      />
      {/* overlay para legibilidade */}
      <div className="absolute inset-0 bg-[#060607]/70" />
    </div>
  );
}
