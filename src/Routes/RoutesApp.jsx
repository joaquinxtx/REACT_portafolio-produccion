import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PageProjects } from '../Components/03-projects/page/PageProjects'
import { Network } from '../Components/05-networks/Network'

import { PortfolioConteiner } from '../Components/PortfolioConteiner'


export const RoutesApp = () => {
  return (
    <>
      
    <Routes>
        <Route path='/' element={<PortfolioConteiner/>}/>
        <Route path='/proyectos' element={<PageProjects />} />

        <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
        
       
      </Routes>
      <Network/>
      
    </>
  )
}
