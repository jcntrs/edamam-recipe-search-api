import React from 'react';

const MoreOptions = () => {
    return (
        <div className="row">
            <div className=" mx-auto">
                <div className="card border-success mb-3">
                    <div className="card-header bg-success">Header</div>
                    <div className="card-body">
                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Check this custom checkbox</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                <label className="custom-control-label" htmlFor="customCheck2">Disabled custom checkbox</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mx-auto">
                <div className="card border-success mb-3">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Check this custom checkbox</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                <label className="custom-control-label" htmlFor="customCheck2">Disabled custom checkbox</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mx-auto">
                <div className="card border-success mb-3">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Check this custom checkbox</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                <label className="custom-control-label" htmlFor="customCheck2">Disabled custom checkbox</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const AdvancedSearch = ({ search }) => {
    console.log(search)
    return (
        <div className="container text-center">
            <button className="btn btn-primary mx-auto mt-4" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Advanced Search
            </button>
            <div className="collapse" id="collapseExample">
                <div className="card card-body">
                    <MoreOptions />
                </div>
            </div>
        </div>
    );
}

export default AdvancedSearch;