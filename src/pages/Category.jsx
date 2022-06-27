import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getFilteredByCategory } from '../api';
import Preloader from '../components/Preloader';
import MealList from '../components/MealList';

const Category = () => {

  const [meals, setMeals] = useState([])

  const { name } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getFilteredByCategory(name).then(data => setMeals(data.meals))
  }, [name]);
  return (
    <>
      {
        !meals.length ? <Preloader/> : (
          <MealList meals={meals}/>
        )
      }
      <button className='btn category__btn' onClick={() => navigate(-1)}>На главную</button>
    </>
  )
}
export default Category