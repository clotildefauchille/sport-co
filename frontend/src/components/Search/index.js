import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

import Card from 'src/containers/Card';
import SearchBar from 'src/containers/SearchBar';

import './style.scss';

// https://reactrouter.com/web/example/query-parameters
// A custom hook that builds on useLocation to parse
// the query string for you.
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const Search = ({ activities, fetchActivitiesByLocalisation }) => {
  const query = useQuery();
  
  const queryString = query.get("query");
  const lat = query.get("lat");
  const lng = query.get("lng");

  useEffect(() => { 
    fetchActivitiesByLocalisation({queryString, lat, lng});
  }, [lat, lng, queryString]);

  return (
    <main className="home search">
        <SearchBar />
        <h2 className="heading-2">Dernières activités proche de : <span className="heading-2__txt-color">{query.get("query")}</span></h2>
        <section className="container cards">
          {activities.length > 0 ? (activities.map((activity) => (
            <Card key={activity.id} card={activity} />
          ))) : (
            <div className="search__no-result">Désolé aucune activité trouvée :(</div>
          )}
        </section>
    </main>
  );
};

Search.propTypes = {
  activities: PropTypes.array.isRequired,
  fetchActivitiesByLocalisation: PropTypes.func.isRequired,
};

export default Search;
