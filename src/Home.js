import React, { useState, useEffect } from 'react';
import Search from './Search'
import Cake2 from './Cake2'
import Carousel from './Carousel'
import Navbar from './Navbar'

function Home (props){
  const [searchString, setSearchString] = useState('');

  useEffect(()=>{
    // console.log("props?>>>>>>>>>>>>>>>>>>>>>>>>>",props)
  },[])

  let navSearch = function(res){
    setSearchString(res)
  }

  return (
    <div>
      <Carousel/>
      <Cake2 />
      {/* <Search  res={searchString}/> */}
    </div>
  );
}

export default Home;
