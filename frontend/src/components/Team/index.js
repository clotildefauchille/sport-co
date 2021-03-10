import React from 'react';
import memberImg from 'src/assets/icons/account_circle.svg';

import './style.scss';

const Team = () => {
  return (
    <main className="mainMember">
      <article className="member">
        <img className="member__img" src={memberImg} />
        <h1 className="member__name">Boris C.</h1>
        <p className="member__role">Lead Back</p>
        <a href="#"><button type="button" className="member__github">GitHub</button></a>
      </article>

      <article className="member">
        <img className="member__img" src={memberImg}/>
        <h1 className="member__name">Clotilde F.</h1>
        <p className="member__role">Product Owner</p>
        <a href="#"><button type="button" className="member__github">GitHub</button></a>
      </article>

      <article className="member">
        <img className="member__img" src={memberImg}/>
        <h1 className="member__name">Jeremy M.</h1>
        <p className="member__role">Scrum Master</p>
        <a href="#"><button type="button" className="member__github">GitHub</button></a>
      </article>

      <article className="member">
        <img className="member__img" src={memberImg}/>
        <h1 className="member__name">Benjamin R.</h1>
        <p className="member__role">Lead Front</p>
        <a href="#"><button type="button" className="member__github">GitHub</button></a>
      </article>
    </main>
  )
}

export default Team;