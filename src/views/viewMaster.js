import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeView from './homeView';
import ProjectView from './projectView'
import SkillsView from './skillsView'
import ApiView from './apiView'
import ExpView from './expView'

const ViewMaster = () => (
  <div id='layout'>
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/projects' element={<ProjectView />} />
      <Route path='/skills' element={<SkillsView />} />
      <Route path='/api' element={<ApiView />} />
      <Route path='/exp' element={<ExpView />} />
    </Routes>
  </div>
)

export default ViewMaster
