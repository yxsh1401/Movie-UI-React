import React from 'react'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import GenreMovieList from './components/GenreMovieList'

// import Header from './components/Header'

function App() {
  return (
    <div className="">
      <Header/>
      <Slider/>
      <ProductionHouse/>
      <GenreMovieList/>
    </div>
  )
}

export default App
