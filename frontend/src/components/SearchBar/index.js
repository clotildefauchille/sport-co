/* eslint-disable arrow-body-style */
// == Import npm
import React, { useRef } from 'react';
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
  changeValue,
  fetchAutocompleteData,
  fetchOnePlacesAutoCompletion,
  fetchActivityByLocalisation,
  clearListAutocompleteData,
}) => {
  
  const timer = useRef(null)

  const handleOnChange = (e) => {
    const value = e.target.value;
    changeValue(value);

    /*
    // timer pour déclencher le fetch après 1s sans onchange dans l'input
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      // pas de réponse api (https://positionstack.com/documentation) si <= 2
      if (value.length > 2) {
        fetchAutocompleteData();
      } else {
        clearListAutocompleteData();
      }
    }, 1000);
    */
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

    if (inputValue.length > 2) {
      fetchOnePlacesAutoCompletion();
    }
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
              //if(el.name) {
                return (
                  <li key={`${el.lat}${el.lng}${el.id}`}>
                    {el.name}, <span>{el.reg}</span>
                  </li>
                );
              //}
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
  clearListAutocompleteData: PropTypes.func.isRequired,
  fetchOnePlacesAutoCompletion: PropTypes.func.isRequired,
};


SearchBar.defaultProps = {
  inputValue: '',
};

// == Export
export default SearchBar;
