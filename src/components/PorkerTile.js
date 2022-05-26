import React, {useState} from "react";
import MiniTile from "./MiniTile";

function PorkerTile({ hog }){
    const [showMini, setShowMini] = useState(false);
    function toggleMiniTile(){
        console.log(`the hog is ${hog.name}`);
        console.log(hog);
        setShowMini(!showMini);
    }
    
    return(
        <li className="ui eight wide column">
        <span className="pigTile" onClick={toggleMiniTile}>
            <h3>{hog.name}</h3>
            <img src={hog.image} alt={hog.name} />
            {showMini? <MiniTile hog={hog} /> : ""}
        </span>
        </li>
    )
}

export default PorkerTile;