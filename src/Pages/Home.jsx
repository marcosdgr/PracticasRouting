import React, { useState , useEffect } from 'react'
import Datos from "../Constants/Datos.js"
import Header from '../Components/Header'
import MainHome from '../Components/MainHome'
import Footer from '../Components/Footer'

const Home = () => {
    const [personas,setPersonas] = useState ([])

    useEffect(() => {
      setPersonas(Datos)
    
      
    }, [])
    
  return (
    <div>
        <Header/>
        <br />
        <MainHome personas={personas}/>
        <br />
        <Footer/>
    </div>
  )
}

export default Home