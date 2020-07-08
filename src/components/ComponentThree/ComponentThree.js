import React,{Component} from 'react';
import customclass from './ComponentThree.css'
/*  
*************************************CSS MODULES***************************************
In CSS modules, we use above import statement for CSS file; where we use 
"<classname>.<style property>";
Here, at the compile time the CSS TOOl(In-Built in react) patches the unique random 
CSS class to the elements in DOM; it is scoped only to this component and CSS Tool make sures that
it not creates a duplicate copy of the class to leak styles to the outside of component

****for CSS modules in react-scripts > version 2 ; under text:csssRegex; add "modules:true" ******
for V 1: add "localIdentName: '[name]__[local]__[hash:base64:5]'"
*/
/****************In react scripts 2.x and higher; dont need to eject and add "localIdentName"
 * just replace css file name with "<filename>/module.css ; by this it will unlock the
 * css module feature; however if ejected on 2.X higher versions; then simply add "modules:true"
 * 
 * ********************************************************************************************
 */
class ComponentThree extends Component
{   
    state={
        hasError:false,
        errorMessage:''
    }

    /*******Error Boundaries******** */
    
    componentDidCatch(error,errorinfo)
    {
        this.setState({
            hasError:true,
            errorMessage:error,
        });
    }
    render()
    {
            if(this.state.hasError)
            {
                return <div>
                    <h1 className={customclass.alert}>Some thing went wrong..</h1>
                    <button className={customclass.redd}>Home</button>
                    <button className={customclass.redd}>Restart</button>
                </div>
            }
            else
            {
                return this.props.children
            }
    }
}

export default ComponentThree;