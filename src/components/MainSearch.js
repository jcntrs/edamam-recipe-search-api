import React, { useState } from 'react';
import AdvancedSearch from './AdvancedSearch';
import credentials from '../credentials';
import axios from 'axios';

const MainSearch = () => {

    const { app_id, app_key } = credentials;
    const [searcher, setSearcher] = useState(null);
    const [hits, setHits] = useState([]);
    console.log(hits, searcher)

    const handleChange = value => {
        value.trim().length > 0  && setSearcher(value.trim())
    }

    const handleClick = () => {
        if (searcher) {
            const URL = `https://api.edamam.com/search?q=chicken&app_id=${app_id}&app_key=${app_key}`;
            axios.get(URL)
                .then(response => {
                    setHits(response.data.hits);
                })
                .catch(error => {
                    console.log(error)
                })
        } else {
            console.log(false)
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="!#">Recipe Search</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarColor02"
                    aria-controls="navbarColor02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse mr-5" id="navbarColor02">
                    <form className="form-inline my-2 my-lg-0 mx-auto">
                        <input
                            className="form-control mr-sm-2"
                            placeholder="Enter your search"
                            type="text"
                            onChange={event => handleChange(event.target.value)}
                        />
                        <button className="btn btn-secondary my-2 my-sm-0" type="button" onClick={handleClick}>Search</button>
                    </form>
                </div>
            </nav>
            <AdvancedSearch searcher={searcher} />
        </>
    );

}

export default MainSearch;