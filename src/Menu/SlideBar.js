import React from "react";


import { slide as Menu } from "react-burger-menu";


const SideBar = ({isMenuOpen}) => {
    return(
      <Menu customBurgerIcon={false} isOpen={isMenuOpen} className="sidebar">
            <h4 className="menu-item">Menu Item</h4>
            <h4 className="menu-item">Use Texture</h4>
            <h4 className="menu-item">Toggle Daytime</h4>
        </Menu>
    );
}

export default SideBar;