import React from 'react';
import './home.css';
import Shape from './shape.svg';
import Circle from './circle.svg';
import Typewriter from 'typewriter-effect';
import Social from '../Social/social';

function Home() {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="info">
            <div className="greet">
              <Typewriter
                onInit={typewriter => {
                  typewriter
                    .pauseFor(3000)
                    .typeString('Hello!')
                    .start();
                }}
              />
            </div>
            <h1>Aniruddha Gawali</h1>
            <h3>Coder | Student</h3>
            <div className="social__">
              <Social className="social__" />
            </div>
          </div>
          <div className="bimoji">
            <img
              src="https://i.ibb.co/QkWYsXM/Pics-Art-05-30-05-41-22.png"
              alt="bimoji"
              className="bimojit"
            />
            <img
              src="https://i.ibb.co/VMCyHW6/Pics-Art-06-02-11-25-54.png"
              alt=""
              className="body"
            />

            <div className="forearm">
              <img
                src="https://i.ibb.co/tMdRkxB/Pics-Art-06-02-11-21-22.png"
                alt=""
                className="hand"
              />
              <img
                src="https://i.ibb.co/MZcJMbT/Pics-Art-06-02-11-22-43.png"
                alt=""
                className="finger"
              />
            </div>
          </div>
        </div>
      </div>
      <img src={Shape} alt="" className="shape" />
      <img src={Circle} alt="" className="circle_shape" />
      <article>
        <h4>Hello I am Aniruddha Gawali (AKG),</h4>
        <p>
          This is my personal website/portfolio. I am from India and I love
          coding and Computers. I have creates lots of project you can explore
          them on my website. My favorite language is python so I have made lots
          of of projects on it like AI, Tkinter application and all this stuff
          are been self learned by me, from youtube,internet and practice.{' '}
        </p>
      </article>
    </>
  );
}

export default Home;
