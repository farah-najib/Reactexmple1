import React from "react";
import UiButton from "./UiButton";
    class ButtonBox extends React.Component {
        constructor(props) {
          super(props);
          console.log(props.likeIsClicked);
          this.state = {
            likeIsClicked: props.likeIsClicked
    
          };
        }
        
        toggle(index) {
          let state = {};
          state[index] = !this.state[index];
          this.setState(state);
        }
        
        render() {
          return (
            <div>
              <UiButton icon='♥' text='likes'
                number={this.props.likes}
                onClick={() => 
                  this.toggle('likeIsClicked')}
                isClicked={this.state.likeIsClicked}/>
            </div>
          );
        }  
      }
      export default ButtonBox;