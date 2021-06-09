import React from "react";
import "./social.css"

function Social(props) {
  return (
    <>
    <div className="social_media" style={props.style}>
    <div onClick={()=>{window.open('https://www.facebook.com/aniruddha.gawali.14')}} title="Facebook" className="fa fa-facebook"></div>
    <div onClick={()=>{window.open('https://www.instagram.com/aniruddha.gawali/')}} title="Instagram" className="fa fa-instagram"></div>
    <div onClick={()=>{window.open('https://mobile.twitter.com/AniruddhaAKG')}} title="Twitter" className="fa fa-twitter"></div>
    <div onClick={()=>{window.open('https://github.com/AniruddhaGawali')}} title="Github" className="fa fa-github"></div>
    </div>
    </>

  );
}

export default Social;
