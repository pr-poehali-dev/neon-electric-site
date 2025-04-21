import React, { useEffect, useRef } from 'react';

const LightningAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full width/height
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    let lightning: { x: number, y: number, xRange: number, yRange: number, path: number[][], pathLimit: number }[] = [];
    let lightningTimer = 0;
    
    // Create a new lightning bolt
    const createLightning = () => {
      const centerX = canvas.width * 0.5;
      const centerY = canvas.height * 0.4;
      
      return {
        x: centerX,
        y: 0,
        xRange: centerX * 0.3,
        yRange: centerY * 0.05,
        path: [[centerX, 0]],
        pathLimit: 30,
      };
    };
    
    // Render a frame
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Background glow for the map
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.5, 10,
        canvas.width * 0.5, canvas.height * 0.5, canvas.width * 0.7
      );
      gradient.addColorStop(0, 'rgba(0, 150, 255, 0.1)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw map outline (simplified Kolpino district)
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(30, 120, 255, 0.5)';
      ctx.lineWidth = 2;
      
      // Simplified map of Kolpino district
      ctx.moveTo(canvas.width * 0.2, canvas.height * 0.2);
      ctx.lineTo(canvas.width * 0.8, canvas.height * 0.2);
      ctx.lineTo(canvas.width * 0.9, canvas.height * 0.4);
      ctx.lineTo(canvas.width * 0.8, canvas.height * 0.8);
      ctx.lineTo(canvas.width * 0.2, canvas.height * 0.8);
      ctx.lineTo(canvas.width * 0.1, canvas.height * 0.4);
      ctx.closePath();
      ctx.stroke();
      
      // Draw some internal district divisions
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(30, 120, 255, 0.3)';
      ctx.lineWidth = 1;
      ctx.moveTo(canvas.width * 0.5, canvas.height * 0.2);
      ctx.lineTo(canvas.width * 0.5, canvas.height * 0.8);
      ctx.moveTo(canvas.width * 0.2, canvas.height * 0.5);
      ctx.lineTo(canvas.width * 0.8, canvas.height * 0.5);
      ctx.stroke();
      
      // Label
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.font = '14px Orbitron';
      ctx.textAlign = 'center';
      ctx.fillText('Колпинский район', canvas.width * 0.5, canvas.height * 0.5);
      
      // Draw lightning
      if (lightning.length > 0) {
        for (let i = 0; i < lightning.length; i++) {
          const light = lightning[i];
          
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(0, 194, 255, 0.9)';
          ctx.lineWidth = 5;
          ctx.shadowBlur = 20;
          ctx.shadowColor = '#00c2ff';
          
          for (let j = 0; j < light.path.length; j++) {
            ctx.lineTo(light.path[j][0], light.path[j][1]);
          }
          
          ctx.stroke();
          ctx.shadowBlur = 0;
          
          // Secondary glow
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
          ctx.lineWidth = 2;
          
          for (let j = 0; j < light.path.length; j++) {
            ctx.lineTo(light.path[j][0], light.path[j][1]);
          }
          
          ctx.stroke();
        }
      }
      
      // Create new lightning after delay
      lightningTimer++;
      if (lightningTimer > 30) {
        lightning = [];
        createLightningBolt();
        lightningTimer = 0;
      }
      
      requestAnimationFrame(render);
    };
    
    // Create lightning with path
    const createLightningBolt = () => {
      const bolt = createLightning();
      
      // Create path
      let y = 0;
      const pathCount = Math.floor(Math.random() * 3) + 3;
      const segmentHeight = canvas.height / pathCount;
      
      for (let i = 0; i < pathCount; i++) {
        const x = bolt.x + (Math.random() * bolt.xRange - bolt.xRange / 2);
        y += segmentHeight;
        bolt.path.push([x, y]);
      }
      
      lightning.push(bolt);
    };
    
    // Start animation
    createLightningBolt();
    render();
    
    // Handle resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-[400px] bg-black/30 rounded-lg shadow-xl"
    />
  );
};

export default LightningAnimation;
