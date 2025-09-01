import { useEffect, useState } from 'react';

const FloatingShapes = () => {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const generateShapes = () => {
      const newShapes = [];
      for (let i = 0; i < 6; i++) {
        newShapes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 60 + 40,
          rotation: Math.random() * 360,
          animationDelay: Math.random() * 20,
          shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
          color: ['rgba(100, 200, 255, 0.1)', 'rgba(255, 100, 200, 0.1)', 'rgba(100, 255, 200, 0.1)'][Math.floor(Math.random() * 3)]
        });
      }
      setShapes(newShapes);
    };

    generateShapes();
  }, []);

  const renderShape = (shape) => {
    const baseStyle = {
      position: 'absolute',
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      background: shape.color,
      animation: `float ${15 + shape.animationDelay}s ease-in-out infinite, rotate ${20 + shape.animationDelay}s linear infinite`,
      animationDelay: `${shape.animationDelay}s`,
    };

    switch (shape.shape) {
      case 'circle':
        return (
          <div
            key={shape.id}
            style={{
              ...baseStyle,
              borderRadius: '50%',
              border: '2px solid rgba(100, 200, 255, 0.2)',
            }}
          />
        );
      case 'square':
        return (
          <div
            key={shape.id}
            style={{
              ...baseStyle,
              border: '2px solid rgba(255, 100, 200, 0.2)',
              transform: `rotate(${shape.rotation}deg)`,
            }}
          />
        );
      case 'triangle':
        return (
          <div
            key={shape.id}
            style={{
              ...baseStyle,
              width: 0,
              height: 0,
              background: 'transparent',
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid ${shape.color}`,
              borderTop: '2px solid rgba(100, 255, 200, 0.2)',
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 1
    }}>
      {shapes.map(renderShape)}
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-15px) translateX(5px); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default FloatingShapes;
