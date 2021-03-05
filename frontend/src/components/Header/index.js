import React from 'react';
import PropTypes from 'prop-types';
import logo from 'src/assets/fairplay logo.svg';
import userIcon from 'src/assets/account_circle.svg';
import gradeIcon from 'src/assets/grade.svg';
import { Link } from 'react-router-dom';
import './index.scss';

const Header = ({ isLogged }) => {
  // console.log(isLogged);
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
                <Link to="/connexion" className="header__login"><img className="header__icon" src={userIcon} alt="l'icône de l'utilisateur" />Connexion</Link>
              </li>
              <li>
                <Link to="/inscription" className="header__signup">Inscription</Link>
              </li>
            </ul>
          </nav>
        </header>
      );
  }
};

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default Header;
