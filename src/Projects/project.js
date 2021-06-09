import React, { useState, useEffect } from 'react';
import './project.css';
import Project_data from './project_data';
import Shape from './shape.svg';
import Circle from './circle.svg';

function Project() {
  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState(Project_data[index].title);
  const [img, setImg] = useState(Project_data[index].img_url);
  const [desc, setDesc] = useState(Project_data[index].desc);
  const [link, setLink] = useState(Project_data[index].link);

  useEffect(() => {
    setTitle(Project_data[index].title);
    setImg(Project_data[index].img_url);
    setDesc(Project_data[index].desc);
    setLink(Project_data[index].link);
  }, [index]);

  function next() {
    if (index === Project_data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function pervious() {
    if (index === 0) {
      setIndex(Project_data.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  return (
    <>
      <img src={Shape} alt="" className="_shape" />
      <img src={Circle} alt="" className="_circle" />
      <img src={Shape} alt="" className="__shape" />
      <img src={Circle} alt="" className="__circle" />

      <div className="projects">
        <button
          className="per"
          onClick={() => {
            pervious();
          }}
        >
          Pervious
        </button>
        <div className="project">
          <h1 className="pro_title">{title}</h1>
          <img src={img} alt="" className="ico" />
          <p className="pro_desc">{desc}</p>
          <button
            className="project_link"
            onClick={() => {
              window.open(link);
            }}
          >
            Know More
          </button>
        </div>
        <button
          className="nex"
          onClick={() => {
            next();
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Project;
