import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import Slider from '../Component/Slider'

export default function Layout(props) {
  return (
    <div>
    <Header />
    <Slider />
    {props.component}
  <Footer/>
  </div>
  )
}
