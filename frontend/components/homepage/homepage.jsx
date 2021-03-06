import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.main = React.createRef();
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
        <img src={window.blankLoveToCodeURL} alt="we love people who code" style={{paddingTop: "1px"}} id="main-image" />
          <h1 className="front-of-image" style={{ paddingTop: "150px" }}>We &lt;3 people who code!</h1>
        <p className="front-of-image">We build products that empower developers
          and connect them to solutions that enable
          productivity, growth, and discovery.
        </p>
          <br />

        <div className="top-buttons-homepage">
            <button className="white-button"
              onClick={event => window.location.href =
            'https://steelydanrules.github.io/Karl_Konetsky.github.io/'}
            >My Personal Site</button>

            <Link to="/questions">
            <button className="orange-button">
            {/* onClick={event => window.location.href = "#questions-everywhere"}> */}
              Jump to Questions!</button>
            </Link>
        </div>
      </div>


      <div className="for-dev-by-dev" id="for-dev">
        <h2 style={{ paddingTop: "175px" }}>For developers, by developers</h2>
        <hr className="breakpoint" width="50px"/>
        <p>console.log Overflow is an <Link to="/questions">open community</Link> for anyone that codes. 
        We help you get answers to your toughest coding questions, 
        share knowledge with your coworkers in private, and find your 
        next dream job.</p>
          <ul className="for-dev-by-dev-list" style={{ listStyle: "none" }} >
            <div className="for-dev-by-dev-list-item-container">
            <li className="for-dev-by-dev-list-item down-a-bit">
          
            <img src={window.leftForDev} />
            <h4>Public Q&A</h4>
              <p>Get answers to more than like 8 questions and give back 
              by sharing your knowledge with others.  <Link to="/signup">Sign up for an account!</Link>
              </p>
              <br />
              <Link to="/questions"
              onClick={() => $(window).scrollTop(100)}
              ><button className="by-dev-button-bottom" >See questions!</button></Link>
            </li>
            </div>
            <div className="for-dev-by-dev-list-item-container">
            <li className="for-dev-by-dev-list-item up-a-bit" height="350" width="312">
            
            <img src={window.centerForDev} />
            <h4>Show Off</h4>
              <p>Log in now and start sharing knowledge with your coworkers.  What
              are you waiting for?</p>
              <br />
              <Link to="/signup"
              onClick={() => $(window).scrollTop(100)}
              ><button className="by-dev-button-center" >Start now!</button></Link>

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
                <input type="submit" className="by-dev-button-bottom"
                    style={{ fontFamily: "Work Sans, sans-serif"}}
                value="View that candidate!" />
            </form>
            </li>
            </div>
          </ul>
      </div>
    
      <div className="questions-are-everywhere" id="questions-everywhere">
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
            our site and hopefully you'll get insigntful answers.</p>
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
          <Link to="/signup"><button className="orange-button-center"
          onClick={ () => $(window).scrollTop(100) }>
            Create an account</button>
          </Link>
      </div>

      <div className="learn-and-grow">
        <h2 style={{ paddingTop: "50px" }}>Learn and grow with console.log Overflow</h2>
        <ul className="learn-and-grow-list">
          <li className="learn-and-grow-list-item">
            <img src={window.learnAndGrow1} />
            <h4>Write the script of the future</h4>
              <br />
          </li>
          <li className="learn-and-grow-list-item">
            <img src={window.learnAndGrow2} />
              <h4>Support open source</h4>
              <br />
          </li>
          <li className="learn-and-grow-list-item">
            <img src={window.learnAndGrow3} />
              <h4>Acquire and share knowledge</h4>
          </li>
          <li className="learn-and-grow-list-item">
            <img src={window.learnAndGrow4} />
              <h4>Find career opportunities</h4>
              <br />
          </li>
        </ul>

        <ul className="learn-and-grow-p-tag">
          <li className="learn-and-grow-p-tag-item">
                Get your coding questions answered to learn, build, 
                and level up whether you’re beginning with JavaScript 
                or a console.log professional.
          </li>

          <li className="learn-and-grow-p-tag-item">
              Reach users of your project by following tags, answering 
              newcomer questions, and empowering experts in the community.
          </li>

          <li className="learn-and-grow-p-tag-item">
                Answer questions and gain insights from an audience of 
                developers using your technology on console.log Overflow.
          </li>

          <li className="learn-and-grow-p-tag-item">
                <Link to="/signup"
                onClick={() => $(window).scrollTop(100)}
                >Create a profile</Link> that shows off your expertise and credentials 
                to help you make your next move. Start your Developer Story.
          </li>
        </ul>


      </div>


    </div>
    )

  }
}




export default Homepage;