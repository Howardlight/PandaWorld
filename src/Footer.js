import React from "react";
import classes from "./Footer.module.scss";


const Footer = ({toggleVisibility, isVisible, toggleShape, shape}) => {


    return(
        <footer className={classes.Footer}>
            <h4 onClick={toggleVisibility} style={{marginRight: "auto"}}>{isVisible ? "Show" : "Hide"}</h4>
            <h4 onClick={toggleShape}>{shape ? "Change to Cube" : "Change to Circle"}</h4>
            {/* <h4>Button</h4> */}
        </footer>
    );
}

export default Footer;