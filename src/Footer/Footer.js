import React from "react";
import classes from "./Footer.module.scss";


const Footer = ({toggleVisibility, isVisible, toggleShape, shape}) => {

    // TODO: Add more Buttons that control Texture
    // TODO: add Effects Buttons, maybe slider???
    // TIP: Use Leva or react-three/gui


    return(
        <footer className={classes.Footer}>
            <button onClick={toggleVisibility}>{isVisible ? "Hide" : "Show"}</button>
            <button onClick={toggleShape}>{shape ? "Change to Cube" : "Change to Circle"}</button>
            {/* <h4>Button</h4> */}
        </footer>
    );
}

export default Footer;