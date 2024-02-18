import React, { useState } from 'react';
import "./Header.css";
import { BsSearch } from "react-icons/bs";
import { useMealContext } from '../../context/mealContext';
import { useNavigate } from 'react-router-dom';
import { startFetchMealsBySearch } from '../../actions/MealsAction';



const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { dispatch, meals } = useMealContext();

  const handleSearchTerm = (e) => {
    e.preventDefault();
    if ((e.target.value.replace(/[^\w\s]/gi, "")).length !== 0) {
      setSearchTerm(e.target.value);
      setErrorMsg("");
    } else {
      setErrorMsg("Invalid search term ...");
    }
  }

  const handleSearchResult = (e) => {
    e.preventDefault();
    navigate("/");
    startFetchMealsBySearch(dispatch, searchTerm);
  }

  return (
    <form className='search-form flex items-center' onSubmit={(e) => handleSearchResult(e)}>
      <input type="text" className='form-control-input text-dark-gray text-base' placeholder='Search recipes here ...' onChange={(e) => handleSearchTerm(e)} />
      <button type="submit" className='form-submit-btn text-white uppercase text-sm'>
        <BsSearch className='btn-icon' size={20} />
      </button>
    </form>
  )
}

export default SearchForm