import React from 'react';
import "./Meal.css";
import { Link } from 'react-router-dom';

const MealList = ({ meals }) => {
  console.log(meals);
  return (
    <div className='section-wrapper'>
      <div className='container'>
        <div className='sc-title'>meals</div>
        <section className='sc-meal grid'>
          {
            meals?.map(mealItem => {
              const { idMeal: id, strArea: area, strCategory: category, strMeal: meal, strMealThumb: thumbnail } = mealItem;

              return (
                <Link to={`/meal/${id}`} className="meal-itm items-center justify-center" key={id}>
                  <div className='meal-itm-img'>
                    <img src={thumbnail} alt={meal} />
                    <div className='meal-itm-cat bg-orangish text-orangish font-semibold'>{category}</div>
                  </div>

                  <div className='meal-itm-body'>
                    <div className='meal-itm-body-info flex flex-col '>
                      <div className='area text-base ls-1 font-medium'>{area}</div>
                      <div className='meal text-base font-bold opacity-90'>{meal}</div>
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </section>
      </div>
    </div>
  )
}

export default MealList