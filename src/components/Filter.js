import React from "react";

function Filter({filterClick, filterState}){
    return(
        <label>
        <text> Filter Greased </text>
        <input type={"checkbox"} onClick={filterClick} value={filterState} />
        </label>
    )
}

export default Filter;