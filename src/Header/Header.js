import React from "react";

import classes from "./Header.module.scss";

const Header = ({toggleMenu}) => {
    return(
        <header className={classes.Header}>
            <div  style={{display: "flex", alignItems: "baseline"}}>
                {/* TODO: Maybe Change Options Button to something else */}
                <button onClick={toggleMenu}>Options</button>
                <h4>Pandah World</h4>
            </div>
            <h4>By Ciel</h4>
        </header>
    );
}

export default Header;