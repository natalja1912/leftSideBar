import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import Navigation from "../Navigation/Navigation";
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

function App() {
  /*управление размером экрана, чтобы сворачивать боковое меню, если ширина экрана меньше 1200px*/
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1200px)' });

  /*переменная isSideBarActive показывает включена ли кнопка отображения бокового меню*/
  const [isSideBarActive, setSideBarActive] = useState(isBigScreen);

  function toggleMenuButton() {
    setSideBarActive((prev) => !prev);
  }

  return (
    <div className="page">
      <Header isSideBarActive={isSideBarActive} changeSideBarState={toggleMenuButton} />
      { isSideBarActive && <Navigation></Navigation>}
      <Switch>
          <Route path='/home' component={Main} />
          <Route path='/aboutus' component={AboutPage} />
          <Route exact path='/products' component={ProductsPage} />
          <Route path='/contactus' component={ContactUsPage} />
          <Redirect to="/home" />
      </Switch>
    </div>
  );
}

const AboutPage = () => {
  return (
    <p>About Us</p>
  );
}

const ContactUsPage = () => {
  return (
    <p>Contact Us</p>
  );
}

const ProductsPage = () => {
  return (
    <p>Our Products</p>
  );
}

export default withRouter(App);


