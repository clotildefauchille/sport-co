import React from 'react';

import './index.scss';

const Footer = () => (
  <footer className="footer">
    <p className="footer__copyright">FairPlay © 2020 - Tous droits réservés</p>
    <ul className="footer__links">
      <a href="/equipe"><li>Équipe</li></a>
      <a href="#"><li>Contact</li></a>
      <a href="#"><li>CGU</li></a>
    </ul>
  </footer>
);

export default Footer;
