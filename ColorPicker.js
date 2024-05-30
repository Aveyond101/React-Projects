import { useEffect, useState } from 'react';

const ColorPicker = () => {

    const colorMap = {};
    const selectedColors = {};

    //const [randomColors, setRandomColors] = useState([]);
    const [selected, setSelected] = useState([]);


    let randomColorString = "#";
    const arrayOfColorFunctions = "0123456789abcdef";
    for (let x = 0; x < 6; x++) {
        let index = Math.floor(Math.random() * 16);
        let value = arrayOfColorFunctions[index];
        randomColorString += value;
        
    }
   
    

   


    return (
        <div className = 'ColorGame'> 
            
            
            Welcome to the Color Picker!
            <h1 style={{color: 'red'}} >Hello!</h1>
            <button>{randomColorString}</button>
            <button>{randomColorString}</button>
            <button>{randomColorString}</button>





        </div>

    );
}

export default ColorPicker;