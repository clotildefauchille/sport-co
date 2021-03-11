import React from 'react';
import './style.scss';
import Field from './Field';
import PropTypes from 'prop-types';

const CreationPage = ({
  activityTitle,
  date,
  time,
  minParticipant,
  description,
  adresse,
  codePostal,
  ville,
  duration,
  onChangeForm,
  onChangeFormSelect,
  onSubmit,
}) => {

  const handleSelectInput = (e) => {
    // console.log('handleselect', e.target.value);
    onChangeFormSelect(e.target.value);
  };

const handleOnSubmit = (e) => {
  e.preventDefault();
onSubmit()
};
  return (
    <section className="create-form">
      <form className="create-form__container" onSubmit={handleOnSubmit}>
        <h1 className="create-form__title">Créez ici votre activité :</h1>

        <Field
          className="create-form__input create-form__input--large"
          type="text"
          placeholder="nom de l'activité"
          name="activityTitle"
          value={activityTitle}
          onChange={onChangeForm}
        />

        <div className="create-form__container-inner">
          <Field
            className="create-form__input"
            type="date"
            // id="date"
            value={date}
            min="2021-01-01"
            max="2025-12-31"
            name="date"
            onChange={onChangeForm}
          />
          <Field
            className="create-form__input"
            type="time"
            // id="time"
            min="06:00"
            max="24:00"
            // required
            name="time"
            value={time}
            onChange={onChangeForm}
          />
          <Field
            className="create-form__input"
            type="time"
            // id="time"
            min="00:00"
            max="10:00"
            // required
            name="duration"
            value={duration}
            onChange={onChangeForm}
          />
        </div>
        {/* <h2 className="create-form__subtitle">Information</h2> */}
        <div className="create-form__container-inner">
          <label className="create-form__label">sport:</label>
          <select
            className="create-form__input create-form__input--large create-form__input--select "
            name="sport"
            id="sport-select"
            onChange={handleSelectInput}
          >
            <option value="">choississez un sport</option>
            <option value="escalade">escalade</option>
            <option value="foot">foot</option>
            <option value="footing">footing</option>
            <option value="vélo">vélo</option>
            <option value="randonnee">randonnee</option>
            <option value="yoga">yoga</option>
            <option value="basketball">basketball</option>
            <option value="tennis">tennis</option>
            <option value="fitness">fitness</option>
          </select>
          <Field
            className="create-form__input"
            type="number"
            // id="tentacles"
            name="minParticipant"
            min="1"
            max="40"
            value={minParticipant}
            onChange={onChangeForm}
          />
        </div>

        {/* <textarea id="story" name="story" rows="5" >
          It was a dark and stormy night...
        </textarea> */}

        <Field
          className="create-form__input create-form__input--hight"
          type="textarea"
          placeholder="Description de l'activité proposée"
          name="description"
          rows="5"
          value={description}
          onChange={onChangeForm}
        />
        {/* <h2 className="create-form__subtitle">Point de départ</h2> */}
        <Field
          className="create-form__input create-form__input--large"
          type="text"
          placeholder="Entrez une adresse"
          name="adresse"
          value={adresse}
          onChange={onChangeForm}
        />
        <div className="create-form__container-inner">
          <Field
            className="create-form__input"
            type="text"
            placeholder="code postal"
            name="codePostal"
            value={codePostal}
            onChange={onChangeForm}
          />
          <Field
            className="create-form__input"
            type="text"
            placeholder="ville"
            name="ville"
            value={ville}
            onChange={onChangeForm}
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
  activityTitle: PropTypes.string,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  minParticipant: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  adresse: PropTypes.string.isRequired,
  codePostal: PropTypes.string.isRequired,
  ville: PropTypes.string.isRequired,
  onChangeForm: PropTypes.func.isRequired,
};

export default CreationPage;
