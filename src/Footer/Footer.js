import React from "react";
import classes from "./Footer.module.scss";


const Footer = ({toggleVisibility, isVisible, toggleShape, shape}) => {


    return(
        <footer className={classes.Footer}>
            <button onClick={toggleVisibility}>{isVisible ? "Hide" : "Show"}</button>
            <button onClick={toggleShape}>{shape ? "Change to Cube" : "Change to Circle"}</button>
            {/* <h4>Button</h4> */}
        </footer>
    );
}

export default Footer;