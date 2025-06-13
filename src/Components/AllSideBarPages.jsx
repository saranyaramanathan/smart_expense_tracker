import ExpenseForm from "./ExpenseForm"
import Dashboard from "./Dashboard";
import ExpenseTable from "./ExpenseTable";
import Chart from "./Chart";
import React from "react";
import { Routes,Route } from "react-router";
function AllSideBarPages(){
     <React.Fragment>
    <section>
        <Routes>
            <Route path="/" element={<Dashboard />} />
           <Route path="/expenseform" element={<ExpenseForm/>} />
           <Route path="/charts" element={<Chart />} />
            <Route path="/expensetable" element={<ExpenseTable/>} />
           
        </Routes>
      
    </section>
  </React.Fragment>
}
export default AllSideBarPages