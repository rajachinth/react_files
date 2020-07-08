import React from 'react';

/*
    Below is an another way of implementing HOC 
    here; we create a normal JS function with two or more arguments
    1. Function Component
    2. arguments (can we multiple)
    
    And inside this normal JS function; it returns a functional component as below
    and renders the function_component argument passed to the main JS function.

    Here its the example; how to use this JS function in other component functions
    to make its as a HOC

    **************EX:method_2(Function_component,'CustomCSS_Class');****************

    While using HOC; it means adding additional JS or HTML or Styles logic to our component
    by wrapping with HOC;

    IT can be used a wrapping HOC in multiple components

*/
const method_2=(Function_component,argument_css)=>{
    return props=>
        <div className={argument_css}>
            {/* props is always a object; hence should use spread operator to extract
            all objects and pass this to functional_component as below */}
            <Function_component {...props}/>
        </div>

}

export default method_2;