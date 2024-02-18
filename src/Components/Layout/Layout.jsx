import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Sidebar from "../SideBar/Sidebar"

const Layout = () => {
  return (<>
    <Header />
    <Sidebar />
    <Outlet />
  </>)
}
export default Layout