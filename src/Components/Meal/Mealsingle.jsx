import './Meal.css'
import { FaUtensilSpoon } from "react-icons/fa"
import { AiFillHome } from "react-icons/ai"
import { BiChevronRight } from "react-icons/bi"
import { AiOutlineCheckSquare } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const MealSingle = ({ meal }) => {
  console.log(meal)
  let tags = meal?.tags?.split('.')
  let instructions = meal?.instructions?.split('\r\n')
  instructions = instructions?.filter(instructions => instructions.length > 1);

  return (<>
    <div className='section-wrapper'>
      <div className='container'>
        <div className='breadcrumb bg-orangish text-white'>
          <ul className='flex items-center my-2'>
            <li className='breadcrumb-item'>
              <Link to={'/'} className='flex items-center'>
                <AiFillHome size={22} />
              </Link>
            </li>
            <li className='flex items-center mx-1'>
              <BiChevronRight size={23} />
            </li>
            <li className='breadcrumb-item flex'>
              <span className='text-xl font-medium uppercase '>{meal?.title}</span>
            </li>
          </ul>
        </div>

        <div className='sc-title'>Meal Details</div>
        <section className='sc-details bg-whitish'>
          <div className='details-head grid'>
            <div className='details-img'>
              <img src={meal?.thumbnail} alt="" className='img-cover' />
            </div>

            <div className='details-intro'>
              <h3 className='title text-orangish font-semibold'>{meal?.title}</h3>
              <div className='py-4'>
                <div className='category flex items-center'>
                  <span className='uppercase font-extrabold ls-1 my-1 '>category:
                    &nbsp;</span>
                  <span className='uppercase ls-2'>{meal?.category}</span>
                </div>

                <div className='source flex items-center'>
                  <span className='font-bold'>Source:
                    &nbsp; </span>
                  <Link to={meal.source} target='_blank'>{meal.source ? (meal?.source).substring(0, 40) + '...' : 'Not Found'}</Link>
                </div>
              </div>

              <div className='tags flex items-start flex-wrap'>
                <h6 className='text-2xl font-semibold'>Tags:</h6>
                <ul className='flex items-center flex-wrap'>
                  {
                    tags?.map((tag, idx) => (<li key={idx} className="fs-14">{tag}</li>))
                  }
                </ul>
              </div>

              <div className='ingredients my-5 px-3 py-3 bg-orangish'>
                <h6 className='text-xl font-semibold text-white'>Ingredients</h6>
                <ul className='grid'>
                  {
                    meal?.ingredients?.map((ingredient, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className='li-dot'>{idx + 1}</span>
                        <span className='uppercase text-white text-base'>{ingredient}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>


            </div>
          </div>

          <div className='details-body'>
            <div className='measures my-4'>
              <h6 className='text-3xl font-semibold'>Measure:</h6>
              <ul className='grid'>
                {
                  meal?.measures?.map((measure, idx) => (
                    <li key={idx} className="text-base flex items-end">
                      <span className='li-icon text-xs text-orangish'>
                        <FaUtensilSpoon />
                      </span>
                      <span className='li-text text-xl font-semibold opacity-90'>{measure}</span>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className='instructions my-4'>
              <h6 className='text-3xl font-semibold'>Instructions:</h6>
              <ul className='grid'>
                {
                  instructions?.map((instruction, idx) => (
                    <li key={idx} className="text-xl">
                      <AiOutlineCheckSquare size={18} className="text-orangish li-icon" />
                      <span className='li-text text-xl font-medium opacity-90'>{instruction}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </section>
      </div>

    </div>
  </>)
}
export default MealSingle