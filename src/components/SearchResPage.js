import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { Search_URL } from '../constants/searchResultsApi';
import SearchResVideoCard from './SearchResVideoCard';

const SearchResPage = (data) => {
    const [searchRes, setSearchRes] = useState([])

    const [searchParams] = useSearchParams();
    const param = searchParams.get("q")

    useEffect(()=> {
        searchApiCall()
    },[param])

    const searchApiCall = async()=>{
        const data = await fetch(Search_URL + param)
        const json = await data.json()
        setSearchRes(json.items)
    }

    if (searchRes){
  return (
  <>
  {searchRes.map((res)=> <Link to={'/watch?v=' + res.id.videoId}><SearchResVideoCard data = {res}/></Link>)}
  </>
  )
    }else{
        <div>Loading...</div>
    }
}

export default SearchResPage