import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import textureArr from "../MainCanvas/Meshes";

const SideBar = ({isMenuOpen, toggleMenu, setTexture, textureType}) => {

    // state used to keep up with active component
    const [isActive, setIsActive] = useState(textureType); // mapped to current active texture, cleaner this way
    
    // Maps Names from textureArray from Meshes.js
    let nameArr = []
    for(let value of textureArr) {
        nameArr.push(value.name);
    }

    // TODO: Add animations for when texture changes,
    // Check Drei or PostProcessing, maybe Fiber

    // TODO: Slide Animation does not occur consistently, Fix that
    return(
      <Menu customBurgerIcon={false} isOpen={isMenuOpen} onClose={toggleMenu} className="sidebar">

        {/* TEXTURES START */}

        {/* textures Changes opacity on hover, Fix that */}
        <h4 className="menu-item section-title" style={{fontWeight: "800"}}>Textures</h4>
        <br />
        {
            // Way easier to implement than i thought lol
            nameArr.map(function(person, index) {
                const checkIfActive = isActive === index ? "active" : "";
                return (
                    <h4 className={["menu-item", "clickable", checkIfActive].join(" ")} key={index} onClick={() => {setTexture(index); setIsActive(index);} }>{person}</h4>
                );
            })
        }
        
        {/* TEXTURES END */}

    </Menu>
    );
}

export default SideBar;