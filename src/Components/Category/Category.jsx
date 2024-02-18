

import { Link } from 'react-router-dom';
import "./Category.css";

const CategoryList = ({ categories }) => {
  return (
    <div className='section-wrapper bg-whitesmoke'>
      <div className='container'>
        <div className='sc-title'>categories</div>
        <section className='sc-category grid'>
          {
            categories.map(category => {
              const { idCategory: id, strCategory: title, strCategoryThumb: thumbnail } = category;

              return (
                <Link to={`/meal/category/${title}`} className="category-itm items-center justify-center" key={id}>
                  <div className='category-itm-img h-100 w-100 flex items-center justify-center'>
                    <img src={thumbnail} alt={title} />
                    <div className='category-itm-title bg-orangish'>
                      <h3 className='text-whitish text-sm font-semibold ls-1 uppercase'>{title}</h3>
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

export default CategoryList