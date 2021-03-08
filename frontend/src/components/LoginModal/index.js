import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom';

const LoginModal = ({ displayed }) => {
  return (
    <>
      {displayed && (
        <div className="modal">
          <div className="modal__container">
           
            <div>inscrivez vous pour rejoindre cette activité !</div>
            <Link to="/connexion" className="modal__login">
              connexion
            </Link>
            <Link to="/connexion" className="modal__signup">
              Inscription
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
