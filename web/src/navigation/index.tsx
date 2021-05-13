import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Home from "../pages/Home";

import menuIcon from "../assets/images/menu.svg";
import { NavBarStyle, SideMenuStyle } from "./style";
import Listing from "../pages/Listing";
import PropertiesProvider from "../contexts/properties";
import Details from "../pages/Details";

type MenuState = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

const NavBar = ({
  showMenuState,
}: {
  showMenuState: MenuState
}) => {
  const [showMenu, setShowMenu] = showMenuState;
  return <NavBarStyle>
    <div className="menu-btn">
      <img
        src={menuIcon}
        alt="menu button"
        onClick={() => setShowMenu(!showMenu)}
      />
    </div>
    <div className="app-name">
      <span>Upstart 13 Challenge</span>
    </div>
    <div className="logout-btn">
      <div onClick={() => alert("Not implemented")}>Logout</div>
    </div>
  </NavBarStyle>;
}

const SideMenu = ({
  showMenuState,
}: {
  showMenuState: MenuState
}) => {
  const [showMenu, setShowMenu] = showMenuState;
  return <SideMenuStyle>
    <div
      className={`
        left-side-menu ${showMenu ? "animation-show" : "animation-hide"}
      `}
    >
      <div>
        <Link to="/" onClick={() => setShowMenu(true)}>
          Home
        </Link>
      </div>
      <div>
        <Link to="/" onClick={() => alert("Not implemented")}>
          Demo app
        </Link>
      </div>
      <div>
        <Link to="/" onClick={() => alert("Not implemented")}>
          Logout
        </Link>
      </div>
    </div>
  </SideMenuStyle>;
}

/**
 * Component responsible for routes,
 * also aggregaring navigation bar and left-side menu
 */
const Navigation = () => {
  const showMenuState = useState(false);
  return (
    <Router>
      <NavBar showMenuState={showMenuState} />
      <SideMenu showMenuState={showMenuState} />
      <Switch>
        <PropertiesProvider>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/properties/">
            <Listing />
          </Route>
          <Route path="/property/:propertyId">
            <Details />
          </Route>
        </PropertiesProvider>
      </Switch>
    </Router>
  );
};

export default Navigation;
