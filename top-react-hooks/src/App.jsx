import React, { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [color, setColor] = useState("black");

  // has all of the major lifecycle methods from class components
  useEffect(() => {
    const changeColorOnClick = () => {
      if (color === "black") {
        setColor("red");
      } else {
        setColor("black");
      }
    };
    
    document.addEventListener("click", changeColorOnClick);

    // similar to componentWillUnmount 
    // used for removing event listeners and stored data
    return () => {
      document.removeEventListener("click",  changeColorOnClick);
    }
  
  }, [color]);

  return (
    <div>
      <div
        id='myDiv'
        style={{
          color: 'white',
          width: '100px',
          height: '100px',
          position: 'absolute',
          left: '50%',
          top: '50%',
          backgroundColor: color
        }}>
          This div can change color. Click on me!
      </div>
    </div>
  )
}

export default App
