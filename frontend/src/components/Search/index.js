import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

import Card from 'src/containers/Card';
import SearchBar from 'src/containers/SearchBar';
import Filter from 'src/containers/Filter';
import MapList from 'src/containers/MapList';

import './style.scss';

// https://reactrouter.com/web/example/query-parameters
// A custom hook that builds on useLocation to parse
// the query string for you.
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const Search = ({
  activities,
  fetchActivitiesByLocalisation,
  fetchActivitiesByLocalisationAndSports,
  userActivitiesIds,
  userActivitiesCreatorIds,
}) => {

  const query = useQuery();
  const queryString = query.get("query");
  const lat = query.get("lat");
  const lng = query.get("lng");
  const sports = query.get("sports");

  useEffect(() => {
    if(sports) {
      fetchActivitiesByLocalisationAndSports({queryString, lat, lng, sports});
    } else {
      fetchActivitiesByLocalisation({queryString, lat, lng});
    }
  }, [lat, lng, queryString, sports]);

  const cardsCreated = [];
  activities.forEach(card => {
    if(userActivitiesCreatorIds.includes(card.id)) {
      cardsCreated.push(<Card key={`card-${card.id}`} card={card} userCard={2} />)
    } else if(userActivitiesIds.includes(card.id)) {
      cardsCreated.push(<Card key={`card-${card.id}`} card={card} userCard={1} />)
    } else {
      cardsCreated.push(<Card key={`card-${card.id}`} card={card} userCard={0} />)
    }
  });

  return (
    <main className="home search">
        <SearchBar />
        <h2 className="heading-2">Dernières activités proche de : <span className="heading-2__txt-color">{query.get("query")}</span></h2>
        <Filter />

        <MapList lat={lat} lng={lng} />

        <section className="container cards">
          {cardsCreated.length > 0 ? (
            <>
            {cardsCreated}
            </>
          ) : (
            <div className="search__no-result">Désolé aucune activité trouvée :(</div>
          )}
        </section>
    </main>
  );
};

Search.propTypes = {
  activities: PropTypes.array.isRequired,
  fetchActivitiesByLocalisation: PropTypes.func.isRequired,
  fetchActivitiesByLocalisationAndSports: PropTypes.func.isRequired,
  userActivitiesIds: PropTypes.array.isRequired,
};

export default Search;
