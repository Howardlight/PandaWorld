import React from "react";
import classes from "./Footer.module.scss";


const Footer = ({visibility}) => {


    return(
        <footer className={classes.Footer}>
            <h4 onClick={visibility}>Button</h4>
            <h4>Button</h4>
            <h4>Button</h4>
        </footer>
    );
}

export default Footer;