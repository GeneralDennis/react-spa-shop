import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getMealById } from '../api';
import Preloader from '../components/Preloader';

const Recipe = () => {
  const [recipe, setRecipe] = useState([]);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(()=>{
    getMealById(id).then(data => setRecipe(data.meals[0]))
  },[id])
  return (
    <>
      {
        !recipe.idMeal ? <Preloader/>: (

      <div className="card">
          <div className="card-image">
            <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
          </div>
          <div className="card-content">
            <div className='card-content__items'>
              {recipe.strArea ? <p>Area: {recipe.strArea}</p> : null}
              {recipe.strCategory ? <p>Category: {recipe.strCategory}</p> : null}
              {recipe.strTags ? <p>Tags: {recipe.strTags}</p> : null}
            </div>
            <span className="card-title">{recipe.strMeal}</span>
            <p>{recipe.strInstructions}</p>
            <table className='card-ingredients'>
              <thead>
                <tr>
                  <th></th>
                  <th>Ingredient</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(recipe).map(key => {
                  if(key.includes('strIngredient') &&recipe[key]) {
                    return (
                      <tr key={key}>
                        <td>{key.replace('strIngredient', '')}.</td>
                        <td>{recipe[key]}</td>
                        <td>{
                          recipe[`strMeasure${key.replace('strIngredient', '')}`]
                        }</td>
                      </tr>
                    )
                  } else {
                    return null
                  }
                })}
              </tbody>
            </table>
            <div className='card__instructions'>
              <h3>Instructions</h3>
              {recipe.strInstructions}
            </div>
            {recipe.strYoutube ? (
              <div>
                <h5>Video recipe</h5>
                <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} title={recipe.strMeal}></iframe>
              </div>)
              : null}
          </div>
          <div className="card-action">
            <button className='btn' onClick={() => navigate(-1)}>Вернуться</button>
          </div>
        </div>
        )
      }
    </>
  )
}
export default Recipe