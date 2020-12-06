import React from "react";
import UiCard from "./UiCard"
import ButtonBox from "./ButtonBox"
  class SocialCard extends React.Component {
      render() {
        return (
          <div className='card-body'>
            <UiCard content={this.props.content}/>
            <div className='line'></div>
             <div style={{textAlign: 'right'}}>
                <ButtonBox 
                likeIsClicked={this.props.likeIsClicked}
                likes={this.props.likes}/>
            </div>
          </div>
         
        );
      }
    };
    
