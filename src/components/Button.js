import React from "react";

const Button = ({value}) => {
    return (
        <div>
            <input type="button" value={value}></input>
        </div>
    );
};

export default Button;