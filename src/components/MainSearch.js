import React, { useState, useEffect } from 'react';
import AdvancedSearch from './AdvancedSearch';
import Recipes from './Recipes';
import Spinner from './Spinner';
import credentials from '../credentials';
import swal from 'sweetalert';
import axios from 'axios';

const MainSearch = () => {

    const { app_id, app_key } = credentials;
    const [search, setSearch] = useState(null);
    const [URL, setURL] = useState(null);
    const [hits, setHits] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (() => {
            if (URL) {
                setHits([]);
                setLoading(true);
                axios.get(URL)
                    .then(response => {
                        if (response.data.hits.length > 0) {
                            setHits(response.data.hits);
                            setLoading(false);
                        } else {
                            setHits([]);
                            setLoading(false);
                            swal({
                                title: "Oops!, we are sorry",
                                text: "We can't find what you're looking for",
                                icon: "warning",
                                button: "I get it!",
                                closeOnClickOutside: false
                            });
                        }
                    })
                    .catch(() => {
                        setLoading(false);
                        swal({
                            title: "Oops!, something went wrong",
                            text: "It is not possible to connect to the server",
                            icon: "error",
                            button: "I get it!",
                            dangerMode: true,
                            closeOnClickOutside: false
                        });
                    })
            }
        })();
    }, [URL]);

    const handleClick = () => {
        if (search) {
            const simpleURL = `https://api.edamam.com/search?q=${search}&app_id=${app_id}&app_key=${app_key}`;
            setURL(simpleURL);
        } else {
            swal({
                title: "Oops!, something went wrong",
                text: "You must enter your search",
                icon: "error",
                button: "I get it!",
                dangerMode: true,
                closeOnClickOutside: false
            });
            setURL(null);
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
                            onChange={event => setSearch(event.target.value.trim())}
                        />
                        <button className="btn btn-secondary my-2 my-sm-0" type="button" onClick={handleClick}>Search</button>
                    </form>
                </div>
            </nav>
            <AdvancedSearch search={search} setSearch={setSearch} setURL={setURL} />
            {hits.length > 0 && <Recipes hits={hits} />}
            {loading && <Spinner />}
        </>
    );

}

export default MainSearch;