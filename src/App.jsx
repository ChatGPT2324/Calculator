import React, { useState } from "react";

function App() {
  const symbols = ['+', '-', 'x', '÷', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'C', '=', '←'];
  const names = ['Addition', 'Subtraction', 'Multiplication', 'Division', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Zero', 'Clear', 'Equals', 'Backspace'];
  

  const [text, setText] = useState("");

  function handleClick(e) {
    const value = e.target.value;

    if (value === 'C') {
      setText("");
    } else if (value === '=') {
      try {
        const modifiedText = text.replace(/÷/g, '/').replace(/x/g, '*');
            setText(eval(modifiedText)); // Use eval to calculate the result
      } catch {
        setText(text.slice(0, -1)); // Handle invalid expressions
      }
    }
    else if (value === '←') {
      setText(text.slice(0, -1))  
    }
     else {
      setText(text + value); // Append clicked value to text
    }
  }

  const elements = symbols.map((element,index) => (
    <button style={{ fontFamily: 'SF Pro Rounded' }} id={names[index]} className="elements"key={element} value={element} onClick={handleClick}>{element}</button>
  ));

  return (
    <center>
        <div id="display-div">Calculator</div> 
      <div id="outer-div">
      <div id="inner-div">
        <input type="text" style={{ fontFamily: 'SF Pro Rounded' }}readOnly value={text} /><br />
        <div id="buttons">

        {elements}
        </div>
      </div>
      </div>
      <footer>Made By Prathamesh Kumbhar❤️</footer>
    </center>
  );
}

export default App;
