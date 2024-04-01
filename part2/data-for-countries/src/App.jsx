import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    console.log("effect run", name);

    const fetchCountries = () => {
      axios
        .get(`https://restcountries.com/v3.1/name/${value}`)
        .then((response) => {
          setCountries(response.data);
        });
    };

    if (value) {
      fetchCountries();
    } else {
      setCountries([]);
    }
  }, [value]);

  return (
    <div>
      <form>
        find countries: <input value={value} onChange={handleChange} />
      </form>
      <div>
        {countries && countries.length > 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : (
          countries &&
          countries.length > 0 &&
          countries.map((country) => (
            <div key={country.name.common}>
              <h3>{country.name.common}</h3>
              <p>capital {country.capital}</p>
              <p>area {country.area}</p>
              <h4>languages:</h4>
              <p>
                {Object.values(country.languages).map((language) => (
                  <ul key={language}>
                    <li>{language}</li>
                  </ul>
                ))}
              </p>
              <img src={country.flags.png} alt="" />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
