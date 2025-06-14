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
  let totalIncome=100000;
  let totalExpense= 0;
  let balance=0;
  expenseData.forEach((expense)=>totalExpense= totalExpense + parseInt(expense.amount))
  balance=totalIncome - totalExpense;
  const deleteExpense = (id) => {
    setExpenseData((prevData) => {
      const newData = prevData.filter((expense) => expense.id !== id);
      localStorage.setItem('expenseData', JSON.stringify(newData));
      return newData;
    });
  };

  return (
    <div className="bg-gray-800 flex mx-auto flex-wrap overflow-x-hidden">
      <Navbar/>
      <div className='w-1/2 flex flex-wrap '>
     
       <ExpenseChart expenses={expenseData} type={"pie"} />
       <ExpenseChart expenses={expenseData} type={"bar"} />
       </div>
        <div className='w-1/2 flex flex-col item-center flex-wrap '>
         <div className="rounded bg-gray-50 w-92 h-24 m-8 p-4">
        <div className='flex justify-between'>
            <span className='border rounded text-xl font-semibold px-4 bg-red-700 text-white '>Income<div className=''>{`₹${totalIncome}`}</div></span>
            <span className='border rounded text-xl font-semibold px-4 bg-blue-700 text-white '>Expense<div className=''>{`₹ ${totalExpense}`}</div></span>
            <span className='border rounded text-xl font-semibold px-4 bg-green-700 text-white '>Balance<div className=''>{`₹ ${balance}`}</div></span>
        </div>
      </div>
         <ExpenseForm onAddExpense={addExpense} />
      
      </div>
   
     <ExpenseTable expenseData={expenseData} onDeleteExpense={deleteExpense} />
      
    </div>
  );
}
export default Dashboard;