import React from 'react';
import Count from './Count';
import Button from './Button';

const Counter = ()=>{
    const [count, setCount] = React.useState(0);
    return(
        <div>
            <p>{count > 10 ? "It's higher than 10!" : 'Keep counting...'}</p>
            <Count count={count} />
            <Button setCount={() => setCount(count + 1)} />
        </div>
        
    )
   
}

export default Counter;
