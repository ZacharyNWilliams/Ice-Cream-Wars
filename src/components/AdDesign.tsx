import { useState } from "react";
import { Ad } from "./Ad";

export function AdDesign(){


    const [flavor, setFlavor] = useState<string>('Choose A flavor');
    
    const [fontSize, setFontSize] = useState<number>(24);

    const[isDark, setIsDark] = useState<boolean>(true);
    const [theme, setTheme] = useState(false);

    

    return (
        <div id="AdDesign">
        <h2>Ad Design</h2>

        <h2>What to support</h2>
        <Ad flavor = {flavor} darkTheme = {true} fontSize = {fontSize}/>
        

        <div className="button-bar">
        <button onClick={() => setFlavor("Chocolate")}>Chocolate</button>
        <button onClick={() => setFlavor("Strawberry")}>Strawberry</button>
        <button onClick={() => setFlavor("Vanilla")}>Vanilla</button>

        </div>

        <section className="ColorTheme ">
        <p>Color Theme:</p>
        <div></div>
        <button disabled={isDark === false} onClick={() => setIsDark(false)}>
          Light
        </button>
        :
        <button disabled={isDark === true} onClick={() =>setIsDark(true)}>
          Dark
        </button>
        <div></div>
      </section>

        <h2>Font Size</h2>
        <div className="button-bar">
        <button onClick={() => setFontSize(fontSize +1)}>Up</button>
      
        <input type="number"></input>
        <button onClick={() => setFontSize(fontSize -1)}>Down</button>
        </div>
        </div>
    )
}