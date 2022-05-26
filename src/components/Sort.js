import React from "react";

function SortName({nameClick,nameState}){
    return(
        <form>
            Name<input type={"checkbox"} value={nameState} onClick={nameClick} />
        </form>
    )
}
function SortWeight({weightClick,weightState}){
    return(
        <form>
            Weight<input type={"checkbox"} value={weightState} onClick={weightClick} />
        </form>
    )
}

function Sort({weightClick,weightState,nameClick,nameState}){
    return(
        <div>
            <text>Sort by:</text>
                <SortName nameClick={nameClick} nameState={nameState} />
                -or-
                <SortWeight weightClick={weightClick} weightState={weightState} />
        </div>
    )
}

export default Sort;