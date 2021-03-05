/* eslint-disable arrow-body-style */
// == Import npm
import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

//import { generatePath } from 'react-router';

// == Import
import './style.scss';

import pin from 'src/assets/pin.svg';

// == Composant
const SearchBar = ({
  inputValue,
  listAutocompleteData,
  changeValue,fetchAutocompleteData,
  fetchActivityByLocalisation,
}) => {

  const handleOnChange = (e) => {
    const value = e.target.value;
    changeValue(value);

    // A VOIR : limiter les appels trop successifs

    // pas de réponse api autocomplete (https://positionstack.com/documentation) si <= 3
    if (value.length > 3) {
      fetchAutocompleteData();
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // A VOIR afficher url résultat de recherche dans history
    /*
    this.props.history.push('/search');
    ou
    generatePath('/search/:id)', {
      id: 1,
    });
    */

    fetchActivityByLocalisation(); 
  };

  const fetchDataActivity = (lat, lng) => {
    fetch(`http://localhost:4000/place?lat=${lat}&lng=${lng}&page=1`, {
      //mode: 'no-cors',
      method: 'GET',
      headers: {
        Accept: '*/*',
        //  "Access-Control-Allow-Origin" : "*",
        //  "Access-Control-Allow-Credentials" : true
      },
    }).then((response) => {
      response.json().then((res) => {
        // console.log(res);
      });
    });
  };

  return (
    <section className="searchbar">
      {/* <div className="searchbar__container"> */}
      <form onSubmit={handleOnSubmit} className="searchbar__container">
        <input
          className="searchbar__input"
          type="text"
          placeholder="Cherchez une activité autour de vous"
          value={inputValue}
          onChange={handleOnChange}
        />

        {listAutocompleteData.length > 0 && (
          <ul className="autocomplete">
            {listAutocompleteData.map((el) => {
              return (
                <li key={el.lat}>
                  {el.name}, <span>{el.reg}</span>
                </li>
              );
            })}
          </ul>
        )}

        <img className="searchbar__icon" src={pin} alt="map pin" />

        <button className="searchbar__button" type="button">
          Rechercher
        </button>

      </form>
      {/* </div> */}

      <p className="searchbar__spacer">OU</p>
      <a className="searchbar__link" href="">
        Créer une activité
      </a>
    </section>
  );
};

SearchBar.propTypes = {
  inputValue: PropTypes.string,
  listAutocompleteData: PropTypes.array.isRequired,
  changeValue: PropTypes.func.isRequired,
  fetchAutocompleteData: PropTypes.func.isRequired,
  fetchActivityByLocalisation: PropTypes.func.isRequired,
};


SearchBar.defaultProps = {
  inputValue: '',
};

// == Export
export default SearchBar;
