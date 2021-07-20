import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>REDWAGON</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="menu" activeClassName={classes.active}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="locations" activeClassName={classes.active}>
              Locations
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
