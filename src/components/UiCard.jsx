import React from "react";
    const UiCard = props => {
        let {image, title, content} = props.content;
        return (
          <div class="card-wrapper">
            <div className='card-img'>
              <img src={image} />
            </div>
            <div className='card-content'>
              <h3>{title}</h3>
              <div>{content}</div>
            </div>
            </div>
        );
      }
      export default UiCard;