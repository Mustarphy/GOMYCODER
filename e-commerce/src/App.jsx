import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Sponsors from './components/Sponsors'
import Catalog from './components/Catalog'
import Banner from './components/Banner'
import Favourite from './components/Favourite'
import Voucher from './components/Voucher'
import Community from './components/Community'
import Footer from './components/Footer'
import Sculpturelist from './components/Sculpturelist'

export default function App() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Sponsors/>
      <Catalog/>
      <Banner/>
      <Favourite />
      <Voucher/>
      <Sculpturelist/>
      <Community/>
      <Footer/>
    </div>
  )
}

