import React from "react";
import Footer_shape from "./footer.svg";
import "./footer.css"
import Social from "../Social/social"


function Footer() {
  return (
    <>
    {/* this will create a footer of website */}
    <footer>
    <div className="info_">
    
    {/* this will add all copyrights of the website */}
      <div className="copyright">
        <p>Website is Created and Design by AKG <br/>
        All Copyrights of Design and Images are of AKG</p>
      </div>

      <div>
          {/* this will create a social media contacts */}
        <div className="social"><Social  font_size='font-size:2em'/></div>
        
        {/* this will provide links of all helpers */}
        <div className="help">
          <a href="https://app.haikei.app/" target="_blank" rel="noreferrer">Haikei</a>
          <a href="https://imgbb.com/" target="_blank" rel="noreferrer">Imgbb</a>
          <a  href="https://www.softr.io/tools/svg-shape-generator" target="_blank" rel="noreferrer" >Softr</a>
        </div>

      </div>
    </div>
    <img src={Footer_shape} id="footer" alt=""/>
    </footer>
    </>
  );
}

export default Footer;
