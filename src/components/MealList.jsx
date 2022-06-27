import React from 'react'
import MealItem from './MealItem'

const MealList = ({ meals }) => {
  console.log(meals);
  return (
    <div className='catalog__list'>
      {
        meals.map(el => <MealItem key={el.idMeal} {...el}/>)
      }
    </div>
  )
}
export default MealList