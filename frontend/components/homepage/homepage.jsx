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
        <img src={window.blankLoveToCodeURL} alt="we love people who code" width="500" height="500" style={{paddingTop: "1px"}} id="main-image" />
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
      </div>


      <div className="for-dev-by-dev">
        <h2 style={{ paddingTop: "175px" }}>For developers, by developers</h2>
        <hr className="breakpoint" width="50px"/>
        <p>console.log Overflow is an <Link to="/questions">open community</Link> for anyone that codes. 
        We help you get answers to your toughest coding questions, 
        share knowledge with your coworkers in private, and find your 
        next dream job.</p>
          <ul className="for-dev-by-dev-list" style={{ listStyle: "none" }} >
            <div className="for-dev-by-dev-list-item-container">
            <li className="for-dev-by-dev-list-item down-a-bit" height="350" width="312">
          
            <img src={window.leftForDev} />
            <h4>Public Q&A</h4>
              <p>Get answers to more than like 8 questions and give back 
              by sharing your knowledge with others.  <Link to="/signup">Sign up for an account!</Link>
              </p>
              <br />
              <Link to="/questions"><button className="by-dev-button-bottom" >See questions!</button></Link>
            </li>
            </div>
            <div className="for-dev-by-dev-list-item-container">
            <li className="for-dev-by-dev-list-item up-a-bit" height="350" width="312">
            
            <img src={window.centerForDev} />
            <h4>Show Off</h4>
              <p>Log in now and start sharing knowledge with your coworkers.  What
              are you waiting for?</p>
              <br />
              <Link to="/signup"><button className="by-dev-button-center" >Start now!</button></Link>

            </li>
            </div>
            <div className="for-dev-by-dev-list-item-container">
            <li className="for-dev-by-dev-list-item down-a-bit" height="350" width="312">
            
            <img src={window.rightForDev} />
            <h4>Give Jobs</h4>
            <p>Find the right candidate through one high-quality listing and offer 
            roles based on title, technology stack, salary, location, and more.</p>
            <br />
              <form action="https://www.linkedin.com/in/karlkonetsky/">
                <input type="submit" className="by-dev-button-bottom" value="View that candidate!" />
            </form>
            </li>
            </div>
          </ul>
      </div>



      













      
      </div>
    )

  }
}




export default Homepage;