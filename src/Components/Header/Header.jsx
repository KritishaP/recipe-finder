import Navbar from "./Navbar"
import './Header.css'
import SearchForm from "./SearchForm"
const Header = () => {
  return (<>
    <header className="header">
      <Navbar />
      <div className="header-content flex items-center justify-center flex-col text-center">
        <SearchForm />
        <h1 className="text-whitish header-title text-5xl font-serif ls-2">What is your favourite cuisine?</h1>
        <p className="uppercase text-whitish my-3 ls-1">
          personalize your experience
        </p>
      </div>
    </header>
  </>)
}
export default Header