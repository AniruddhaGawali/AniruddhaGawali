import React, { useState } from 'react';
import Dates from './data';
import './timeline.css';
import Shape from './shapes.svg';
import Circle from './circle.svg';

function Timeline() {
  const [title, setTitle] = useState(Dates[0].title);
  const [dates, setDates] = useState(Dates[0].dates);
  const [context, setContext] = useState(Dates[0].context);
  const [old_e, setold_e] = useState(null);
  const [style_, setStyle_] = useState('active');

  function change_content(index) {
    setTitle(Dates[index].title);
    setDates(Dates[index].dates);
    setContext(Dates[index].context);
  }
  function changecolor(e) {
    if (old_e === null) {
      e.target.style.background = 'var(--main-color)';
      e.target.style.color = 'var(--text-color)';
      setStyle_('');
      setold_e(e);
    } else {
      old_e.target.style.background = 'transparent';
      old_e.target.style.color = 'var(--text-color2)';
      e.target.style.background = 'var(--main-color)';
      e.target.style.color = 'var(--text-color)';
      setold_e(e);
    }
  }

  return (
    <>
      <img src={Shape} alt="" className="shape_" />
      <img src={Circle} alt="" className="circle_" />
      <img src={Circle} alt="" className="circle__" />
      <img
        src="https://i.ibb.co/FDMSPrJ/Pics-Art-05-30-06-54-36.png"
        alt=""
        className="bimoji_"
      />
      <div className="timeline">
        <div className="date">
          {Dates.map((dates, index) => {
            if (index === 0) {
              return (
                <h1
                  onClick={e => {
                    changecolor(e);
                    change_content(index);
                  }}
                  id={style_}
                >
                  {dates.date}
                </h1>
              );
            } else {
              return (
                <h1
                  onClick={e => {
                    changecolor(e);
                    change_content(index);
                  }}
                >
                  {dates.date}
                </h1>
              );
            }
          })}
        </div>
        <div className="content">
          <div>
            <h2 className="title">{title}</h2>
            <h3 className="dates">{dates}</h3>
            <p className="context">{context}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timeline;
