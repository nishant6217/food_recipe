import React from "react";

function RecipeItem(props) {
  const { name, image, ingredientLines } = props;
  return (
    
      <div className="card py-2">
        <img src={image} className="img-fluid w-50 mx-auto rounded-circle" />
        <div className="card-body">
          <h5>{name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          {ingredientLines.map((ing) => (
            <li className="list-group-item">{ing}</li>
          ))}
        </ul>
      </div>
    
  );
}

export default RecipeItem;
