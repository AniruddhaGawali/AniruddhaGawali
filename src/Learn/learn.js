import React from 'react';
import './learn.css';
import Angular from './svg_icon/angular.svg';
import Cpp from './svg_icon/cpp.svg';
import Css from './svg_icon/css.svg';
import Html from './svg_icon/html.svg';
import Js from './svg_icon/js.svg';
import react from './svg_icon/react.svg';
import Python from './svg_icon/python.svg';
import Linux from './svg_icon/linux.svg';
import Github from './svg_icon/github.svg';
import Sublime from './svg_icon/sublime.svg';
import Stackblitz from './svg_icon/stackblitz.svg';
import Vscode from './svg_icon/vscode.svg';
import Shape from './shape.svg';
import Circle from './circle.svg';

function Learn() {
  return (
    <div className="learn_main">
      <h1>Languages and Framework</h1>
      <div className="Learn">
        <img src={Html} alt="" className="logo_img" />
        <img src={Css} alt="" className="logo_img" />
        <img src={Js} alt="" className="logo_img" />
        <img src={Cpp} alt="" className="logo_img" />
        <img src={Python} alt="" className="logo_img" />
        <img src={react} alt="" className="logo_img" />
        <img src={Angular} alt="" className="logo_img" />
      </div>
      <h1>Tools</h1>
      <div className="tools">
        <img src={Vscode} alt="" className="logo_img" />
        <img src={Sublime} alt="" className="logo_img" />
        <img src={Stackblitz} alt="" className="logo_img" />
        <img src={Github} alt="" className="logo_img" />
        <img src={Linux} alt="" className="logo_img" />
      </div>
      <img src={Shape} alt="" className="_shape_" />
      <img src={Circle} alt="" className="_circle_" />
      <img src={Circle} alt="" className="_circle__" />
      <img src="https://i.ibb.co/6YvVmxS/Pics-Art-06-09-09-44-28.png" alt="" className="_bimoji_" />
    </div>
  );
}
export default Learn;
