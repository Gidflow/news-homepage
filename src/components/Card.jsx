//import React from 'react'
import web3Image from "../assets/images/image-web-3-desktop.jpg";
import "./Card.css";
import images from "../components/images"

const Card = () => {
  return (
<div className="card-component">
    <div className="card-1">
    <div className="tile-1">
    <img src={web3Image} alt="web3" />
    <div className="tile-1-description">
        <h1>The Bright Future of Web 3.0?</h1>
        <div>
        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
          But is it really fulfilling its promise?</p>
          <button>Read more</button>
        </div>
        
    </div>
</div>
<div className="tile-2">
<h2>New</h2>
<div className="tile-2-description">
    <h4><a href="#">Hydrogen VS Electric Cars</a></h4>
    <p>
  Will hydrogen-fueled cars ever catch up to EVs?</p>
  <div className="line"></div>
</div>
<div className="tile-2-description">
    <h4><a href="#">The Downsides of AI Artistry</a></h4>
    <p>
    What are the possible adverse effects of on-demand 
    AI image generation?</p>
    <div className="line"></div>
</div>
<div className="tile-2-description">
    <h4><a href="#">Is VC Funding Drying Up?</a></h4>
    <p>
    Private funding by VC firms is down 50% YOY. 
    We take a look at what that means.</p>
 
</div>
  
</div>
    </div>
    <div className="card-2">
        <div className="card-2-tile">
        <img src={images.retro} alt="retro" />
        <div className="card-2-text">
            <h3>01</h3>
            <h4><a href="#">Reviving Retro PCs</a></h4>
            <p>What happens when old PCs are given modern upgrades?</p>
        </div>
        </div>
        <div className="card-2-tile">
        <img src={images.top} alt="top" />
        <div className="card-2-text">
            <h3>02</h3>
            <h4><a href="#">Top 10 Laptops of 2022</a></h4>
            <p>Our best picks for various needs and budgets.</p>
        </div>
        </div>
        <div className="card-2-tile">
        <img src={images.gaming} alt="gaming" />
        <div className="card-2-text">
            <h3>03</h3>
            <h4><a href="#">The Growth of Gaming</a></h4>
            <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
        </div>
    </div>
</div>
  )
}

export default Card