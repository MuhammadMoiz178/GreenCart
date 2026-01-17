import React from 'react'
import Mainbanner from '../components/Mainbanner'
import Categories from '../components/Categories'

function Home() {
  return (
    <div className='mt-10'>
        <Mainbanner/>
        <Categories/>
    </div>
  )
}

export default Home