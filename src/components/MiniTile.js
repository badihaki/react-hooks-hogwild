import React from "react";

function MiniTile({hog}){
    function displayColor(){
        if( hog['highest medal achieved'] === "bronze")
            {return "coral";}
        else if(hog['highest medal achieved']==="silver")
            {return "silver";}
        else if(hog['highest medal achieved']==="gold")
            {return "gold";}
        else if(hog['highest medal achieved']==="platinum")
            {return "#E5E4E2";}
        else return "black";
    }

    const medalStyle = {
        color: `${displayColor}`,
        fontWeight: 'bold'
    }

    return(
        <span className="minPigTile">
            <h4>Specialty: {hog.specialty}</h4>
            <p>Weight: {hog.weight}</p>
            <p>{hog.greased? "Greased Up!":"Needs Grease!"}</p>
            <p>Highest Medal Achieved: <text style={medalStyle}>{hog['highest medal achieved']}</text></p>
        </span>
    )
}

export default MiniTile;