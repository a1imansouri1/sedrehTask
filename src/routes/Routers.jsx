import React from 'react'

import { Routes, Route, Navigate, useParams } from 'react-router-dom'

import PlatformLaunch from '../Pages/PlatformLaunch'
import MarkettingPlan from '../Pages/MarkettingPlan'
import Roadmap from '../Pages/Roadmap'
import CreateNewBoard from '../Pages/CreateNewBoard'


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/platformlaunch' />} />
        <Route path='/platformlaunch' element={<PlatformLaunch />} />
        <Route path='/markettingplan' element={<MarkettingPlan />} />
        <Route path='/roadmap' element={<Roadmap />} />
        <Route path='/createnewboard' element={<CreateNewBoard />} />
    </Routes>
  )
}

export default Routers