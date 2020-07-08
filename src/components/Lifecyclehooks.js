import React,{Component,Fragment} from 'react';
import ChildDemo from './Children_One';
import ChildDisplay from './Children_Two';
import ChildLog from './Children_Three';
import classes from './common.css';
import Auxilary from '../components/HOC/Auxilary';

/*

In React, there exist two types of components
    1. Functional component
    2. Class component

1.Functional component:
    It's also called as Stateless/Presentation component; as developer one need to
    ensure that he's dividing the project w=into individual Stateless/Statefull
    components.
    It's easy to maintain and be easy to understand the data flow
    Life cycle hooks are not supported in Function component
2. Class component:
    It's also called as Statefull/Container component; to change state, can use the
    class component.
    Life cyclehooks are supported in Class component.

***IN Modern React > 16.8, we use React hooks to manipulate the state in function component***

*********Component-LifeCycle-Creation**********

Constructor(props)
getDerivedStateFromProps(props, state) --> to change state of a component when props change
render()
render child components
componentDidMount() -->like http calls etc.,

*********Component-Life-Cycle-Update(Props)***********

getDerivedStateFromProps(props,state)
shouldComponentUpdate(next props, next state)
render()
render child components
getSnapshotBeforeUpdate(prev props, prev state)
componentDidUpdate()

*/
class Hooks extends Component {

    state={  message:'life-cycle-hooks',show:true };

    /*
    Constructor is called with super() as it calls its parent class "Component"
    constructor just to initiate the things.
    In traditional appraoch "state" is defined in constructor
    this.state={}
    */
    constructor(props)
    {
        super(props);
        console.log('construtcor logged');
    }

    /*
    getDerivedStateFromProps() is called jsut after the constructor
    */
    static getDerivedStateFromProps(props,state)
    {
        console.log('getDerivedStateFromProps() is logged')
        console.log(state);
        state={ message:'life-cycle-hooks' }
    }

    /*
    componentDidMount() is called after Render() and rendering child components
    used for "side effects"
    */
    componentDidMount()
    {
        console.log('componentDidMount() is logged');
    }

    /*
    shouldComponentUpdate() is called after getDerivedStateFromProps()
    */
    shouldComponentUpdate(nextprops, nextstate)
    {
        console.log('shouldComponentUpdate() is logged');
        if(nextstate.message != this.state.message) return true;
        else if (nextstate.message == 'exit') return true;
        else return false;

        /****************************IMPORTANT NOTE************************** */
        /*********************************************************************
         * **********While dealing with arrays/objects make sure**************
         * **********to update the latest values inside the memory************
         * **********but not on the pointer variable; use "spread"************
         * **********or any other logic to store array/objects into***********
         * **********the memory; so that the new and old pointer *************
         * **********variables will be different; else both new and***********
         * **********old ponter variables have same reference values**********
         * **********and will end-up with more ambiguity to understand********
         * **********to understand the logic**********************************
         * *******************************************************************
         */
    }

    /*
     getSnapshotBeforeUpdate() is called after shouldComponentUpdate()
     */
    getSnapshotBeforeUpdate(prevprops, prevstate)
    {
        console.log('getSnapshotBeforeUpdate() is logged');
        return ('snapshot');
    }

    /*
    componentDidUpdate() is called at the end of all(i.e., after rendering
    the component from an update)
    */
    componentDidUpdate(prevprops,prevstate,snapshot)
    {
        console.log('componentDidUpdate() is logged');
        //console.log(snapshot);
    }
    
    componentWillUnmount()
    {
        console.log('componentWillUnMount() is logged');
    }
    changeHandler(event)
    {
        this.setState({
            message:event.target.value
        });
    }

    render()
    {
        console.log('render() is logged');
        return(
            <div className={classes.xx01}>
                <h1>LifeCycle Hooks</h1>
                {
                    this.state.show ? 
                        <Fragment>
                            <button onClick={()=>{this.setState({show:!this.state.show})}}>Remove</button>
                            <label>type "exit" and click on remove</label>
                            <ChildDemo changeH={(event)=>this.changeHandler(event)}/>
                            <ChildDisplay />
                            <ChildLog stateValue={this.state.message}/>
                        </Fragment>
                        : <button onClick={()=>{this.setState({show:!this.state.show,message:'life-cycle-hooks'})}}>ADD</button>
                }
            </div>
        );
    }
}

export default Hooks;