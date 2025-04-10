
import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

interface P5BackgroundProps {
  className?: string;
}

const P5Background: React.FC<P5BackgroundProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Only create sketch if container exists
    if (!containerRef.current) return;
    
    const sketch = (p: p5) => {
      let particles: Particle[] = [];
      const particleCount = 100;
      
      class Particle {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        opacity: number;
        
        constructor() {
          this.x = p.random(p.width);
          this.y = p.random(p.height);
          this.size = p.random(2, 6);
          this.speedX = p.random(-0.3, 0.3);
          this.speedY = p.random(-0.3, 0.3);
          this.opacity = p.random(20, 60);
        }
        
        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          
          // Wrap around edges
          if (this.x < 0) this.x = p.width;
          if (this.x > p.width) this.x = 0;
          if (this.y < 0) this.y = p.height;
          if (this.y > p.height) this.y = 0;
        }
        
        display() {
          p.noStroke();
          p.fill(255, 255, 255, this.opacity);
          p.ellipse(this.x, this.y, this.size);
        }
        
        connect(particles: Particle[]) {
          particles.forEach(particle => {
            const d = p.dist(this.x, this.y, particle.x, particle.y);
            if (d < 150) {
              p.stroke(255, 255, 255, p.map(d, 0, 150, 50, 0));
              p.line(this.x, this.y, particle.x, particle.y);
            }
          });
        }
      }
      
      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.position(0, 0);
        canvas.style('z-index', '-1');
        
        // Create particles
        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle());
        }
      };
      
      p.draw = () => {
        p.clear();
        
        // Update and display particles
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].display();
          particles[i].connect(particles.slice(i + 1));
        }
      };
      
      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };
    
    const p5Instance = new p5(sketch, containerRef.current);
    
    return () => {
      p5Instance.remove();
    };
  }, []);
  
  return <div ref={containerRef} className={className} />;
};

export default P5Background;
