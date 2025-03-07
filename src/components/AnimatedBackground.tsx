
import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', setCanvasSize);
    setCanvasSize();

    // Money symbols to use
    const symbols = ['$', '€', '¥', '£', '₿', '₽', '₹', '₴', '₮'];
    
    // Particle class for the money symbols
    class Particle {
      x: number;
      y: number;
      symbol: string;
      size: number;
      color: string;
      speed: number;
      opacity: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
        this.size = Math.random() * 14 + 8;
        
        // Neon colors
        const colors = [
          'rgba(10, 255, 233, 0.8)',  // cyan
          'rgba(255, 44, 223, 0.8)',  // magenta
          'rgba(46, 119, 245, 0.8)',  // blue
          'rgba(255, 204, 0, 0.8)',   // yellow
          'rgba(35, 209, 140, 0.8)'   // green
        ];
        
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speed = Math.random() * 0.5 + 0.2;
        this.opacity = Math.random() * 0.5 + 0.2;
      }
      
      update() {
        this.y += this.speed;
        
        // Reset when symbol reaches bottom
        if (this.y > canvas.height) {
          this.y = -this.size;
          this.x = Math.random() * canvas.width;
        }
      }
      
      draw() {
        if (!ctx) return;
        ctx.globalAlpha = this.opacity;
        ctx.font = `${this.size}px JetBrains Mono`;
        ctx.fillStyle = this.color;
        
        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        
        ctx.fillText(this.symbol, this.x, this.y);
        
        // Reset shadow for better performance
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }
    }
    
    // Create particles
    const particles: Particle[] = [];
    const particleCount = Math.min(50, Math.floor(window.innerWidth / 25)); // Responsive count
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Create grid lines
    class GridLine {
      x: number;
      y: number;
      vertical: boolean;
      length: number;
      color: string;
      speed: number;
      
      constructor(vertical: boolean) {
        this.vertical = vertical;
        
        if (vertical) {
          this.x = Math.random() * canvas.width;
          this.y = 0;
          this.length = canvas.height;
        } else {
          this.x = 0;
          this.y = Math.random() * canvas.height;
          this.length = canvas.width;
        }
        
        this.color = 'rgba(46, 119, 245, 0.15)';
        this.speed = Math.random() * 0.5 + 0.1;
      }
      
      update() {
        if (this.vertical) {
          this.x += this.speed;
          if (this.x > canvas.width) {
            this.x = 0;
          }
        } else {
          this.y += this.speed;
          if (this.y > canvas.height) {
            this.y = 0;
          }
        }
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;
        
        if (this.vertical) {
          ctx.moveTo(this.x, 0);
          ctx.lineTo(this.x, this.length);
        } else {
          ctx.moveTo(0, this.y);
          ctx.lineTo(this.length, this.y);
        }
        
        ctx.stroke();
      }
    }
    
    // Create grid lines
    const gridLines: GridLine[] = [];
    const gridLineCount = 20;
    
    for (let i = 0; i < gridLineCount; i++) {
      gridLines.push(new GridLine(i % 2 === 0));
    }
    
    // Animation loop
    let animationFrameId: number;
    
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      ctx.fillStyle = 'rgba(14, 14, 18, 0.97)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw grid lines
      gridLines.forEach(line => {
        line.update();
        line.draw();
      });
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Create laser scan line effect
      const scanOffset = Date.now() % 6000 / 6000;
      const scanY = scanOffset * canvas.height;
      
      ctx.beginPath();
      const gradient = ctx.createLinearGradient(0, scanY - 10, 0, scanY + 10);
      gradient.addColorStop(0, 'rgba(10, 255, 233, 0)');
      gradient.addColorStop(0.5, 'rgba(10, 255, 233, 0.8)');
      gradient.addColorStop(1, 'rgba(10, 255, 233, 0)');
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.moveTo(0, scanY);
      ctx.lineTo(canvas.width, scanY);
      ctx.stroke();
      
      animationFrameId = window.requestAnimationFrame(render);
    };
    
    render();
    
    // Cleanup
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default AnimatedBackground;
