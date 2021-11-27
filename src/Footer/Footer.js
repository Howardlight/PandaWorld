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
    const [textureStateButtonName, setTextureStateButtonName] = useState("Aztrosist");


    // handles visibility Boolean Logic for Zustand
    const handleIsHidden = () => {
        if(isHidden === false) hide();
        else show();
    }

    const handleSelectedTexture = () => {
        // ONCLICK will increment Texture state by 1
        // if reached last possible choice, restart to 0
        if(texture === textureArr.length -1 ){
            setToAmountTexture(0);
        }
        else setToAmountTexture(texture+1);

        // Changes name of button to reflect CURRENT texture
        setTextureStateButtonName(textureArr[handleTextureStateButtonName(texture)].name);
    }


    //TODO: maybe change this name lol
    const handleTextureStateButtonName = (texture) => {
        // TODO: Comment and explain this


        if(texture === 3) return 0;
        return texture+1;
    }

    // TODO: Add more Buttons that control Texture
    // TODO: Add night time button, adds Stars, removes sun, darkens light emitters
    // TIP: Use Leva or react-three/gui
    // All components that will act as a UI MUST be overlapped over the canvas

    return(
        <footer className={classes.Footer}>
            <button onClick={handleIsHidden}>{isHidden ? "Show" : "Hide"}</button>
            <button onClick={handleSelectedTexture}>{textureStateButtonName}</button>
        </footer>
    );
}

export default Footer;