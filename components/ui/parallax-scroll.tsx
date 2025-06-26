"use client";
// Remove motion/react imports since we won't use parallax

import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  // Slower animation durations (seconds)
  const durations = [60, 80, 70];
  // Animation directions: up, down, up
  const directions = ["up", "down", "up"];

  // Helper to get animation style
  const getAnimStyle = (colIdx: number) => {
    const dir = directions[colIdx];
    const animName = dir === "up" ? `marquee-vert-up` : `marquee-vert-down`;
    return {
      animation: `${animName} linear infinite`,
      animationDuration: `${durations[colIdx]}s`,
    };
  };

  // Increased height for columns and gap between cards
  const columnHeight = 1100;
  const cardGap = 40;

  return (
    <div className={cn("relative items-start w-full", className)}>
      {/* Strong blur overlays for top and bottom */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-30 h-32 bg-gradient-to-b from-white/80 to-transparent backdrop-blur-lg" />
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 z-30 h-32 bg-gradient-to-t from-white/80 to-transparent backdrop-blur-lg" />
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto py-40 px-10 gap-10"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
        }}
      >
        {/* First column (up) */}
        <div className="grid overflow-hidden" style={{height: columnHeight}}>
          <div className="flex flex-col" style={{...getAnimStyle(0), gap: cardGap}}>
            {[...firstPart, ...firstPart].map((el, idx) => (
              <div key={"grid-1" + idx}>
                <img
                  src={el}
                  className="h-80 w-full object-cover object-left-top rounded-lg !m-0 !p-0"
                  height="400"
                  width="400"
                  alt="thumbnail"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Second column (down) */}
        <div className="grid overflow-hidden" style={{height: columnHeight}}>
          <div className="flex flex-col" style={{...getAnimStyle(1), gap: cardGap}}>
            {[...secondPart, ...secondPart].map((el, idx) => (
              <div key={"grid-2" + idx}>
                <img
                  src={el}
                  className="h-80 w-full object-cover object-left-top rounded-lg !m-0 !p-0"
                  height="400"
                  width="400"
                  alt="thumbnail"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Third column (up) */}
        <div className="grid overflow-hidden" style={{height: columnHeight}}>
          <div className="flex flex-col" style={{...getAnimStyle(2), gap: cardGap}}>
            {[...thirdPart, ...thirdPart].map((el, idx) => (
              <div key={"grid-3" + idx}>
                <img
                  src={el}
                  className="h-80 w-full object-cover object-left-top rounded-lg !m-0 !p-0"
                  height="400"
                  width="400"
                  alt="thumbnail"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes marquee-vert-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marquee-vert-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
