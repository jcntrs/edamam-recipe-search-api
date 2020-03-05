import React, { useState } from 'react';

const RefineSearch = () => {

    const [diet, setDiet] = useState(null);
    const [calories, setCalories] = useState(null);
    const [health, setHealth] = useState([]);
    console.log(diet, calories, health);

    const clearFilters = () => {
        setDiet(null);
        setCalories(null);
    }

    return (
        <div className="row">
            <div className="mx-auto">
                <div className="card border-danger mb-3">
                    <div className="card-header bg-danger text-white">Diet</div>
                    <div className="card-body">
                        <div className="form-group">
                            <div className="custom-control custom-radio">
                                <input className="custom-control-input" id="dietBalanced" type="radio" name="diet" value="balanced" checked={diet === "balanced"} onChange={event => setDiet(event.target.value)} />
                                <label className="custom-control-label" htmlFor="dietBalanced">Balanced</label>
                            </div>
                            <div className="custom-control custom-radio my-1">
                                <input className="custom-control-input" id="dietDairyFree" type="radio" name="diet" value="dairy-free" checked={diet === "dairy-free"} onChange={event => setDiet(event.target.value)} />
                                <label className="custom-control-label" htmlFor="dietDairyFree">Dairy-Free</label>
                            </div>
                            <div className="custom-control custom-radio my-1">
                                <input className="custom-control-input" id="dietGlutenFree" type="radio" name="diet" value="gluten-free" checked={diet === "gluten-free"} onChange={event => setDiet(event.target.value)} />
                                <label className="custom-control-label" htmlFor="dietGlutenFree">Gluten-Free</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input className="custom-control-input" id="dietHighProtein" type="radio" name="diet" value="high-protein" checked={diet === "high-protein"} onChange={event => setDiet(event.target.value)} />
                                <label className="custom-control-label" htmlFor="dietHighProtein">High-Protein</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mx-auto">
                <div className="card border-warning mb-3">
                    <div className="card-header bg-warning text-white">Calories</div>
                    <div className="card-body">
                        <div className="form-group">
                            <div className="custom-control custom-radio">
                                <input className="custom-control-input" id="caloriesL200" type="radio" name="calories" value="lte 200" checked={calories === "lte 200"} onChange={event => setCalories(event.target.value)} />
                                <label className="custom-control-label" htmlFor="caloriesL200">Under 200 cal/serv</label>
                            </div>
                            <div className="custom-control custom-radio my-1">
                                <input className="custom-control-input" id="caloriesG200L400" type="radio" name="calories" value="gte 200, lte 400" checked={calories === "gte 200, lte 400"} onChange={event => setCalories(event.target.value)} />
                                <label className="custom-control-label" htmlFor="caloriesG200L400">200 - 400 cal/serv</label>
                            </div>
                            <div className="custom-control custom-radio my-1">
                                <input className="custom-control-input" id="caloriesG400L600" type="radio" name="calories" value="gte 400, lte 600" checked={calories === "gte 400, lte 600"} onChange={event => setCalories(event.target.value)} />
                                <label className="custom-control-label" htmlFor="caloriesG400L600">400 - 600 cal/serv</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input className="custom-control-input" id="caloriesG600" type="radio" name="calories" value="gte 600" checked={calories === "gte 600"} onChange={event => setCalories(event.target.value)} />
                                <label className="custom-control-label" htmlFor="caloriesG600">Over 600 cal/serv</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mx-auto">
                <div className="card border-info mb-3">
                    <div className="card-header bg-info text-white">Health</div>
                    <div className="card-body">
                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" id="healthLowFat" type="checkbox" name="health" value="low-fat" onChange={event => setHealth([...health, event.target.value])} />
                                <label className="custom-control-label" htmlFor="healthLowFat">Low-Fat</label>
                            </div>
                            <div className="custom-control custom-checkbox my-1">
                                <input className="custom-control-input" id="healtLowCarb" type="checkbox" name="health" value="low-carb" />
                                <label className="custom-control-label" htmlFor="healtLowCarb">Low-Carb</label>
                            </div>
                            <div className="custom-control custom-checkbox my-1">
                                <input className="custom-control-input" id="healtHighFiber" type="checkbox" name="health" value="high-fiber" />
                                <label className="custom-control-label" htmlFor="healtHighFiber">High-Fiber</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" id="healtHighProtein" type="checkbox" name="health" value="high-protein" />
                                <label className="custom-control-label" htmlFor="healtHighProtein">High-Protein</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 mt-2">
                <button className="btn btn-outline-secondary float-left" type="button" onClick={clearFilters}>Clear Filters</button>
                <button className="btn btn-outline-success float-right" type="button">Continue Search</button>
            </div>
        </div>
    );

}

export default RefineSearch;