import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Button } from 'react-floating-action-button';
import Navbar from './Navbar/navbar';
import Home from './Home/home';
import Timeline from './Timeline/timeline';
import Project from './Projects/project';
import Footer from './Footer/footer';
import Learn from './Learn/learn';


function App() {
  // this is variable will set the theme of website and logo according to theme
  const [theme, setTheme] = useState(false);
  const [img, setImg] = useState(
    'https://i.ibb.co/F6kqwHH/Pics-Art-05-31-01-28-58.jpg'
  );

  function theme_change() {
    // the function to changes the theme in which the root variables are been changes and sone syles of some objects also.
    if (theme === false) {
      // changes to dark theme
      document.body.style.backgroundColor = 'rgb(14,14,14)';
      document.documentElement.style.setProperty(
        '--background_color',
        'rgb(14,14,14)'
      );
      document.documentElement.style.setProperty('--text-color', '#000');
      document.documentElement.style.setProperty('--text-color2', '#fff');
      setImg('https://i.ibb.co/DMrJ8nb/Pics-Art-05-31-01-29-26.jpg');
      setTheme(true);
    } else {
      // changes to light theme
      document.body.style.backgroundColor = 'white';
      document.documentElement.style.setProperty('--background_color', '#fff');
      document.documentElement.style.setProperty('--text-color', '#fff');
      document.documentElement.style.setProperty('--text-color2', '#000');
      setImg('https://i.ibb.co/F6kqwHH/Pics-Art-05-31-01-28-58.jpg');
      setTheme(false);
    }
  }

  return (
    <>
      <div>
    {/* this will create a flouting button in the website*/}
        <Container>
          <Button
            tooltip="Theme Change"
            icon={'material-icons'}
            onClick={theme_change}
          />
        </Container>
      </div>
      <Router>
      {/*routing of the pages with the help of react-router-dom*/}
        <Navbar img_url={img} />
        <Switch>
          <Route exact path="/timeline">
            <Timeline />
          </Route>
        <Route exact path="/project">
            <Project/>
          </Route>
        <Route exact path="/learn">
            <Learn/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
