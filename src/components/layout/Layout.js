import { Fragment } from 'react';

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
// import mushroomImage from '../../assets/';

const Layout = (props) => {
  return (
    <Fragment>
      <div className={classes.wrapper}>
        <MainNavigation />
        <main className={classes.main}>{props.children}</main>
        <footer className={classes.footer}>
          {/* <div className={classes.cover}></div> */}
          <div className={classes.info}>
            <p>Our Mission Statement is:</p>
            <p>1. Using only quality ingredients.</p>
            <p>2. Customers Satisfaction</p>
            <p>&copy; Redwagon Burgers and Philly Cheesesteaks</p>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

export default Layout;
