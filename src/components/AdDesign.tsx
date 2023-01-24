import { useState } from "react";
import { Ad } from "./Ad";

export function AdDesign(){


    const [flavor, setFlavor] = useState<string>('vanilla');
    const[isLight, setIsLight] = useState<boolean>(true);
    const [fontSize, setFontSize] = useState<number>(24);

    

    return (
        <div id="AdDesign">
        <h2>Ad Design</h2>

        <h2>What to support</h2>
        <Ad flavor = {flavor} isLight = {isLight} fontSize = {fontSize}/>


        <div className="button-bar">
        <button onClick={() => setFlavor("Chocolate")}>Chocolate</button>
        <button onClick={() => setFlavor("Strawberry")}>Strawberry</button>
        <button onClick={() => setFlavor("Vanilla")}>Vanilla</button>

        </div>

        <h2>Color Theme</h2>
        <div className="button-bar">
        <button onClick={() => setIsLight(true)}>Light</button>
        <button onClick={() => setIsLight(false)}>Dark</button>
        </div>

        <h2>Font Size</h2>
        <div className="button-bar">
        <button onClick={() => setFontSize(fontSize +1)}>Up</button>
      
        <input type="number"></input>
        <button onClick={() => setFontSize(fontSize -1)}>Down</button>
        </div>
        </div>
    )
}