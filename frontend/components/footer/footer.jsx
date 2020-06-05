import React from 'react';


class Footer extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      
      <div className="entire-footer">
          
        <ul className="list-of-skills" >
        {/* style={{ listStyle: "none" }}> */}
        <h4>Karl Konetskys' skills:</h4>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Ruby</li>
          <li>Rails</li>
          <li>Flux</li>
          <li>SQL</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>And more</li>
        </ul>



        <ul className="links-to-sites"
        style={{ listStyle: "none" }}>
        <li>
          <img src={window.footerStackOverflow}
          className="footer-link"
          onClick={event => window.location.href =
            'https://stackoverflow.com/users/13608231/karl-konetsky'}
            />
        </li>
        <li>
        <img src={window.footerLinkedIn}
        className="footer-link"  
        onClick={event => window.location.href = 
          'https://www.linkedin.com/in/karlkonetsky/'}
          />
        </li>
        <li>
        <img src={window.footerGithub} 
        className="footer-link"
        onClick={event => window.location.href =
          'https://github.com/Steelydanrules'}
          />
        </li>
          &copy; Karl Konetsky
          <br />
          Queens, NY 2020

        </ul>
      </div>
    )

  }
}




export default Footer;