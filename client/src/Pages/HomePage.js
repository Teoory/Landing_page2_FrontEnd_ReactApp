import React from 'react';
import headset1 from '../Assets/headset1.png';
import headset2 from '../Assets/headset2.png';
import headset3 from '../Assets/headset3.png';
import saleImage from '../Assets/salePNG.png';

import mac from '../Assets/mac.png';
import mac2 from '../Assets/mac2.png';
import macs from '../Assets/macs.png';
import phones from '../Assets/iphone.png';
import iphonehalf from '../Assets/iphonehalf.png';
import tablet from '../Assets/tablet.png';
import watch from '../Assets/watch.png';
import camera from '../Assets/camera.png';
import headphones from '../Assets/headphones.png';

const HomePage = () => {
  return (
    <div>
      <div className="home-top">
        <div className="top-left">
          <h1>Introducting the New Headsets</h1>
          <p>Discover it with its best design and new features!</p>
          <button>Shop Now</button>
        </div>

        <div className="top-right">
          <div className="rtp">
            <div className="rtp1">
              <img src={headset1} alt="headset1" />
            </div>
            <div className="rtp2">
              <img src={headset2} alt="headset2" />
            </div>
          </div>
          <div className="rbt">
            <div className="rbt1">
              <img src={headset3} alt="headset3" />
            </div>
            <div className="rbt2">
              <h3>SteelSeries Arctis Pro</h3>
              <h4>249 $</h4>
              <button>Get More</button>
            </div>
          </div>
        </div>
      </div>

      
      <div className="marquee-container">
        <div className="marquee-content">
          {[...Array(100)].map((_, index) => (
            <img key={index} src={saleImage} alt="sale" />
          ))}
        </div>
      </div>

      <div className="catogoriesArea">
        <h1>Categories</h1>
        <div className="catogories">
          <a href='/' className="category">
            <img src={mac} alt="mac" />
            <h3>Mac</h3>
          </a>
          <a href='/' className="category">
            <img src={phones} alt="phones" />
            <h3>Phones</h3>
          </a>
          <a href='/' className="category">
            <img src={tablet} alt="tablet" />
            <h3>Tablet</h3>
          </a>
          <a href='/' className="category">
            <img src={watch} alt="watch" />
            <h3>Watch</h3>
          </a>
          <a href='/' className="category">
            <img src={camera} alt="camera" />
            <h3>Camera</h3>
          </a>
          <a href='/' className="category">
            <img src={headphones} alt="headphones" />
            <h3>Headphones</h3>
          </a>
        </div>
      </div>

      <div className="bestSellery">
        <div className="bestThisYear">
          <div className="bty-left">
            <h1>Best Seller This Year</h1>
            <p>It is the best with its fast charging time, unique design and new features!</p>
          </div>
          <div className="bty-right">
            <img src={iphonehalf} alt="phones" />
            <div className="bty-button">
              <button>Learn More</button>
            </div>
          </div>
        </div>

          <div className="newsArea">
            <div className="newestLaptop">
              <div className="nwl-left">
                <div className="nwl-item">
                  <h1>The Newest Laptops.</h1>
                  <button>Find More</button>
                </div>
              </div>
              <div className="nwl-right">
                <img src={macs} alt="mac" />
              </div>
            </div>

            <div className="generateComputer">
              <div className="nwl-left">
                <div className="nwl-item">
                  <h1>Easy to carry, new generation computer.</h1>
                  <button>Discover</button>
                </div>
              </div>
              <div className="nwl-right">
                <img src={mac2} alt="mac" />
              </div>
            </div>
          </div>
      </div>

    </div>
  )
}

export default HomePage