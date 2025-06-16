import { useState,useEffect } from 'react'
import './App.css'
import ExpenseForm from './Components/ExpenseForm'
import ExpenseTable from './Components/ExpenseTable'
import ExpenseChart from './Components/ExpenseChart'
import Navbar from './Components/NavBar'
import Dashboard from './Components/Dashboard'
import { Routes,Route } from 'react-router'
import {Helmet} from "react-helmet";
function App() {
  return(
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Expense Tracker</title>
               
            </Helmet>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
       

      </Routes>
    </div>
  )
}

export default App
