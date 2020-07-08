import React,{Component,PureComponent} from 'react';
import classes from './common.css';

/***********************************PureComponent************************************* */

/**
 * PureComponent is extended to implement similar behaviour like componentShouldUpdate()
 * 
 * In a complex projects; from the parent; child component gets props having multiple
 * properties that will change in future;
 * In this particular scenario; we can use componentShouldUpdate() and write all neccessary
 * "if()" conditions to check the props.property
 * 
 * In this case; React has use class "PureComponent"; this behaves exactly the similar way
 * as componentShouldUpdate() by checking all properties of a props from the parent
 * and returns true if any property on this props changes.
 * ***************Its an another optimization technique used************
 * 
 */
class ChildLog extends PureComponent
{
    // shouldComponentUpdate(next_props,next_state)
    // {
    //     console.log('shouldComponentUpdate(): Component 3 is rendered');
    //     if(this.props !== next_props) return true;
    //     else return false;
    // }
    render()
    {
        return(
            <div className={classes.xx001x}>
                <p>child component_Three rendered !</p>
                <p>user entered: <span>{this.props.stateValue}</span></p>
            </div>
        );
    }
}

export default ChildLog;