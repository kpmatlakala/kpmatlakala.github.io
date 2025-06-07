// src/SymbolCircle.js
import React from 'react';

import './SymbolCircle.css';

const circles = [
  {
    symbols: ['<', '.', '>', '⌂' ,'<', '.' , '>' , '⌂' ,'<' , '.', '>' , '⌂' ,'<', '.', '>' , '⌂' ,'<', '.', '>' , '⌂' ,'<', '.', '>' , '⌂' , '<', '.' , '>' , '⌂' ,'<' , '.', '>' , '⌂' ,'<', '.', '>','<', '.', '>' , '⌂' , '<', '.', '>' , '⌂' ,'<', '.', '>' , '⌂' ,'<', '.', '>' , '⌂' ,'<', '.', '>' , '⌂' ,'<', '.', '>' , '⌂' ,'<', '.', '>' , '⌂' , ], // sequence '<', '.', '>', '⌂' 
    radius: 300,
    rotationSpeed: 24, // seconds for one rotation
  },
  {
    symbols: ['°', '‸','^', '‸', '°','‸', '^','‸', '°','‸', '^','‸', '°', '‸', '^','‸', '°', '‸', '^', '‸','°', '‸', '^', '‸','°', '‸','^','‸','°', '‸','^','‸', ], // ‗⌊⏓⌋‗ ⁆»«‣⁌⁍⁽⁾~⏖⁅ sequence '<', '.', '>', '⌂' 
    radius: 325,
    rotationSpeed: 30, // seconds for one rotation
  },
  {
    symbols: ['///','///','///','///','///','///', '///','///','///','///','///','///','///','///','///','///','///','///','///','///','///','///','///','///','///','///','///',],
    radius: 365,
    rotationSpeed: 16,
  },
  {
    symbols: ['⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩','⟨','⟩'], // sequence '⟨','⟩'
    radius: 400,
    rotationSpeed: 22, // seconds for one rotation
  },
  {
    symbols: ['\\\\', '**', '\\\\', '**', '\\\\', '**', '\\\\', '**','\\\\', '**', '\\\\', '**', '\\\\', '**', '\\\\', '**', '\\\\', '**', '\\\\','**','\\\\','**', '\\\\','**','\\\\', '**','\\\\', '**','\\\\', '**','\\\\','**','\\\\', '**','\\\\','**','\\\\', '**','\\\\', '**','\\\\', '**','\\\\','**','\\\\','**', '\\\\','**','\\\\', '**','\\\\','**', '\\\\', '**','\\\\','**','\\\\', '**','\\\\',],
    radius: 435,
    rotationSpeed: 15,
  },
  {
    symbols: [ '{', '<>','⁕', '<>', '}', '||','{', '<>', '⁕', '<>', '}', '||','{', '<>', '⁕', '<>', '}', '||','{', '<>','⁕', '<>', '}', '||','{', '<>', '⁕', '<>', '}', '||', '{', '<>', '⁕', '<>', '}', '||', '{', '<>', '⁕', '<>', '}', '||','{', '<>', '⁕', '<>', '}',],  //sequence: '{', '<>', '<>', '}', '||'
    radius: 460,
    rotationSpeed: 64,
  },
];

// Function to calculate the position of each symbol in a uniform circular arrangement
const generateSymbolPosition = (radius, totalSymbols, index) => {
  // Calculate the angle between each symbol
  const angle = (index / totalSymbols) * 2 * Math.PI;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);
  return { x, y, angle };
};

const SymbolCircle = () => {
  return (
    <div className={`circle-container`}>
      {circles.map((circle, index) => {
        const { symbols, radius, rotationSpeed } = circle;

        return (
          <div
            key={index}
            className={`symbol-circle symbol-circle-${index}`}
            style={{
              width: `${2 * radius}px`,
              height: `${2 * radius}px`,
              animation: `rotateCircle  ${rotationSpeed}s infinite linear`,
            }}
          >
            {symbols.map((symbol, symbolIndex) => {
              // Ensure equal spacing for all symbols
              const { x, y, angle } = generateSymbolPosition(radius, symbols.length, symbolIndex);

              // Rotate the symbol to face the center of the circle
              const symbolRotation = angle + Math.PI / 2; // Keeps the symbols upright with respect to the circle

              return (
                <div
                  key={symbolIndex}
                  className="symbol"
                  style={{
                    transform: `translate(${x}px, ${y}px) rotate(${symbolRotation}rad)`,
                  }}
                >
                  {symbol}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default SymbolCircle;
