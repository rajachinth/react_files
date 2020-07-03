import React,{useState} from 'react';
import './ComponentOne.css';
import Radium,{StyleRoot} from 'radium';

/*
 Radium is used to get the advantage of using psuedo selectors in In-Line
 styling.(all advanced CSS properties)
 npm i radium --save

 when ever we use tranformation CSS properties like "media queries" and "key frames"
 we need to wrap root app.js with <StyleRoot>
*/


function ComponentOne(props)
{
    const [stateValue, editvalueFuc]=useState({
        showDetails:false,
        stateClass:'no-class', 
    });
    /*for JS in-line styling; below is JS css code */
    let buttonStyle= {
        display: 'block',
        marginTop: '20px',
        backgroundColor: 'rgb(38, 38, 117)',
        color: 'white',
        ':hover':{
            backgroundColor:'yellow',
            color:'black',
            cursor:'pointer'
        },
        '@media (min-width:500px)':{
            backgroundColor:'red'
        }
    }
    if(stateValue.showDetails)
    {
        var detailsDiv=<div className='showdetails'>
                        <label>submitted details</label>
                        <p>user: {props.name}</p>
                        <p>age: {props.age}</p>
                    </div>;
        /*changing the css property value; upon rendering*/
        buttonStyle={
            backgroundColor: 'red',
            color: 'white',
        }
        buttonStyle[':hover']={
            backgroundColor:'yellow',
            color:'black',
            cursor:'pointer'
        }
        
    }

    /*
    In React, we can re-render either using State component(useState or setState)
    and Props; we can use "forcerender()" rarely, but not all time; since its 
    blocks the update of child(shouldComponentUpdate())
    */
    const reviewHandler=()=>
    {

        /*
        In React, we even have a chance to change the class name dynamically 
        Since, everthing is JS(i.e., JSX) we can do this for both className and style
        */
            if(stateValue.stateClass == 'no-class')
            {
                editvalueFuc({
                    showDetails:!stateValue.showDetails,
                    stateClass:'colorDynamic'
                });
            }
            else
            {
                editvalueFuc({
                    showDetails:!stateValue.showDetails,
                    stateClass:'no-class'
                });
            }      
    }

   
    return(
       <StyleRoot>
            <div>
                <div className={stateValue.stateClass}>
                    <p>{props.name}</p>
                    <input type='text' 
                        onChange={props.inputNameChange}
                        value={props.name} />
                    <p>{props.age}</p>
                    <input type='number' 
                        onChange={props.inputAgeChange}
                        value={props.age} />
                </div>
                <button key='xes01' onClick={props.inputClick}>submit</button>
                <button style={buttonStyle} key='xes02' onClick={reviewHandler}>review</button>
                {detailsDiv}
            </div>
       </StyleRoot>
    );  
}

export default Radium(ComponentOne);

/*
 Above export methos is used as a wrapper function(required by radium)
*/