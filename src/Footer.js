import React from "react";
import classes from "./Footer.module.scss";


const Footer = ({toggleVisibility, isVisible}) => {


    return(
        <footer className={classes.Footer}>
            <h4 onClick={toggleVisibility}>{isVisible ? "Show" : "Hide"}</h4>
            <h4>Button</h4>
            <h4>Button</h4>
        </footer>
    );
}

export default Footer;