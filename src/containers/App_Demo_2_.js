import React,{useState} from 'react';
import classes from'./App.css';
import ComponentOne from '../components/ComponentOne/ComponentOne';
import ComponentTwo from '../components/ComponentTwo/ComponentTwo';
import ComponentThree from '../components/ComponentThree/ComponentThree';
import {StyleRoot} from 'radium';
import ComponentFour from '../components/ComponentFour/ComponentFour';

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
                <header className={classes.Appheader}>
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
                    <ComponentThree>
                        <ComponentFour></ComponentFour>
                    </ComponentThree>
            </div>
       </StyleRoot>
    );
}

//export default App;