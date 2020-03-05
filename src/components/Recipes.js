import React from 'react';

const Recipes = ({ hits }) => {
    return (
        <div className="container">
            <div className="row mt-5">
                {hits.map(element =>
                    <div className="col-md-4 mb-3" key={element.recipe.url}>
                        <div className="card border-primary">
                            <h3 className="card-header bg-primary"><span className="text-muted">{element.recipe.label}</span></h3>
                            <img className="card-img-top" src={element.recipe.image} alt={`Imagen de ${element.recipe.label}`} />
                            <div className="card-body">
                                <h4 className="text-warning">Calories: {Math.round(element.recipe.calories)}</h4>
                                <div className="mt-4">
                                    <ul>
                                        {element.recipe.ingredientLines.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
}

export default Recipes;