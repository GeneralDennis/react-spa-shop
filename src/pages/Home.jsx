import React, { useState, useEffect } from 'react'
import { getAllCategories } from '../api'
import CategoryList from '../components/CategoryList'
import { useLocation, useNavigate } from 'react-router-dom'

import Preloader from '../components/Preloader'
import Search from '../components/Search'

const Home = () => {

  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const {pathname, search} = useLocation();
  const navigate = useNavigate();


  const handleSearch = str => {
    setFilteredCatalog(
      catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
    )
    // push({
    //   pathname,
    //   search: `?search=${str}`
    // })
    navigate(`${pathname}?search=${str}`)
  }
  useEffect(()=>{
    getAllCategories().then(data=> setCatalog(data.categories));
    getAllCategories().then(data=>
        setFilteredCatalog(
          search ?
            data.categories.filter(item =>
              item.strCategory
                .toLowerCase()
                .includes(search.split('=')[1]
                .toLowerCase()))
            : data.categories))

  },[search])
  return (
    <>
      <Search cb={handleSearch}/>
      {!catalog.length ? <Preloader/> : (
        <CategoryList catalog={filteredCatalog}/>
      )}
    </>

  )
}
export default  Home