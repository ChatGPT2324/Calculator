import React, { useState } from "react";

function App() {
  const symbols = ['AC', '%', '←', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '00', '0', '.', '='];
const names = ['All Clear', 'Percentage', 'Backspace', 'Division', 'Seven', 'Eight', 'Nine', 'Multiplication', 'Four', 'Five', 'Six', 'Subtraction', 'One', 'Two', 'Three', 'Addition', 'Double Zero', 'Zero', 'Decimal', 'Equals'];

  

  const [text, setText] = useState("");

  function handleClick(e) {
    const value = e.target.value;

    if (value === 'AC') {
      setText("");
    } else if (value === '=') {
      try{
        const modifiedText = text.replace(/÷/g, '/').replace(/x/g, '*');
        const result = eval(modifiedText);
        if (Number.isInteger(result)) {
          setText(result.toString()); // Show integer as is
        } else {
          setText(result.toFixed(2).replace(/\.?0+$/, "")); // Show only two decimals and remove trailing zeroes
        }
      } catch {
        setText("Error"); // Handle invalid expressions
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
