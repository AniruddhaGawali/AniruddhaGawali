import './navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

function Navbar({ img_url }) {
  const [imgurl, setImgUrl] = useState(img_url);
  const [oldidno, setoldid] = useState(null);
  const [first_class, setclass] = useState('links active_');

  const [menu, setMenu] = useState(false);
  const display_set = useSpring({
    display: menu ? 'none' : 'block'
  });

  function change_nav_item(e) {
    if (oldidno !== null) {
      if (e.target.classList !== 'material-icons'){
        oldidno.target.classList.remove('active_');
        e.target.classList.add('active_');
        setoldid(e);
      }
    } else {
      if(e.target.classList !== 'material-icons'){
        setclass('links');
        e.target.classList.add('active_');
        setoldid(e);
      }
    }
  }
  return (
    <>
      <nav>
        <animated.span
          className="nav_item"
          style={display_set}
          onClick={change_nav_item}
        >
          <Link to="/" className={first_class}>
            <span class="material-icons">home</span>
            Home
          </Link>
        </animated.span>
        <animated.span className="nav_item" style={display_set}>
          <Link to="/timeline" className="links" onClick={change_nav_item}>
            <span class="material-icons">event</span>
            Timeline
          </Link>
        </animated.span>
        <span className="logo_span">
          <img
            className="logo"
            src={imgurl}
            alt="AKG"
            onMouseOver={() => {
              setImgUrl('https://i.ibb.co/dWMYT20/Pics-Art-06-01-08-32-27.png');
            }}
            onMouseOut={() => {
              setImgUrl(img_url);
            }}
            onClick={() => {
              if (window.matchMedia('(max-width:730px)').matches) {
                setMenu(!menu);
              }
            }}
          />
          {/* </Link> */}
        </span>
        <animated.span className="nav_item" style={display_set}>
          <Link to="/project" className="links" onClick={change_nav_item}>
            <span class="material-icons">code</span>
            Projects
          </Link>
        </animated.span>
        <animated.span className="nav_item" style={display_set}>
          <Link to="/learn" className="links" onClick={change_nav_item}>
            <span class="material-icons">school</span>
            Learn
          </Link>
        </animated.span>
     </nav>
    </>
  );
}
export default Navbar;
