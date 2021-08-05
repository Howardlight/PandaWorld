import React from "react";
import classes from "./Footer.module.scss";


const Footer = ({toggleVisibility, isVisible, toggleShape, shape}) => {

    // TODO: Add more Buttons that control Texture
    // TODO: add Effects Buttons, maybe slider???
    // TODO: Add night time button, adds Stars, removes sun, darkens light emitters
    // TIP: Use Leva or react-three/gui
    // All components that will act as a UI MUST be overlapped over the canvas

    return(
        <footer className={classes.Footer}>
            <button onClick={toggleVisibility}>{isVisible ? "Hide" : "Show"}</button>
            <button onClick={toggleShape}>{shape ? "Change to Cube" : "Change to Circle"}</button>
            {/* <h4>Button</h4> */}
        </footer>
    );
}

export default Footer;