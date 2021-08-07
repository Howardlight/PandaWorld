import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";


const SideBar = ({isMenuOpen, toggleMenu, setTexture, textureType}) => {

    // state used to keep up with active component
    const [isActive, setIsActive] = useState(textureType); // mapped to current active texture, cleaner this way
    

    // TODO: MAP THIS TO THE TEXTURES IN APANDAHMESH
    // EXPORT APANDAHMESH TEXTURES AS THEIR OWN FILE
    // AND USE IT TO MAP THIS ARR AUTOMATICALLY
    let nameArr = ["Apandah", "Aztrosist", "Jschlatt", "Mikasacus"];

    // TODO: Add animations for when texture changes,
    // Check Drei or PostProcessing, maybe Fiber

    return(
      <Menu customBurgerIcon={false} isOpen={isMenuOpen} onClose={toggleMenu} className="sidebar">

        {/* TEXTURES START */}
        <h4 className="menu-item" style={{fontWeight: "800"}}>Textures</h4>
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