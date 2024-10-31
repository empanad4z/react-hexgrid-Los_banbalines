import React, { useState, useEffect } from 'react';
import { HexGrid, Layout, Hexagon, Text } from 'react-hexgrid';
import './App.css';

function App() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  
  // Calcula el tamaño del hexágono, asegurándote de que x e y sean iguales para que sea cuadrado
  const hexagonDimension = Math.min(size.width / 100, size.height / 80); // Ajusta los valores según sea necesario
  const hexagonSize = { x: hexagonDimension, y: hexagonDimension };

  useEffect(() => {
    // Ajusta el tamaño en el redimensionado de la ventana
    const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const zeroto5 = Array(6).fill(0).map((_, index) => index);

  // Ajusta el viewBox de manera responsiva
  const viewBoxWidth = size.width / 8;
  const viewBoxHeight = size.height / 8;
  const viewBox = `${size.width >= 480 ? "-10" : "-5"} -10 ${viewBoxWidth} ${viewBoxHeight}`;

  return (
    <div className="App">
      <HexGrid className='board-grid' width={size.width} height={size.height} viewBox={viewBox}>
        <Layout className="hexagon-group" size={hexagonSize} flat={false} spacing={1}>
          {zeroto5.map((i) => (
            <Hexagon key={`${i}-0`} q={i} r={0} s={0}>
            </Hexagon>
          ))}
          {zeroto5.map((i) => (
            <Hexagon key={`${i}-1`} q={i} r={1} s={0}>
            </Hexagon>
          ))}
          {zeroto5.filter((i) => i < 5).map((i) => (
            <Hexagon key={`${i}-2`} q={i} r={2} s={0}>
            </Hexagon>
          ))}
          {zeroto5.filter((i) => i < 4).map((i) => (
            <Hexagon key={`${i}-3`} q={i} r={3} s={0}>
            </Hexagon>
          ))}
          {zeroto5.filter((i) => i < 3).map((i) => (
            <Hexagon key={`${i}-4`} q={i} r={4} s={0}>
            </Hexagon>
          ))}
        </Layout>
      </HexGrid>
    </div>
  );
}

export default App;
