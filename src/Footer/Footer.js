import React from "react";
import { useStore } from "../redux/store/ZustandStore";
import classes from "./Footer.module.scss";


const Footer = ({toggleShape, shape}) => {

    
    // handles Boolean Logic for Redux
    const handleIsHidden = () => {
        if(isHidden === false) hide();
        else show();
    }
    const isHidden = useStore(state => state.isHidden);
    const hide = useStore(state => state.hideIsHidden);
    const show = useStore(state => state.showIsHidden);


    const handleShape = () => {
        if(shape === 0) toggleShape(1);
        else toggleShape(0);
    } 

    // TODO: Add more Buttons that control Texture
    // TODO: add Effects Buttons, maybe slider???
    // TODO: Add night time button, adds Stars, removes sun, darkens light emitters
    // TIP: Use Leva or react-three/gui
    // All components that will act as a UI MUST be overlapped over the canvas



    return(
        <footer className={classes.Footer}>
            <button onClick={handleIsHidden}>{isHidden ? "Show" : "Hide"}</button>
            <button onClick={handleShape}>{shape ? "Change to Cube" : "Change to Circle"}</button>
            {/* <h4>Button</h4> */}
        </footer>
    );
}

export default Footer;