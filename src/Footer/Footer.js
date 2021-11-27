import {React, useState} from "react";
import { useStore } from "../redux/store/ZustandStore";
import classes from "./Footer.module.scss";

import { Shapes, textureArr } from "../MainCanvas/ObjectMesh/Utils";

const Footer = () => {

    // MESH VISIBILITY STORES
    const isHidden = useStore(state => state.isHidden);
    const hide = useStore(state => state.hideIsHidden);
    const show = useStore(state => state.showIsHidden);

    // CURRENT TEXTURE STORES
    const texture = useStore(state => state.texture);
    const setToAmountTexture = useStore(state => state.setToAmountTexture);    

    // CURRENT SHAPE STORE
    const shape = useStore(state => state.shape)
    const setToShape = useStore(state => state.setToShape)


    
    // BUTTON TEXTS(CONTENTS) STATES
    const [textureStateButtonName, setTextureStateButtonName] = useState("Apandah");
    const [shapeStateButtonName, setShapeStateButtonName] = useState("Box");

    // handles visibility Boolean Logic for Zustand
    const handleIsHidden = () => {
        if(isHidden === false) hide();
        else show();
    }

    const handleTextureState = () => {
        // ONCLICK will increment Texture state by 1
        // if reached last possible choice, restart to 0
        if(texture === textureArr.length - 1 ){
            setToAmountTexture(0);
        } else setToAmountTexture(texture+1);

        // Changes name of button to reflect CURRENT texture
        setTextureStateButtonName(textureArr[handleTextureStateButtonName(texture)].name);
    }


    const handleTextureStateButtonName = (texture) => {
        //TODO: Maybe abstract this func and the shape one to only one function, they are very
        // similar


        // WHAT: if texture state reaches last correct value, return to 0,
        // WHY: this is to give the array a valid index
        //  otherwise it would cause an error, as clicking the button til the loop
        //  will give -1, and 4, which are invalid array indexes
        if(texture === 3) return 0;
        return texture+1;
    }

    const handleShapeState = () => {
        // ONCLICK will increment shape state by 1
        // if reached last possible choice, restart to 0
        if(shape === Shapes.length - 1){
            setToShape(0);
        } else setToShape(shape+1);

        // changes name of button to reflect CURRENT shape;
        setShapeStateButtonName(Shapes[handleShapeStateButtonName(shape)]);
    }

    const handleShapeStateButtonName = (shape) => {
        // WHAT: if texture state reaches last correct value, return to 0,
        // WHY: this is to give the array a valid index
        //  otherwise it would cause an error, as clicking the button til the loop
        //  will give -1, and 4, which are invalid array indexes
        if(shape === 7) return 0;
        else return shape+1;
    }

    // TODO: Add night time button, adds Stars, removes sun, darkens light emitters
    // TIP: Use Leva or react-three/gui
    // All components that will act as a UI MUST be overlapped over the canvas

    return(
        <footer className={classes.Footer}>
            <button onClick={handleIsHidden}>{isHidden ? "Show" : "Hide"}</button>
            <button onClick={handleTextureState}>{textureStateButtonName}</button>
            <button onClick={handleShapeState}>{shapeStateButtonName}</button>
        </footer>
    );
}

export default Footer;