import React from "react";
const UiButton = props => {
    const classes = (props.isClicked) ?
      "ui-button clicked" : "ui-button";//for css style
    const number = (props.isClicked) ?
          (props.number + 1) : props.number;
    
    return (
      <button className={classes} id={props.text} 
        onClick={() => props.onClick()}>
        <span className="ui-icon">{props.icon} </span> 
        {number}
      </button>
    );
  };
  export default UiButton;