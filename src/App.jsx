
import './App.css';

import nft1 from "./img/nft1.png"
import nft2 from "./img/nft2.png"
import nft3 from "./img/nft3.png"
import nft4 from "./img/nft4.png"
import nft5 from "./img/nft5.png"
import nft6 from "./img/nft6.png"
import nft7 from "./img/nft7.png"
import nft8 from "./img/nft8.png"
import nft9 from "./img/nft9.png"
import coin from "./img/coin.png"

function App() {
  return (
   <>
    <div>
        <div className="section1"> 
          {/* <nav className="navbar">
            <a className="logo" href>Logo</a>
            <div className="nav-links"> 
              <ul>
                <li><a href>Team</a></li>
                <li><a href>Team</a></li>
                <li><a href>Team</a></li>
                <li><a href>Team</a></li>
              </ul>
            </div>
          </nav> */}
          
         
          <div className="scroll">
            <a href="#section2"><span>EXPLORE</span></a>
          </div>
        </div>
     
        <div id="section2">
          <div className="info1"> 
            <img className="logo-section" src="./img/logo.png" alt="" />
            <p>5900 NEXT-GENERATION MILE HIGH APES <br />
              UNIQUELY DESIGNED AND BUILT ON THE SOLANA <br /> BLOCKCHAIN.</p>
          </div>
        </div>
        <div className="section3">
          <div className="container-carousel">
            <div className="slider-container">
              <div className="slider">
                <div className="slider-track">
                  <div className="slide">
                    <img src={nft1} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft2} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft3} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft4} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft5} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft6} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft7} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft8} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft9} alt="" />
                  </div>
                  {/* MSIMAS 9 */}
                  <div className="slide">
                    <img src={nft1} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft2} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft3} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft4} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft5} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft6} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft7} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft8} alt="" />
                  </div>
                  <div className="slide">
                    <img src={nft9} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="team">
          <h3 className="title-team">TEAM</h3>
          <div className="container">
            <div className="card">
              <div className="content">
                <div className="imgBx"><img src={nft1} alt="" /></div>
                <div className="contentBx">
                  <h3>CryptoChris247 <br /> <span> CEO</span></h3>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx"><img src={nft1} alt="" /></div>
                <div className="contentBx">
                  <h3>JOHN316<br /> <span> CEO </span></h3>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx"><img src={nft1} alt="" /></div>
                <div className="contentBx">
                  <h3>HAILEY <br /> <span> CEO</span></h3>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx"><img src={nft1} alt="" /></div>
                <div className="contentBx">
                  <h3>HAILEY <br /> <span> CEO</span></h3>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx"><img src={nft1} alt="" /></div>
                <div className="contentBx">
                  <h3>HAILEY <br /> <span> CEO</span></h3>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx"><img src={nft1} alt="" /></div>
                <div className="contentBx">
                  <h3>HAILEY <br /> <span> CEO</span></h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="coin-section">
          <img src={coin} className="coin-img" alt="" />
          <div className="text-coin">
            <h4>$MHAC</h4>
            <span>THE COIN</span>
            <p>Our native token $KUSH gives daily rewards <br /> with an array of emissions rates depending <br />
              on the rarity of your Shiba collectible. <br />
              It is our main utility token that will be offered <br />
              to obtain certain cannabis related products <br />
              and other rewards in the <a href="https://www.inceptionaio.io/">InceptionAIO</a> network.</p>
          </div>
        </section>
        <section className="faq-section">
        </section>
      </div>
   </>
  );
}

export default App;
