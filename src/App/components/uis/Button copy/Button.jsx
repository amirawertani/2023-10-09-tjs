import React from "react";
import './Button.css'
/*function Button(props) {
    return(
        <button>
            Benjamin
        </button>
    );
}*/
const Button = (props) => {
  console.log(props);
  return (
    <button
      className="Button"
      onClick={(evt) => {
        console.log(evt);
        props.onbuttonclick("on a tapé sur benjamen");
      }}
    >
      {props.text}
    </button>
  );
};
export default Button;