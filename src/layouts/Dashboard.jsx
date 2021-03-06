import React from 'react'
import Education from './Education'
import SkillsAndCompetences from './SkillsAndCompetences'
import Certificates from './Certificates'
import Missions from './Missions'
import Languages from './Languages'
import Interests from './Interests'
import Genel from '../pages/Genel'
import { Routes,Route } from 'react-router-dom'
import Projects from './Projects'
import Main from './Main'
import MainPages from '../pages/MainPages'
export default function Dashboard() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<MainPages />} exact />
        <Route path='/cv' element={<Genel />} exact/>
        <Route path='/Main' element={<Main/>}></Route>
        <Route path="/Education" element={<Education />} exact />
        <Route path="/SkillsAndCompetences" element={<SkillsAndCompetences />} exact />
        <Route path="/Projects" element={<Projects />} exact />
        <Route path="/Missions" element={<Missions/>} exact />
        <Route path="/Certificates" element={<Certificates />} exact />
        <Route path="/Languages" element={<Languages />} exact />
        <Route path="/Interests" element={<Interests />} exact />
      </Routes>
    </div>
  )
}
