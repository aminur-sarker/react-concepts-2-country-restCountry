import { useState } from "react";
import CountryDetails from "../CountryDetails/CountryDetails";

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
    const { name, flags } = country

    const [visit, setVisit] = useState(false)

    const handleVisitBtn = () => {
        setVisit(!visit)
    }

    return (
        <div style={{
            border: '3px solid blue',
            borderRadius: '15px', margin: '3px',
            background: 'yellow'
        }}>

            <p>Country Name: {name?.common}</p>
            {<img src={flags?.png}></img>}

            <button onClick={() => handleVisitedCountries(country)}>Mark visited</button> <br />

            <button onClick={() => handleVisitedFlags(country?.flags?.png)}>Flag info</button> <br />

            <button onClick={handleVisitBtn}>{!visit ? 'Going' : 'Visited'}</button>
            {
                visit ? 'I visited this place' : 'One day I will visit'
            }

            {/* Optional reactDrilling */}
            <CountryDetails>
                country={country}
                handleVisitedCountries= {handleVisitedCountries}
                handleVisitedFlags= {handleVisitedFlags}
            </CountryDetails>
        
        </div>
    );
};

export default Country;