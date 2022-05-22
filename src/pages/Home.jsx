import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Categories1 from '../components/Categories1'
import BrowseCategories from '../components/BrowseCategories'
import BrowseDeals from '../components/BrowseDeals'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'


function Home() {
  return (
    <div>
        <Slider/>
        <BrowseCategories/>
        <Categories/>
        <Categories1/>
    </div>
  )
}

export default Home