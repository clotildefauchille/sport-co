import React from 'react';
import logo from 'src/assets/fairplay logo.svg';
import userIcon from 'src/assets/account_circle.svg';
import gradeIcon from 'src/assets/grade.svg';
import './index.scss';

const isLogged = false;

const Header = () => {
  switch (isLogged) {
    case true:
      return (
        <header className="header">
          <img className="header__logo" src={logo} alt="le logo" />
          <nav className="header__nav">
            <ul className="header__buttons">
              <li>
                <a><img className="header__user" src={userIcon} alt="l'icone de l'utilisateur" /></a>
              </li>
              <li>
                <a><img className="header__grade" src={gradeIcon} alt="l'icone de son grade" /></a>
              </li>
              <li>
                <a href="#" className="header__disconnect">Déconnexion</a>
              </li>
            </ul>
          </nav>
        </header>
      );
    default:
      return (
        <header className="header">
          <img className="header__logo" src={logo} alt="le logo" />
          <nav className="header__nav">
            <ul className="header__buttons">
              <li>
                <a href="#" className="header__login"><img className="header__icon" src={userIcon} alt="l'icone de l'utilisateur" /> connexion</a>
              </li>
              <li>
                <a href="#" className="header__signup">Inscription</a>
              </li>
            </ul>
          </nav>
        </header>
      );
  }
};

export default Header;
