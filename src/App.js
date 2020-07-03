import React,{useState} from 'react';
import './App.css';
import ComponentOne from './ComponentOne/ComponentOne';
import ComponentTwo from './ComponentTwo/ComponentTwo';
import {StyleRoot} from 'radium';

function App()
{
    const [currentDetails, setDetails]=useState({
        details:[
            {name:'Kewin', age:22},
        ]
    });

    const ChangeNameHandler=(event) =>
    {
        setDetails({
            details:[
                {name:event.target.value, age:currentDetails.details[0].age},
            ]
        });
    }
    const ChangeAgeHandler=(event) =>
    {
        setDetails({
            details:[
                {name:currentDetails.details[0].name, age:event.target.value},
            ]
        });
    }
    const ClickHandler= ()=>{
        console.log(currentDetails);
    }
    const resetHandler=(value)=>{
        setDetails({
            details:[
                {name:value,age:0}
            ]
        });
    }
    const clearHandler=(value)=>{
        console.log('clear');
        setDetails({
            details:[
                {name:value,age:''}
            ]
        });
    }
    return(
       <StyleRoot>
            <div className='App'>
                <header className='App-header'>
                    <p>Welcome to React Course</p>
                </header>
                    <ComponentOne   inputNameChange={ChangeNameHandler}
                                    inputAgeChange={ChangeAgeHandler}
                                    name={currentDetails.details[0].name}
                                    age={currentDetails.details[0].age} 
                                    inputClick={ClickHandler}
                                    />
                    <ComponentTwo clear={()=>clearHandler(' ')} 
                                reset={resetHandler.bind(this,'default')} 
                                />
            </div>
       </StyleRoot>
    );
}

export default App;