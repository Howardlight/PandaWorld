import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import textureArr from "../MainCanvas/Meshes";
import Shapes from "../MainCanvas/Shapes";
import { useStore } from "../redux/store/ZustandStore";

const SideBar = ({isMenuOpen, toggleMenu}) => {

    // related to Visibility of Mesh
    const isHidden = useStore(state => state.isHidden);
    const hide = useStore(state => state.hideIsHidden);
    const show = useStore(state => state.showIsHidden);


    // oww my brain
    const texture = useStore(state => state.texture);
    const setToAmountTexture = useStore(state => state.setToAmountTexture);    

    const shape = useStore(state => state.shape)
    const setToShape = useStore(state => state.setToShape)


    // States used to keep up with active component
    const [isPersonActive, setIsPersonActive] = useState(texture); // mapped to current active texture, cleaner this way
    const [isShapeActive, setIsShapeActive] = useState(shape); // mapped to current active texture, cleaner this way


    // Maps Names from textureArray from Meshes.js
    let nameArr = []
    for(let value of textureArr) {
        nameArr.push(value.name);
    }

    const handleIsHidden = () => {
        if(isHidden === false) hide();
        else show();
    }

    // TODO: Add animations for when texture changes,
    // Check Drei or PostProcessing, maybe Fiber

    // TODO: Slide Animation does not occur consistently, Fix that
    return(
      <Menu customBurgerIcon={false} isOpen={isMenuOpen} onClose={toggleMenu} className="sidebar">


        <button className="visibility-button" onClick={handleIsHidden}>{isHidden ? "Show" : "Hide"}</button>

        {/* TEXTURES START */}

        {/* textures Changes opacity on hover, Fix that */}
        <h4 className="menu-item section-title" style={{fontWeight: "700"}}>Textures</h4>
        <br />
        {
            // Way easier to implement than i thought lol
            nameArr.map(function(person, index) {
                const checkIfPersonActive = isPersonActive === index ? "active" : "";
                return (
                    <h4 className={["menu-item", "clickable", checkIfPersonActive].join(" ")} key={index} onClick={() => {setToAmountTexture(index); setIsPersonActive(index);} }>{person}</h4>
                );
            })
        }
        
        {/* TEXTURES END */}
        {/* SHAPE START */}

        <h4 className="menu-item section-title" style={{fontWeight: "700", marginTop: "30px"}}>Shape</h4>
        <br />
        {

            Shapes.map(function(currentShape, index) {
                const checkIfShapeActive = isShapeActive === index ? "active" : "";
                return (
                    <h4 className={["menu-item", "clickable", checkIfShapeActive].join(" ")} key={index} onClick={() => {setToShape(index); setIsShapeActive(index)} }>{currentShape}</h4>
                );
            })
        }

        {/* SHAPES END */}



    </Menu>
    );
}

export default SideBar;