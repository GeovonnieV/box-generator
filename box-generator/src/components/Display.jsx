import React from "react";

const Display = ({boxColors}) => {

    const boxContainerStyle = {
        // background: "red",
        width:"50%",
        margin: "0 auto",
        marginTop: "2em",
        display:"flex",
        justifyContent: "space-between"
    }

    return(
        <div className="box-container" style={boxContainerStyle}>
            {boxColors.map((color,index) => (
                <div
                 className="box" 
                 style={{width:"25%", height:"200px" ,background:`${color}`, textAlign:"center"}}
                 >
                     {color}
                </div>
            ))}
        </div>
    )
}

export default Display;