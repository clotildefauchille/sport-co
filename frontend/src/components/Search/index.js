import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Cards from 'src/containers/Cards';

import { useLocation } from "react-router-dom";

import SearchBar from 'src/containers/SearchBar';

//import './style.scss';

// https://reactrouter.com/web/example/query-parameters
// A custom hook that builds on useLocation to parse
// the query string for you.
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const Search = ({ fetchData }) => {
  const query = useQuery();
  
  const queryString = query.get("query");
  const lat = query.get("lat");
  const lng = query.get("lng");

  useEffect(() => { 
    fetchData({queryString, lat, lng});
  }, [lat, lng, queryString]);

  return (
    <main className="home search">
        <SearchBar />
        <h2 className="heading-2">Dernières activités proche de : <span className="heading-2__txt-color">{query.get("query")}</span></h2>
        <Cards />
    </main>
  );
};

export default Search;
