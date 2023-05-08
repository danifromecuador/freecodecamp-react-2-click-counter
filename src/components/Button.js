// import React from "react";

const Button = ({value, fn}) => {
    return (
        <div>
            <input type="button" value={value} onClick={fn}></input>
        </div>
    );
};

export default Button;