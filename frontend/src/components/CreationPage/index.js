import React, { useEffect } from 'react';
import './style.scss';
// import Field from './Field';
import PropTypes from 'prop-types';

const CreationPage = ({
  title,
  date,
  time,
  min_participant,
  description,
  adress,
  zip_code,
  city,
  duration,
  onChangeForm,
  onChangeFormSelect,
  onSubmit,
  fetchSports,
  errorMessage,
  sports,
}) => {
  useEffect(() => {
    fetchSports();
  }, []);
console.log('errorMessage', errorMessage);
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const todayFormat = `${year}-${month}-${day}`;
  // console.log(todayFormat);

  const handleSelectInput = (e) => {
    // console.log('handleselect', e.target.value);
    onChangeFormSelect(e.target.value);
  };
  const handleChange = (evt) => {
    onChangeForm(evt.target.value, evt.target.name);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <section className="create-form">
      <form className="create-form__container" onSubmit={handleOnSubmit}>
        <h1 className="create-form__title">Créez ici votre activité :</h1>

        <label htmlFor="title" className="create-form__label">
          titre :
        </label>
        <input
          className="create-form__input create-form__input--large"
          type="text"
          placeholder="nom de l'activité"
          name="title"
          value={title}
          onChange={handleChange}
        />

        <div className="create-form__container-inner">
          <label htmlFor="date" className="create-form__label">
            date :
          </label>
          <input
            // required
            className="create-form__input"
            type="date"
            // id="date"
            value={date}
            min={todayFormat}
            max="2025-12-31"
            name="date"
            onChange={handleChange}
          />
          <label htmlFor="time" className="create-form__label">
            horaire :
          </label>
          <input
            // required
            className="create-form__input"
            type="time"
            // id="time"
            min="06:00"
            max="24:00"
            // required
            name="time"
            value={time}
            onChange={handleChange}
          />
          <label htmlFor="duration" className="create-form__label">
            durée :
          </label>
          <input
          // required
            className="create-form__input"
            type="time"
            // id="time"
            min="00:00"
            max="10:00"
            // required
            name="duration"
            value={duration}
            onChange={handleChange}
          />
        </div>
        {/* <h2 className="create-form__subtitle">Information</h2> */}
        <div className="create-form__container-inner">
          <label className="create-form__label">sport :</label>
          <select
            // required
            className="create-form__input create-form__input--large create-form__input--select "
            name="sport"
            id="sport-select"
            onChange={handleSelectInput}
          >
            <option value="">choississez un sport</option>
            {sports.map((sport) => {
              return (
                <option key={sport.id} value={sport.id}>
                  {sport.name}
                </option>
              );
            })}
          </select>
          <label htmlFor="minimum participant" className="create-form__label">
            participants minimum :
          </label>
          <input
            className="create-form__input"
            type="number"
            // id="tentacles"
            name="min_participant"
            min="0"
            max="40"
            value={min_participant}
            onChange={handleChange}
          />
        </div>

        {/* <textarea id="story" name="story" rows="5" >
          It was a dark and stormy night...
        </textarea> */}
        <label htmlFor="description" className="create-form__label">
          description :
        </label>
        <textarea
          className="create-form__input create-form__input--hight"
          type="textarea"
          placeholder="Description de l'activité proposée"
          name="description"
          rows="5"
          value={description}
          onChange={handleChange}
        />
        {/* <h2 className="create-form__subtitle">Point de départ</h2> */}
        <label htmlFor="adress" className="create-form__label">
          adresse :
        </label>
        <input
          className="create-form__input create-form__input--large"
          type="text"
          placeholder="Entrez une adresse"
          name="adress"
          value={adress}
          onChange={handleChange}
        />
        <div className="create-form__container-inner">
          <label htmlFor="code postal" className="create-form__label">
            code-postal :
          </label>
          <input
            className="create-form__input"
            type="text"
            placeholder="code postal"
            name="zip_code"
            value={zip_code}
            onChange={handleChange}
          />
          <label htmlFor="date" className="create-form__label">
            ville :
          </label>
          <input
            required
            className="create-form__input"
            type="text"
            placeholder="ville"
            name="city"
            value={city}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="create-form__input create-form__input--submit"
        >
          Proposer
        </button>
      </form>
    </section>
  );
};

CreationPage.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  min_participant: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  zip_code: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  onChangeForm: PropTypes.func.isRequired,
  fetchSports: PropTypes.func.isRequired,
};

export default CreationPage;
