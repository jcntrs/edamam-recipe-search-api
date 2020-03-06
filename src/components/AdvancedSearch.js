import React from 'react';
import RefineSearch from './RefineSearch';

const AdvancedSearch = ({ search, setSearch, setURL }) => (
    <div className="container text-center">
        <button
            className="btn btn-primary mx-auto mt-4"
            type="button"
            data-toggle="collapse"
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample">
            Advanced Search
        </button>
        <div className="collapse" id="collapseExample">
            <div className="card card-body">
                <RefineSearch search={search} setSearch={setSearch} setURL={setURL} />
            </div>
        </div>
    </div>
);

export default AdvancedSearch;