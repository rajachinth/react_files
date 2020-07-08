const Auxilary=(props)=>props.children;

export default Auxilary;

/*
    Main idea behind using this simple function; that takes props as an argument
    and prints all its children
    To make sure there should be only one root-level component to render all its 
    child components
    Can wrap this even with <div></div> ; but from JS side it should be a component
    that wraps at an root level ( becacuse as a developer; shouls ensure that additional
        div elements will not be added to DOm by wrapping with <div></div>)
    This comes under HOC(Higher Order Component) topics

    All this advantages can be used with React build-in property "Fragment" or "React.Fragment"
    It's introduced in 16.3+

    "fragment" do exactly same as Auxilary Component do

    HOD is nothing but wrapping a component with an another and render as new component with
    one single root component

    ********************CAN USE ANY, BASED ON CHOICE OF YOU*******************************
*/