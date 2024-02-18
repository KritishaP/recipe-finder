import { ImCancelCircle } from "react-icons/im"
import { useSidebarContext } from "../../context/sidebarContext"
import { NavLink } from "react-router-dom";
import "./Sidebar.css"
import { useMealContext } from "../../context/mealContext";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebarContext();
  const { categories } = useMealContext()

  return (<>
    <nav className={`sidebar ${isSidebarOpen ? 'sidebar-visible' : ""}`}>
      <button type="button" className="navbar-hide-btn" onClick={() => closeSidebar()}>
        <ImCancelCircle size={24} />
      </button>
      <div className="side-content">
        <ul className="side-nav">
          {
            categories.map(category => (
              <li className="side-item" key={category.idCategory}>
                <NavLink to={`/meal/category/${category.strCategory}`} className="side-link text-base " onClick={() => closeSidebar()}>
                  {
                    category.strCategory
                  }
                </NavLink>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  </>)
}
export default Sidebar