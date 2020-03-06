import React, { useState } from 'react';
import swal from 'sweetalert';
import credentials from '../credentials';

const RefineSearch = ({ search, setSearch, setURL }) => {

    const { app_id, app_key } = credentials;
    const [diet, setDiet] = useState(null);
    const [calories, setCalories] = useState(null);
    const [health, setHealth] = useState({ healthVegetarian: false, healtPeanutFree: false, healtAlcoholFree: false, healtTreeNutFree: false });

    const clearFilters = () => {
        setDiet(null);
        setCalories(null);
        setHealth({ healthVegetarian: false, healtPeanutFree: false, healtAlcoholFree: false, healtTreeNutFree: false });
    }

    const handleClick = () => {
        if (search) {
            const dietSearch = diet ? `&diet=${diet}` : '';
            const caloriesSearch = calories ? `&calories=${calories}` : '';
            const vegarianSearch = health.healthVegetarian ? `&health=vegetarian` : '';
            const peanutFreeSearch = health.healtPeanutFree ? `&health=peanut-free` : '';
            const alcoholFreeSearch = health.healtAlcoholFree ? `&health=alcohol-free` : '';
            const treeNutFreeSearch = health.healtTreeNutFree ? `&health=tree-nut-free` : '';
            const healtSearch = `${vegarianSearch}${peanutFreeSearch}${alcoholFreeSearch}${treeNutFreeSearch}`;
            const advancedSearch = `q=${search}&app_id=${app_id}&app_key=${app_key}${dietSearch}${caloriesSearch}${healtSearch}`;
            const advancedURL = `https://api.edamam.com/search?${advancedSearch}`;
            setURL(advancedURL);
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
        <div className="row">
            <div className="mx-auto">
                <div className="card border-danger mb-3">
                    <div className="card-header bg-danger text-white">Diet</div>
                    <div className="card-body">
                        <div className="form-group">
                            <div className="custom-control custom-radio my-1">
                                <input className="custom-control-input" id="dietLowFat" type="radio" name="diet" value="low-fat" checked={diet === "low-fat"} onChange={event => setDiet(event.target.value)} />
                                <label className="custom-control-label" htmlFor="dietLowFat">Low Fat</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input className="custom-control-input" id="dietBalanced" type="radio" name="diet" value="balanced" checked={diet === "balanced"} onChange={event => setDiet(event.target.value)} />
                                <label className="custom-control-label" htmlFor="dietBalanced">Balanced</label>
                            </div>
                            <div className="custom-control custom-radio my-1">
                                <input className="custom-control-input" id="dietLowCarb" type="radio" name="diet" value="low-carb" checked={diet === "low-carb"} onChange={event => setDiet(event.target.value)} />
                                <label className="custom-control-label" htmlFor="dietLowCarb">Low Carb</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input className="custom-control-input" id="dietHighProtein" type="radio" name="diet" value="high-protein" checked={diet === "high-protein"} onChange={event => setDiet(event.target.value)} />
                                <label className="custom-control-label" htmlFor="dietHighProtein">High Protein</label>
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
                                <input className="custom-control-input" id="caloriesL200" type="radio" name="calories" value="0-200" checked={calories === "0-200"} onChange={event => setCalories(event.target.value)} />
                                <label className="custom-control-label" htmlFor="caloriesL200">Under 200 cal/serv</label>
                            </div>
                            <div className="custom-control custom-radio my-1">
                                <input className="custom-control-input" id="caloriesG200L400" type="radio" name="calories" value="200-400" checked={calories === "200-400"} onChange={event => setCalories(event.target.value)} />
                                <label className="custom-control-label" htmlFor="caloriesG200L400">200 - 400 cal/serv</label>
                            </div>
                            <div className="custom-control custom-radio my-1">
                                <input className="custom-control-input" id="caloriesG400L600" type="radio" name="calories" value="400-600" checked={calories === "400-600"} onChange={event => setCalories(event.target.value)} />
                                <label className="custom-control-label" htmlFor="caloriesG400L600">400 - 600 cal/serv</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input className="custom-control-input" id="caloriesG600" type="radio" name="calories" value="600-10000" checked={calories === "600-10000"} onChange={event => setCalories(event.target.value)} />
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
                                <input className="custom-control-input" id="healthVegetarian" type="checkbox" name="health" value="vegetarian" checked={health.healthVegetarian === true} onChange={event => setHealth({ ...health, [event.target.id]: !health.healthVegetarian })} />
                                <label className="custom-control-label" htmlFor="healthVegetarian">Vegetarian</label>
                            </div>
                            <div className="custom-control custom-checkbox my-1">
                                <input className="custom-control-input" id="healtPeanutFree" type="checkbox" name="health" value="peanut-free" checked={health.healtPeanutFree === true} onChange={event => setHealth({ ...health, [event.target.id]: !health.healtPeanutFree })} />
                                <label className="custom-control-label" htmlFor="healtPeanutFree">Peanut Free</label>
                            </div>
                            <div className="custom-control custom-checkbox my-1">
                                <input className="custom-control-input" id="healtAlcoholFree" type="checkbox" name="health" value="alcohol-free" checked={health.healtAlcoholFree === true} onChange={event => setHealth({ ...health, [event.target.id]: !health.healtAlcoholFree })} />
                                <label className="custom-control-label" htmlFor="healtAlcoholFree">Alcohol Free</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" id="healtTreeNutFree" type="checkbox" name="health" value="tree-nut-free" checked={health.healtTreeNutFree === true} onChange={event => setHealth({ ...health, [event.target.id]: !health.healtTreeNutFree })} />
                                <label className="custom-control-label" htmlFor="healtTreeNutFree">Tree Nut Free</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 mt-2">
                <button className="btn btn-outline-secondary float-left" type="button" onClick={clearFilters}>Clear Filters</button>
                <button className="btn btn-outline-success float-right" type="button" onClick={handleClick}>Continue Search</button>
            </div>
        </div>
    );

}

export default RefineSearch;