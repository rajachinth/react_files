import React, {Component} from 'react';

class Demo extends Component {
    state={
        details:[
            {name:'Kewin',age:20},
            {name:'John',age:12},
        ],
        totalCount:900,
    };
    clickHandler=()=>{
        console.log('buttton clicked');
        this.setState({
            details:[
                {name:'Pieter',age:90},
            ]
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>button</button>
                <p>my name is {this.props.name} and age {this.props.age}</p>
                <p>my name is {this.state.details[0].name} and age {this.state.details[0].age}</p>
                <p onClick={this.props.method}>click on me</p>
            </div>
        );
    }
}

export default Demo;