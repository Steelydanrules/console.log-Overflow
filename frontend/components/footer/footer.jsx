import React from 'react';


class Footer extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div className="entire-footer-background">

      <div className="entire-footer">
          
        <ul className="list-of-skills" >
        {/* style={{ listStyle: "none" }}> */}
        <h4>Karl Konetsky's skills:</h4>
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
      
        <ol className="beatles-albums" >
          {/* style={{ listStyle: "none" }}> */}
          <h4>Greatest Beatles albums, Ranked</h4>
          <li>Abbey Rd</li>
          <li>Rubber Soul</li>
          <li>Sgt Pepper</li>
          <li>The White Album</li>
          <li>Revolver</li>
          <li>Beatles for Sale</li>
          <li>Magical Mystery Tour</li>
          <li>Help!</li>
        </ol>


        <ul className="links-to-sites"
        style={{ listStyle: "none" }}>
        <li>
          <img src={window.footerAngelList}
          className="footer-link"
          onClick={event => window.location.href =
            'https://angel.co/u/karl-konetsky'}
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
        <p>
           
          &copy; console.log Overflow
          <br />
          Karl Konetsky
          <br />
          Queens, NY 2020
        </p>
        </ul>
      </div>
      </div>
    )

  }
}




export default Footer;