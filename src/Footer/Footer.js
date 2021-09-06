import React from "react";
import { useStore } from "../redux/store/ZustandStore";
import classes from "./Footer.module.scss";


const Footer = () => {

    // related to Visibility of Mesh
    const isHidden = useStore(state => state.isHidden);
    const hide = useStore(state => state.hideIsHidden);
    const show = useStore(state => state.showIsHidden);

    // handles visibility Boolean Logic for Zustand
    const handleIsHidden = () => {
        if(isHidden === false) hide();
        else show();
    }


    // TODO: Add more Buttons that control Texture
    // TODO: Add night time button, adds Stars, removes sun, darkens light emitters
    // TIP: Use Leva or react-three/gui
    // All components that will act as a UI MUST be overlapped over the canvas

    return(
        <footer className={classes.Footer}>
            {/* <button onClick={handleIsHidden}>{isHidden ? "Show" : "Hide"}</button> */}
        </footer>
    );
}

export default Footer;