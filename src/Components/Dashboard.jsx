import { useState,useEffect } from 'react'
import ExpenseForm from './ExpenseForm'
import ExpenseTable from './ExpenseTable'
import ExpenseChart from './ExpenseChart'
import Navbar from './NavBar'
function Dashboard(){
     const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    // Load data from localStorage on component mount
    const storedData = JSON.parse(localStorage.getItem('expenseData')) || [];
    setExpenseData(storedData);
  }, []); // Empty dependency array to only run the effect once on mount

  const addExpense = (newExpense) => {
    setExpenseData((prevData) => {
      const newData = [...prevData, newExpense];
      localStorage.setItem('expenseData', JSON.stringify(newData));
      return newData;
    });
  };

  const deleteExpense = (id) => {
    setExpenseData((prevData) => {
      const newData = prevData.filter((expense) => expense.id !== id);
      localStorage.setItem('expenseData', JSON.stringify(newData));
      return newData;
    });
  };

  return (
    <div className="App bg-gray-800 flex mx-auto flex-wrap ">
      <Navbar/>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseTable expenseData={expenseData} onDeleteExpense={deleteExpense} />
      <ExpenseChart expenses={expenseData}/>
    </div>
  );
}
export default Dashboard;