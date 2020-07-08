import React, {Component} from 'react';
import classes from './ComponentFour.css';

 /*************************************ERROR BOUNDARIES***************************** */
 /*
    Error Boundaries are great way to find/catch the errors and display it in an UI 
    level; refer react website for more info; 

    Error boundaries do not catch errors for:
        Event handlers (learn more)
        Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
        Server side rendering
        Errors thrown in the error boundary itself (rather than its children)

        EX: <ComponentThree>
                <ComponentFour></ComponentFour>
            </ComponentThree>
            Here, ComponentThree is the boundary(i.e ErrorBoundary)

    *****In Dev mode, we can see the error message generated by react; instead of
    our custom error CODE; 
    But, it works on *****Production*****

 */

 /**
  * 
  * In react scripts 2.x and higher; dont need to eject and add "localIdentName" 
  * just replace css file name with "/module.css ; by this it will unlock the css 
  * module feature; however if ejected on 2.X higher versions; then simply add 
  * "modules:true"
  * 
  */
function ComponentFour() {
        const rand=Math.random();
        console.log(rand);
        if(rand > 0.8)
        { 
            throw new Error('error logged for DEMO');
        }
        return(
            <div>
                <p className={classes.redd}>No Error Found in ComponentFour</p>
            </div>
        );
}

export default ComponentFour;