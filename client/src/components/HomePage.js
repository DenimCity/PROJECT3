import React, { Component} from 'react'
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom'
// import styled from 'styled-components'



// const header = styled.div`



// `
// const NavBar = styled.div`



// `


class HomePage extends Component {


  render(){


    return(

<div className="body">
            <div className="HomePageBackground">
              <span className="homePageText">
                <h1>Welcome to ClickedIn!</h1>
              </span>
            </div>
            
            
            <nav className="navbar">

              <div className="button">
                <a href="#home">ClickedIn</a>
              </div>
                <div className="button">
                 <Link to="/user">User</Link>
                </div>
                <div className="buttonRight">
                  <a href="http://">Photos</a>
                </div>
            </nav>
            <div className="homePageBtmContainer">
              <h2>Welcome Visual Creators</h2>
              <div className="textContainer">
              <h3>Taking Over The World One Click At a Time</h3>
                <p>
                  A page dedicated to photographers and their "Photogmanship. Come one come all.
                  Become a user and upload away.
                </p>
              </div>
              <div className="textContainer">
              <p>
              With over 10 years of experience in the photography trade, 
              we provided a avenue for our artists. In need of a influencer, Look no further! 
              </p>
              </div>
            </div>
          </div> 
    )
}
}



export default HomePage