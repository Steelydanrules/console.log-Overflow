import React from 'react';
import { Link } from 'react-router-dom';


class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <div>
      <div className="top-image-stuff">
        <img src="assets/blanklovetocode.png" alt="we love people who code" style={{paddingTop: "1px"}} id="main-image" />
          <h1 className="front-of-image" style={{ paddingTop: "150px" }}>We LOVE people who code!</h1>
          <p className="front-of-image">We build products that empower developers
            and connect them to solutions that enable
            productivity, growth, and discovery.
          </p>
            <br />

          <div className="top-buttons-homepage">
          <button className="white-button">will add l8r</button>
          <button className="orange-button">will add l8r</button>
          </div>

          <div className="for-dev-by-dev">
          <h2 style={{ paddingTop: "175px" }}>For developers, by developers</h2>
          <hr width="3%" color="orange" height="12px"  />
          </div>


      </div>
    </div>
    )

  }
}




export default Homepage;