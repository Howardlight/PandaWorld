import React from "react";
import { useStore } from "../redux/store/ZustandStore";
import classes from "./Footer.module.scss";


const Footer = () => {

    // related to Visibility of Mesh
    const isHidden = useStore(state => state.isHidden);
    const hide = useStore(state => state.hideIsHidden);
    const show = useStore(state => state.showIsHidden);

    // related to Shape of Mesh
    const shape = useStore(state => state.shape);
    const setToShape = useStore(state => state.setToShape);

    // handles visibility Boolean Logic for Zustand
    const handleIsHidden = () => {
        if(isHidden === false) hide();
        else show();
    }

    // handles shape Boolean Logic for Zustand
    // WILL BE CHANGED LATER
    const handleShape = () => {
        if(shape === 0) setToShape(1);
        else setToShape(0);
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