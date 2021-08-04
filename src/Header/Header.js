import React from "react";

import classes from "./Header.module.scss";

const Header = () => {
    return(
        <header className={classes.Header}>
            <h4>Pandah World</h4>
            <h4>By Ciel</h4>
        </header>
    );
}

export default Header;