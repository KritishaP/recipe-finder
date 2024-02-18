import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../Components/Layout/Layout"
import { CategoryPage, ErrorPage, HomePage, MealDetailsPage } from "../Pages"


const Routing = () => {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="meal/:id" element={<MealDetailsPage />} />
          <Route path="meal/category/:name" element={<CategoryPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>)
}
export default Routing