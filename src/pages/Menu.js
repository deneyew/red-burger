import React from 'react';

import classes from './Menu.module.css';

export const Menu = () => {
  return (
    <div className={classes.menu}>
      <h3>GOURMET CHAR-BROIL BURGERS</h3>
      <ul>
        <li>Hamburger $6.00</li>
        <li>Cheese Burger $6.69</li>
        <li>Double Cheese Burger $7.95</li>
        <li>Pepper Jack Cheese Burger $6.95</li>
        <li>Bacon Cheese Burger $7.45</li>
        <li>Deluxe Bacon Cheese Burger $7.95</li>
        <li>Garden Cheese Burger $6.75</li>
        <li>Mushrrom Burger with Provolone Cheese $7.95</li>
        <li>Grilled Chicken Burger $7.50</li>
        <li>Fish Burger with Cheese $7.50</li>
        <li>BBQ Burger $8.95</li>
        <li>California Burger $8.95</li>
        <li>Hawaiian Burger $8.95</li>
        <li>Monster Burger $9.95</li>
        <li>Salmon Burger $10.95</li>
        <li>Red Wagon Burger $8.95</li>
        <li>Crumbled Blue Cheese with Bacon $7.75</li>
      </ul>
      <h3>Philly Cheese Steak</h3>
      <ul>
        <li>Philly Cheese Steaks $9.95</li>
        <li>Mushroom Cheese Steak $10.50</li>
        <li>Combo Philly Cheese Steak $11.00</li>
      </ul>
      <h3>Kids Menu</h3>
      <ul>
        <li>Hamburger $9.95</li>
        <li>Cheese Burger $10.50</li>
        <li>Chicken Nuggets 7pcs $5.75</li>
        <li>Chicken Strips 2pcs $5.75</li>
      </ul>
      <h3>Fish N Chips</h3>
      <ul>
        <li>Prawn $7.99</li>
        <li>Oysters $6.99</li>
        <li>Fish N Chips 2pcs $10.99</li>
        <li>Calamari Rings 8pcs $5.99</li>
        <li>Clams Strips 4oz $5.50</li>
      </ul>
      <h3>Healthy Wraps</h3>
      <ul>
        <li>Balsamic Chicken $9.50</li>
        <li>BBQ Chicken $9.50</li>
        <li>California $9.50</li>
        <li>Turkey $9.50</li>
      </ul>
    </div>
  );
};

export default Menu;
