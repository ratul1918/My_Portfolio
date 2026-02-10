import { useEffect, useRef } from "react";

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create three layers for depth effect
    const layers = [
      { 
        columns: Math.floor(canvas.width / 25), 
        fontSize: 16, 
        speed: 1, 
        opacity: 0.15,
        blur: 2 
      },
      { 
        columns: Math.floor(canvas.width / 20), 
        fontSize: 14, 
        speed: 1.5, 
        opacity: 0.25,
        blur: 0 
      },
      { 
        columns: Math.floor(canvas.width / 30), 
        fontSize: 12, 
        speed: 0.7, 
        opacity: 0.1,
        blur: 3 
      },
    ];

    const drops = layers.map(layer => Array(layer.columns).fill(1));

    function draw() {
      if (!ctx || !canvas) return;

      // Semi-transparent black for trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      layers.forEach((layer, layerIndex) => {
        const layerDrops = drops[layerIndex];
        
        // Set blur for depth
        ctx.filter = `blur(${layer.blur}px)`;
        
        ctx.font = `bold ${layer.fontSize}px monospace`;
        
        for (let i = 0; i < layerDrops.length; i++) {
          // Only use 0 and 1
          const binary = Math.random() > 0.5 ? "1" : "0";
          
          // Vary opacity slightly for more depth
          const opacityVariation = layer.opacity + (Math.random() * 0.1 - 0.05);
          ctx.fillStyle = `rgba(0, 255, 102, ${opacityVariation})`;
          
          // Add glow effect
          ctx.shadowBlur = 8;
          ctx.shadowColor = "#00ff66";
          
          const x = i * (canvas.width / layer.columns);
          const y = layerDrops[i] * layer.fontSize;
          
          ctx.fillText(binary, x, y);
          
          // Random reset for continuous effect
          if (y > canvas.height && Math.random() > 0.98) {
            layerDrops[i] = 0;
          }
          
          layerDrops[i] += layer.speed;
        }
      });
      
      // Reset filter
      ctx.filter = 'none';
      ctx.shadowBlur = 0;
    }

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reinitialize drops on resize
      layers.forEach((layer, index) => {
        const newColumns = Math.floor(canvas.width / (25 - index * 5));
        drops[index] = Array(newColumns).fill(1).map(() => Math.random() * canvas.height / layer.fontSize);
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}