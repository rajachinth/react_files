import React,{useEffect} from 'react';
import classes from './common.css';
import Method_1 from './HOC/Method_1';
import method_2 from './HOC/Method_2';

function ChildDemo(props)
{
    /*
    useEffect() is a react hook used; it renders the function passed into it
    evertime when component re-rendered/rendered
    its equivalent too componentDidUpdate() & componentDidMount()
    
    useState() is used to change the state in functional component

    */
   /*
    If useEffect() is controlled rendering multiple times, we ca simply pass
    the array with number of dependencies; whenever this dependencies change
    useEffect() will be triggered. i.e., [props.changeH]

    If we need to tridgger only at initial time; then pass dependencies as empty
    array "[]" which means; technically it renders initially and later see its 
    dependency array empty and react will not re-render for any component change.

    ******when passed empty dependency array "[]"; then useEffect() will run 
    at the initial load and before final removal from DOM********

   */
    useEffect(()=>{
       // setTimeout(() => alert('useEffect() react-hook is logged'),1000);
        console.log('useEffect() react-hook is logged');
        //setting clean-up function
        /*
        When empty dependency array is entered and given a clean-up function
        in returned statement; then it will be rendered initially and before
        destroying the returned statement is called.
        else; if added dependency array;
        it will render both clean-up function and useEffect(console.log) everytime
        the dependencies update(not at initia render; but after this(when re-rendered))
        */
        return (()=>{console.log('useEffect() returned')});
    },/*[]*/);

    console.log('rendering child components...');
    return(
        <Method_1 addCSS={classes.xx01}>
            <p>child component_One rendered !</p>
            <input 
                   placeholder='type something..' 
                   onChange={props.changeH}></input>
        </Method_1>  
    );
}

export default method_2(React.memo(ChildDemo),'CustomCSS_Class');