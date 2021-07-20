import { Fragment } from 'react';

import mushImg from '../../assets/mushroom.png';
import Backdrop from '../UI/Backdrop';
import classes from './LayoutB.module.css';
import MainNavigation from './MainNavigation';
// import mushroomImage from '../../assets/';

const LayoutB = (props) => {
  return (
    <Fragment>
      <div className={classes.container}>
        <MainNavigation />
        <main className={classes.main}>{props.children}</main>
        <footer className={classes.footer}>
          {/* <Backdrop /> */}
          {/* <div className={classes.cover}></div> */}
          <div className={classes.info}>
            {/* <img src={mushImg} alt="mushroom" class={classes.footerimg} /> */}
            <p className={classes.footernotes}>Our Mission Statement is:</p>
            <p className={classes.footernotes}>
              1. Using only quality ingredients.
            </p>
            <p className={classes.footernotes}>2. Customers Satisfaction</p>
            <p className={classes.footernotes}>
              &copy; Redwagon Burgers and Philly Cheesesteaks
            </p>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

export default LayoutB;
