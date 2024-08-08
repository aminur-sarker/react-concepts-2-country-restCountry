import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])


    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country) => {
        console.log("Worked")
        console.log(country)
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }


    const [visitedFlags, setVisitedFlags] = useState([])
    const handleVisitedFlags = (flag) => {
        console.log('Work')
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }

    return (
        <div>
            <h3 className="countryLength">Countries: {countries.length}</h3>

            {/* Visited Countries Details */}
            <div className="flag-container">
                <h3>Visited countries:{visitedCountries.length} </h3>
                <ul>
                    {
                        visitedCountries.map(country => <li>{country?.name?.common}</li>)
                    }
                </ul>
            </div>

            {/* visited flags */}

            <div>
                <p>visited flags:</p>
                {
                    visitedFlags.map(flag=> <img key={idx} src={flag}></img>)
                }
            </div>


            {
                countries.map(country => <Country key={country.cca2}
                    handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlags={handleVisitedFlags}
                    country={country}> </Country>)
            }
        </div>
    );
};

export default Countries;