// == Import npm
import React from "react";
import {useState} from "react";
import PropTypes from 'prop-types';

/*
import PlacesAutocomplete from "react-places-autocomplete";
import { getLatLng } from "react-places-autocomplete";
*/
// == Import
import "./style.scss";

import pin from "src/assets/pin.svg";

// == Composant
const SearchBar = () => {

  const [inputvalue, setInputValue] = useState('');
  const [autocompleteValue, setAutocompleteValue] = useState([]);
  const [firstValue, setFirstValue] = useState({});

  const handleOnChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log("handleOnChange", value);
    setInputValue(value);

    if(value.length > 3) {
      fetchAutocompletion(value);
    } else {
      setAutocompleteValue([]);
    }
  }

  const fetchAutocompletion = () => {
    const dataResult = [];
    fetch(`http://api.positionstack.com/v1/forward?access_key=82a0b22e81932aad65c97e8bcc2f192a&query=${inputvalue}&country=FR&type=locality`, {
      //mode: 'no-cors',
      method:'GET',
      headers: {
      'Accept': '*/*',
      //  "Access-Control-Allow-Origin" : "*", 
      //  "Access-Control-Allow-Credentials" : true
      },
    })
    .then(function(response) {
      response.json().then((res) => {
        //console.log(res.data);
        console.log('----->')
        res.data.forEach(element => {
          console.log(element);
          if(element.type !== "venue") {
            dataResult.push({
              name: element.name,
              loc: element.locality,
              reg: element.region,
              lat: element.latitude,
              lon: element.longitude,
            });
          }
        });
        setFirstValue(dataResult[0]);
        setAutocompleteValue(dataResult);
        console.log(dataResult.length);
      });
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('VALUE', firstValue);

    fetchDataActivity(firstValue.lat, firstValue.lon);
    console.log("handleOnSubmit");
  }

  const fetchDataActivity = (lat, lng) => {
    fetch(`http://localhost:4000/place?lat=${lat}&lng=${lng}&page=1`, {
      //mode: 'no-cors',
      method:'GET',
      headers: {
      'Accept': '*/*',
      //  "Access-Control-Allow-Origin" : "*", 
      //  "Access-Control-Allow-Credentials" : true
      },
    })
    .then(function(response) {
      response.json().then((res) => {
        console.log(res);
      });
    });
  }

  return (
    <section className="searchbar">

      {/* <div className="searchbar__container"> */}
      <form onSubmit={handleOnSubmit}  className="searchbar__container">
      <input
            className="searchbar__input"
            type="text"
            placeholder="Cherchez une activité autour de vous"
            value={inputvalue}
            onChange={handleOnChange}
          />

          {autocompleteValue.length > 0 &&
            <div className="autocomplete">
              {autocompleteValue.map((el) => {
                return <div key={el.lat}>{el.name}, <span>{el.reg}</span></div>
              })}
            </div>
          }

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
};

SearchBar.defaultProps = {
  inputValue: '',
};

// == Export
export default SearchBar;
