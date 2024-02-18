import CategoryList from "../../Components/Category/Category";
import Loader from "../../Components/Loader/Loader";
import MealList from "../../Components/Meal/MealList";
import NotFound from "../../Components/NotFound/NotFound";
import { useMealContext } from "../../context/mealContext"

const HomePage = () => {
  const { categories, meals, categoryLoading, mealsLoading } = useMealContext();
  console.log(categories, meals, categoryLoading, mealsLoading)
  return (<>
    <main className='main-content'>
      {(mealsLoading) ? <Loader /> : (meals === null) ? <NotFound /> : (meals?.length) ? <MealList meals={meals} /> : ""}
      {(categoryLoading) ? <Loader /> : <CategoryList categories={categories} />}
    </main>
  </>)
}
export default HomePage