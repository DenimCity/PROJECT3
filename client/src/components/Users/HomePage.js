import React, {Component} from "react";
import styled from "styled-components";

class HomePage extends Component {
  render() {
    return (
      <div>

        <Wrapper>
          <Main1>
            <TitleData>
              <h1>Welcome to ClickedIn!</h1>
              <Words>
                <div>
                  This is a page dedicated to photographers and their "Photogmanship. Come one
                  come all.
                </div>
                <br/>
                <div>
                  As one begins their photographer journey the most common question is, "Which
                  camera should I buy? & Which lens should I buy?"</div>

              </Words>
            </TitleData>
          </Main1>
          <TitleHeader>
            <ImageContainer>

              <h1>image</h1>
            </ImageContainer>
             
           
          </TitleHeader>
          <Main1>
            <Title>
              <TitleData>
                <h2>Welcome Visual Creators</h2>
                <Words>
                  <div>This is a website that helps gives photography newbees a jump on those
                    commonly asked questions.</div>
                  <br/>
                </Words>
              </TitleData>
            </Title>
          </Main1>
          <CameraWrapper>
            <CameraContainer>
              <CameraImageContainer>
                <img src="https://i.imgur.com/oRy88xo.jpg" alt=""/>
              </CameraImageContainer>
              <CameraInfo>
                <div>
                  <h2>Canon</h2>
                </div>
                <div>Model: EOS Rebel T5i
                </div>
                <div>Price: $549.00
                </div>
                <div>Reviews: 4.5/5
                </div>
                <div>
                  <a
                    href="https://www.bhphotovideo.com/c/product/945054-REG/canon_8595b003_eos_dig_rebel_t5i.html?ap=y&c3api=1876%2C%7Bcreative%7D%2C%7Bkeyword%7D&gclid=CjwKCAiAxJPVBRB4EiwAsCA4aeRSSZnFIM7XVs2cyfdMhXai6Zbjc1z26I5I0Dl1qhtx0lTYrOfoAxoCS7MQAvD_BwE"
                    target="blank">Purchase Link</a>
                </div>
              </CameraInfo>
            </CameraContainer>
            <CameraContainer>
              <CameraImageContainer>
                <img src="https://i.imgur.com/ttJqXWa.jpg" alt=""/>
              </CameraImageContainer>
              <CameraInfo>
                <div>
                  <h2>Sony</h2>
                </div>
                <div>Model: Alpha a5100 Mirrorless
                </div>
                <div>Price: $549.00
                </div>
                <div>Reviews: 4./65
                </div>
                <div>
                  <a
                    href="https://www.bestbuy.com/site/sony-alpha-a5100-mirrorless-camera-with-16-
                    // 50mm-retractable-lens-black/8428893.p?skuId=8428893&ref=212&loc=1&ksid=8f6452e
                    // 9-b69e-4d4e-aaf2-b397732c8782&ksprof_id=14&ksaffcode=pg266434&ksdevice=c&lsft=
                    // ref:212,loc:2"
                    target="blank">Purchase Link</a>
                </div>
              </CameraInfo>
            </CameraContainer>
            <CameraContainer>
              <CameraImageContainer>
                <img src="https://i.imgur.com/iQNA5eX.jpg" alt=""/>
              </CameraImageContainer>
              <CameraInfo>
                <div>
                  <h2>Nikon</h2>
                </div>
                <div>Model: D3400"
                </div>
                <div>Price: $499.00
                </div>
                <div>Reviews: 4.7/5
                </div>
                <div>
                  <a
                    href="https://www.bestbuy.com/site/nikon-d3400-dslr-camera-with-af-p-dx-nikkor
                    // -18-55mm-f-3-5-5-6g-vr-lens-black/5580135.p?skuId=5580135&cmp=RMX&extStoreId=5
                    // 13&ref=212&loc=1&ksid=8f6452e9-b69e-4d4e-aaf2-b397732c8782&ksprof_id=14&ksaffc
                    // ode=pg174631&ksdevice=c&lsft=ref:212,loc:2"
                    target="blank">Purchase Link</a>
                </div>
              </CameraInfo>
            </CameraContainer>
            <CameraContainer>
              <CameraImageContainer>
                <img src="https://www.adorama.com/images/Large/ifjxa5s.jpg" alt=""/>
              </CameraImageContainer>
              <CameraInfo>
                <div>
                  <h2>Fujima</h2>
                </div>
                <div>Model: Fujifilm X-A5 24.2MP
                </div>
                <div>Price:$599.00
                </div>
                <div>Reviews: 4.0/5
                </div>
                <div>
                  <a
                    href="https://www.adorama.com/ifjxa5s.html?gclid=CjwKCAiAxJPVBRB4EiwAsCA4aXZGI"
                    target="blank">Purchase Link</a>
                </div>
              </CameraInfo>
            </CameraContainer>
          </CameraWrapper>
        </Wrapper>
      </div>
    );
  }
}

export default HomePage;

const Main1 = styled.div `
  display: flex;
  flex-direction: column;
`

const Words = styled.div `
  display: flex;
  justify-content: center;
  flex-direction:column;
  width: 89%;
  height: 30%;
  text-align: center;

  p {
    font-size: 22px;
    @media (max-with: 700px) {
      font-size: 5px;
    }
  }
`

const TitleData = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 37px;
  @media (max-with: 700px) {
  }
`
const TitleHeader = styled.div `
  display: flex;
  flex-direction: row;
  @media (max-with: 700px) {
  }
`

const Title = styled.div `
 display:flex;
 flex-direction:column;
 text-align:center;
 @media (max-with:700px){
  width:10%
}
 `
const Wrapper = styled.div `
  flex-direction:  column;
  display:  flex;
  justify-content:  center;
  width:  100vw;
  height:  100vh;
 
`
const ImageContainer = styled.div `
background-image:url(https://i.imgur.com/gp9Klik.jpg);
width:100%;
position: relative;
z-index: 51;
display: block;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height:25vh;

h1{
  opacity:-9;
}

`

const CameraWrapper = styled.div `
display:flex;
flex-wrap:wrap;
justify-content:center;
@media (max-width: 669px) {
  justify-content:center;
  }
`

const CameraContainer = styled.div `
display:flex;
flex-direction:row;
justify-content:center;
flex-wrap:wrap;
@media (max-width: 669px) {
  flex-direction:column;
  }
`
const CameraImageContainer = styled.div `
max-width: 20vw;
margin-right:2vw;

@media (max-width: 669px) {
  max-width: 32vh;
  }
img {
  width:100%;
}
`
const CameraInfo = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
margin-right: 4rem;
margin-bottom: 1rem;
`
