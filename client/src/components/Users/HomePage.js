import React, { Component } from "react";
import styled from "styled-components";

class HomePage extends Component {
  render() {
    return (
      <Wrapper>
        <Main1>
          <TitleData>
            <h1>Welcome to ClickedIn!</h1>
            <Words>
              <p>
                A page dedicated to photographers and their "Photogmanship. Come
                one come all. Become a user and upload away.
              </p>
            </Words>
          </TitleData>
        </Main1>
        <TitleHeader>
          <ImageContainer>
            <img src="https://i.imgur.com/gp9Klik.jpg" alt="" />
          </ImageContainer>
        </TitleHeader>
        <Main1>
          <Title>
            <TitleData>
              <h2>Welcome Visual Creators</h2>
              <Words>
                <p>
                  With over 10 years of experience in the photography trade, we
                  provided a avenue for our artists. In need of a influencer,
                  Look no further!
                </p>
              </Words>
            </TitleData>
          </Title>
        </Main1>
      </Wrapper>
    );
  }
}
export default HomePage;

const Main1 = styled.div`
  display: flex;
  flex-direction: column;
`

const Words = styled.div`
  display: flex;
  justify-content: center;
  width: 89%px;
  height: 30%px;
  text-align: center;

  p {
    font-size: 22px;
    @media (max-with: 700px) {
      font-size: 5px;
    }
  }
`

const TitleData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 37px;
  @media (max-with: 700px) {
  }
`
const TitleHeader = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-with: 700px) {
  }
`

const Title = styled.div`
 width: 20%
 display:flex;
 flex-direction:column;
 text-align:center;
 @media (max-with:700px){
  width:10%
}
 `
const Wrapper = styled.div`
  flex-direction:  column;
  display:  flex;
  justify-content:  center;
  width:  100vw;
  height:  100vh;
  @media (max-with: 700px) {
  }
`
const ImageContainer = styled.div`
  img {
    width: 100%;
    height: 317px;
  }
`
