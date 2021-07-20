import { Fragment } from 'react';
import classes from './Locations.module.css';

const Locations = () => {
  return (
    <div>
      <h1>LOCATIONS</h1>
      <hr />
      <div className={classes.container}>
        <div className={classes.locationinfo}>
          <h3>Puyallup</h3>
          <p>
            3850 S Meridian #4
            <br />
            Puyallup, WA 98373
            <br />
            Telephone: (253) 268-0065
          </p>
          <p>
            Monday - Friday: 11:00am-9:00pm
            <br />
            Saturday: 11:00am-9:00pm
            <br />
            Sunday: Closed
          </p>
        </div>
        <div className={classes.locationinfo}>
          <img
            src="https://www.w3schools.com/images/picture.jpg"
            alt="Tacoma Location"
          />
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.locationinfo}>
          <h3>Tacoma</h3>
          <p>
            N Pearl St.
            <br />
            Tacoma, WA 98406
            <br />
            Telephone: (253) 212-3705
          </p>
          <p>
            Monday - Friday: 10:30am-9:00pm
            <br />
            Saturday: 11:00am-9:00pm
            <br />
            Sunday: Closed
          </p>
        </div>
        <div className={classes.locationinfo}>
          <img
            src="https://www.w3schools.com/images/picture.jpg"
            alt="Tacoma Location"
          />
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.locationinfo}>
          <h3>Tumwater</h3>
          <p>
            7205 Old Highway 99 SW #101
            <br />
            Tumwater, WA 98501
            <br />
            Telephone: (360) 943-6234
          </p>
          <p>
            Monday - Friday: 10:30am-8:00pm
            <br />
            Saturday: 11:00am-8:00pm
            <br />
            Sunday: Closed
          </p>
        </div>
        <div className={classes.locationinfo}>
          <img
            src="https://www.w3schools.com/images/picture.jpg"
            alt="Tacoma Location"
          />
        </div>
      </div>
    </div>
  );
};

export default Locations;
