import { useState,useEffect } from 'react'
import './App.css'
import ExpenseForm from './Components/ExpenseForm'
import ExpenseTable from './Components/ExpenseTable'
import ExpenseChart from './Components/ExpenseChart'
import Navbar from './Components/NavBar'
import Dashboard from './Components/Dashboard'
import { Routes,Route } from 'react-router'
function App() {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
       

      </Routes>
    </div>
  )
}

export default App
