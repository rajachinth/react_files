import React, {Component} from 'react';
import './ComponentTwo.css'
import styled from 'styled-components';

/*
    Styled-Component is another JS package; used to style components similar to Radium
    with additional features; refer official website for more
    Below is one of the way of defining the styles using styled-component.
    while using any psedo properties add "&" which is required 
    ex: &:hover {<style>}
    NOTE: use only CSS styles but not JS Objects since, styled-components will not concert
    JS to CSS; it just paste this styles code in head section of HTML document
    NOTE: Styled-Components package automatically patches elements with CSS class-names
    in a random and will make sure do not add any duplicate classes which lead to spillage
    of styles
*/

/*Always use capital first letter to store the result as this is a function "styled.div" */

const StyleComponentOne=styled.div`
    border: 1px solid black;
    margin: 0;
    padding: 0;
    width: 250px;
    height: auto;
    display: inline-block;
    margin-left: 30px;
    margin-bottom: 10px;
    
`

class ComponentTwo extends Component
{
  state={
      details:[
          {id1:'x1',id2:'y1', name:'Raf',age:52},
          {id1:'x2',id2:'y2', name:'John',age:52},
          {id1:'x3',id2:'y3', name:'Kewin',age:62},
          {id1:'x4',id2:'y4', name:'Paul',age:72},
          {id1:'x5',id2:'y5', name:'Pieter',age:15},
          {id1:'x6',id2:'y6', name:'Mike',age:15},
          {id1:'x7',id2:'y7', name:'Nelson',age:13},
      ],
      show:false,
  }

  deleteHandle=(index)=>{
      /*
        In this below "delete()" approach;
        there is a flaw; as we know ARRAYS and OBJECTS are reference types;
        when we try to splice(), the react changes/mutates the original state.
        This is not a good practice as it may lead to some un-expected behaviour.
        The GOOD pratice is always copy the state and try to mutate.
        
        for arrays/objects we have two approaches i.e., slice and spread ES6 operator
        1.
        this.state.details.splice();
        2.
        const newArray=[...this.state.details];
                            
     */
    const newArray=[...this.state.details];
    newArray.splice(index,1);
    this.setState(
        {details:newArray}
    );
}
    toggleHandler=()=> {
    this.setState({
        show:!this.state.show,
    });
  }

  nameChangeHandler(event,index)
  {
    const newArray=[...this.state.details];
    newArray[index]={name:event.target.value,age:this.state.details[index].age};
    /*
    const newValue=newArray.find(e=>{
       
    });
    */
    this.setState({
        details:newArray
    });

  }
  ageChangeHandler(event,index)
  {
    const newArray=[...this.state.details];
    newArray[index]={name:this.state.details[index].name,age:event.target.value};
    /*
    const newValue=newArray.find(e=>{
       
    });

    Object.assign({},<source>);

    /*****split() & join() used on strings****
     * 
    */
    this.setState({
        details:newArray
    });

  }
    //In-Line styling CSS

    clearStyle={
        color:'red',
        fontSize:'16px'
    }
    resetStyle={
        color:'green',
        fontSize:'16px'
    }
     
    // btnstyle={
    //     marginBottom:'20px',
    //     backgroundColor:'green',
    //     color:'white'
    //     }
    
    //an another way of changing the styles dynamically using JS template literals

    BtnStyle=styled.button`
        background-color:${(props)=>props.arg ? 'blue':'green'};
    `
    render() {
        return (
            <div>
                <p className='clear' 
                   style={this.clearStyle}
                   onClick={this.props.clear}>click here to clear values</p>
                <p className='reset' 
                   style={this.resetStyle}
                   onClick={this.props.reset}>click here for defaut values</p>
                <this.BtnStyle arg={this.state.show} onClick={this.toggleHandler}>old data</this.BtnStyle>
                {
                    /*
                    In React; list can be handled using JS; anhow at the end everything is JS
                    we can use MAP() operator on the array which converts an normal array into
                    a JSX understandable format and will direction assign as below
                        "return <p>name: {e.name}; age: {e.age}</p>"
                    here, JSX automatically patches each arrayelement to the <p>
                    */

                    this.state.show ? 
                    <div className='datatable-one'>
                        { 
                            /*
                            "KEY" is a property required by react; when it re-render,it nned to differentiate the old and new
                            virtual DOM properties; thought its renders without key by throwing an error

                            */
                            this.state.details.map((e,index)=>{
                                return  <StyleComponentOne key={index}>
                                                <p className='xx002' >name: {e.name}; age: {e.age}<span onClick={this.deleteHandle.bind(this,index)} className='pname'>X</span></p>
                                                <input type='text' 
                                                    className='xx001'
                                                    placeholder='edit NAME'
                                                    onChange={(event)=>{this.nameChangeHandler(event,index)}}></input>
                                                <input type='number' 
                                                    className='xx001'
                                                    placeholder='edit AGE'
                                                    onChange={(event)=>{this.ageChangeHandler(event,index)}}></input>   
                                        </StyleComponentOne>
                            })
                            
                            /**
                             * 
                             * we can change the styles of a element dynamically; 
                             * since, everything is a JS and here in the line 134 we
                             * can change the backgroundColor as JSX allows this way of
                             * adding/changing styles dynamically.
                             * 
                             */
                        }
                         
                        {/* <p>name: {this.state.details[0].name}; age: {this.state.details[0].age}<span className='pname'>X</span></p>
                        <p>name: {this.state.details[1].name}; age: {this.state.details[1].age}<span className='pname'>X</span></p>
                        <p>name: {this.state.details[2].name}; age: {this.state.details[2].age}<span className='pname'>X</span></p>
                        <p>name: {this.state.details[3].name}; age: {this.state.details[3].age}<span className='pname'>X</span></p>
                        <p>name: {this.state.details[4].name}; age: {this.state.details[4].age}<span className='pname'>X</span></p>
                        <p>name: {this.state.details[5].name}; age: {this.state.details[5].age}<span className='pname'>X</span></p>
                        <p>name: {this.state.details[6].name}; age: {this.state.details[6].age}<span className='pname'>X</span></p> */}
                    </div>
                    : null
                   
                }
                
            </div>
        );
    }
}

export default ComponentTwo;