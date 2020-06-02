import React from 'react';

const Validation = props => {
    let num = props.num;

    let length = null;

        if(num > 0 && num < 5) {
           length = <p>Text is still too short</p>
        } else if(num >= 5) {
            length = <p>Text is long enough</p>
        }
    
    
   return (
       <div>
            <h1>{props.num}</h1> 
            {length}
       </div>
   ) 
}

export default Validation;