import React,{useState} from 'react';
import './App.css';
import DemoComponent from './DemoComponent/DemoComponent';
import Demo from './DemoComponent/ClassComponent';

function AppDemo() {
  const [currentValue, setValue]=useState(
    {
      details:[{name:'Raja',age:24}]
    }
  );


  const addMethod=(name)=>{console.log(`${name} is called`);}
  const inputMethod=(event)=>{
    setValue({
      details:[{name:event.target.value,age:24}]
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React Course</h1>
        <DemoComponent name='Kewin' age='40'>
          {/* <p>I have Canada PR</p> */}
        </DemoComponent>
        <DemoComponent name='John' age='20' />
        <DemoComponent name={currentValue.details[0].name} 
                        age={currentValue.details[0].age} 
                        method={inputMethod}
        /> 
        
        {/* below is the one way of passing arguments to the method*/}
        <Demo name='Kewin' age='45' method={addMethod.bind(this,'method-one')}></Demo>

        {/* below is the another way of passing arguments to the method
          Since, we used a function as a wrapper to the addmethod()
          It will be called only on a external click
          This is an another way; but not recommended due to performance issues
        */}
        <Demo name='function-one' age='00' method={()=>{addMethod('method-two')}} />
      </header>
    </div>
  //   React.createElement('div',{className:'App-header'},
  //     React.createElement('header',{className:'App-header'},
  //       React.createElement('h1',null,'Welcome to JSX Course')))
  );
}

export default AppDemo;
