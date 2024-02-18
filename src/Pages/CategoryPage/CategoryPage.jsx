import { useEffect } from 'react';
import "./CategoryPage.css";
import { useMealContext } from '../../context/mealContext';
import { useParams } from 'react-router-dom';
import { startFetchMealByCategory } from '../../actions/MealsAction';
import MealList from '../../Components/Meal/MealList';



const CategoryPage = () => {
  const { name } = useParams();
  const { categoryMeals, dispatch, categories } = useMealContext();
  let catDescription = "";

  if (categories) {
    categories.forEach(category => {
      if (category?.strCategory === name) catDescription = category?.strCategoryDescription;
    })
  }

  useEffect(() => {
    startFetchMealByCategory(dispatch, name);
  }, [name, dispatch]);

  return (
    <main className='main-content py-5'>
      <div className='container'>
        <div className='cat-description px-4 py-4'>
          <h2 className='text-orange font-extrabold'>{name}</h2>
          <p className='text-2xl opacity-70'>{catDescription}</p>
        </div>
      </div>
      {
        (categoryMeals?.length) ? <MealList meals={categoryMeals} /> : null
      }

    </main>
  )
}


export default CategoryPage