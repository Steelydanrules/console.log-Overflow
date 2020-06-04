import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  changeQuestionsImage(num){
    let oldImages = document.getElementsByClassName("question-main-image-change-shown")
    let oldImagesArray = Array.from(oldImages);
    oldImagesArray[0].className = "question-main-image-change-hidden"
    oldImagesArray[1].className = "question-main-image-change-hidden"

    let newImages = document.getElementById(`image-${num}`)
    newImages.className = "question-main-image-change-shown"

    let newBottom = document.getElementById(`bottom-text-${num}`)
    newBottom.className = "question-main-image-change-shown"
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
    
      <div className="questions-are-everywhere">
      <h2 style={{ paddingTop: "50px" }}>Questions are abundant, limited answers are on console.log Overflow</h2>
        <div className="clickable-list-three-cols">
          <ul className="clickable-list-col-one-three" style={{ listStyle: "none" }}>
              <li onClick={() => this.changeQuestionsImage("1")}>
              <img src={window.questionsTab1} /> Ask a question
            </li>    
              <li onClick={() => this.changeQuestionsImage("2")}>
              <img src={window.questionsTab2} /> Vote on everything
            </li>    
              <li onClick={() => this.changeQuestionsImage("3")}>
              <img src={window.questionsTab3} /> Answer questions
            </li>    
          </ul>

            <img src={window.questionsMain1} id="image-1" className="question-main-image-change-shown" />
            <img src={window.questionsMain2} id="image-2" className="question-main-image-change-hidden" />
            <img src={window.questionsMain3} id="image-3" className="question-main-image-change-hidden" />
            <img src={window.questionsMain4} id="image-4" className="question-main-image-change-hidden" />
            <img src={window.questionsMain5} id="image-5" className="question-main-image-change-hidden" />
            <img src={window.questionsMain6} id="image-6" className="question-main-image-change-hidden" />



          <ul className="clickable-list-col-one-three" style={{ listStyle: "none" }}>
              <li onClick={() => this.changeQuestionsImage("4")}>
              <img src={window.questionsTab4} /> Tag your question
            </li>    
              <li onClick={() => this.changeQuestionsImage("5")}>
              <img src={window.questionsTab5} /> Accept and answer
            </li>    
              <li onClick={() => this.changeQuestionsImage("6")}>
              <img src={window.questionsTab6} /> Get a star
            </li>    
          </ul>
        </div>
        <div className="fourhundredpixels">
          <p id="bottom-text-1" className="question-main-image-change-shown">Ask a question publicly on
            our site and get insigntful answers.</p>
          <p id="bottom-text-2" className="question-main-image-change-hidden">Upvoting helps exceptional
            content rise to the top and bring awareness to useful responses.</p>
          <p id="bottom-text-3" className="question-main-image-change-hidden">Answer a question to share
            your knowledge with the world or in private with your team.</p>
          <p id="bottom-text-4" className="question-main-image-change-hidden">Tags help make information
            searchable and find answers that are important to you.</p>
          <p id="bottom-text-5" className="question-main-image-change-hidden">Accept the answer which solved
            your problem to let others benefit from the valuable information.</p>
          <p id="bottom-text-6" className="question-main-image-change-hidden">Our reputation system rewards
            both the new & experienced based on contribution and activity.</p>
          <br />
        </div>
          <button onClick={event => window.location.href = '/signup'} 
          className="orange-button-center">
            Create an account</button>
      </div>

      <div className="learn-and-grow">
      


      </div>


    </div>
    )

  }
}




export default Homepage;