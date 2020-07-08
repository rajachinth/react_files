import React,{useEffect} from 'react';

/**************REACT.memo(<any funtion component>)************** */

/*
    In Function component; cant use shouldComponentUpdate() lifecyclehook;
    so, as an alternative; can use React.memo(); its generally an optimization
    technique used to prevent rendering the component for every praent re-render
    If the props of the componeny will not change then ; memo() method prevent
    rendering the component;
    If the props change; then this child component be rendered; thus providng same
    behaviour as shouldComponentUpdate() in class component

*/
function ChildDisplay(props)
{
    useEffect(()=>{console.log('useEffect():component_two rendered')});
    return(
        <div>
            <p>child component_Two rendered !</p>
        </div> 
    );
}

export default React.memo(ChildDisplay);