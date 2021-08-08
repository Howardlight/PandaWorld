import React from "react";
import classes from "./Footer.module.scss";
// visibility-redux 
import { useSelector, useDispatch } from "react-redux";
import { show, hide } from "../redux/slices/hiddenSlice";


const Footer = ({toggleShape, shape}) => {

    const isHidden = useSelector((state) => state.hidden.value)
    const dispatch = useDispatch();

    // handles Boolean Logic for Redux
    const handleIsHidden = () => {
        if(isHidden === false) dispatch(hide());
        else dispatch(show());
        console.log(isHidden); // remove this later
    }


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