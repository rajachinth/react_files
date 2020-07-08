import React, {useState} from 'react';
import './DemoComponent.css';

/*

Stateless/dump/presentation components or pure functions
Statefull/smart/container components or impure functions

*/
const DemoComponent=(props)=>{
    const [currentState, setState]=useState({
        details:[
            {name:'Abraham', age:40},
        ],
        headCount:23,
    });
    const [headcount,headcountfuc]=useState({headCount:24});
    console.log(currentState,headcount);

    const clickHandler=()=>{
        setState({
            details:[
                {name:'Akash',age:20},
            ],
            headcount:currentState.headCount,
        });
    }
    return(
    <div>
        <button onClick={clickHandler}>state</button>
        <p>my name is {currentState.details[0].name} and age {currentState.details[0].age} </p>
        <p>my name is {props.name} and age {props.age} </p>
        <p>{props.children}</p>
        <input type='text' onChange={props.method} value={props.name}/>
    </div>
    );
}

export default DemoComponent;