import { useEffect, useRef } from "react";

interface SectionMatrixRainProps {
  opacity?: number;
  speed?: number;
  density?: "low" | "medium" | "high";
}

export function SectionMatrixRain({ 
  opacity = 0.3, 
  speed = 1,
  density = "medium" 
}: SectionMatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    updateSize();

    const densityMap = {
      low: 40,
      medium: 25,
      high: 18,
    };

    const columnWidth = densityMap[density];
    const columns = Math.floor(canvas.width / columnWidth);
    const drops: number[] = Array(columns).fill(1).map(() => Math.random() * -50);

    function draw() {
      if (!ctx || !canvas) return;

      // Trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = "bold 14px monospace";
      
      for (let i = 0; i < drops.length; i++) {
        // Binary digits only
        const binary = Math.random() > 0.5 ? "1" : "0";
        
        // Vary opacity for depth
        const alpha = opacity * (0.7 + Math.random() * 0.6);
        ctx.fillStyle = `rgba(0, 255, 102, ${alpha})`;
        
        // Glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#00ff66";
        
        const x = i * columnWidth;
        const y = drops[i] * 16;
        
        ctx.fillText(binary, x, y);
        
        // Reset drop
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i] += speed * 0.5;
      }
      
      ctx.shadowBlur = 0;
    }

    const interval = setInterval(draw, 40);

    const resizeObserver = new ResizeObserver(updateSize);
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    return () => {
      clearInterval(interval);
      resizeObserver.disconnect();
    };
  }, [opacity, speed, density]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
