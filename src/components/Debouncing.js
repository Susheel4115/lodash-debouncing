import React, { useState, useCallback } from "react";
import cities from "cities-list";
import debounce from "lodash.debounce";
function Debouncing() {
  const citiesArray = Object.keys(cities);
  const [filteredCities, setFilteredCities] = useState([]);

  const debouncedFilter = useCallback(
    debounce(
      (query) =>
        setFilteredCities(
          citiesArray.filter((city) =>
            city.toLowerCase().includes(query?.toLowerCase())
          )
        ),
      500
    ),
    []
  );
  const doFilter = (query) => {
    if (!query) return setFilteredCities([]);
    debouncedFilter(query);
  };

  return (
    <div>
      <div className="container">
        <h1>Filtering cities list</h1>
        <form className="form">
          <input
            type="text"
            onChange={(event) => doFilter(event.target.value)}
          />
        </form>

        <div className="filteredcities">
          {filteredCities.map((item, index) => (
            <p className="item" key={index}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Debouncing;
