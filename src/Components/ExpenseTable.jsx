import React from "react";
import { useState } from "react";
const ExpenseTable = ({ expenseData, onDeleteExpense }) => {
  let expenseDataRow = null;
  let totalAmount = 0;
  
  const [selectedOption, setSelectedOption] = useState('');
  const [isEnabled,setEnabled]=useState(true);
  const[selectedAmount,setSelectedAmount]=useState('');
  const [selectedDate,setSelectedDate]=useState('');
  const [selectedId,setSelection]=useState([]);
  const [sortBy, setSortBy] = useState('date'); // Default sort by date
 // Sort by most recent date
const sortByDate = (a, b) => new Date(b.date) - new Date(a.date);

// Sort by highest amount
const sortByAmount = (a, b) => b.amount - a.amount;

  
     
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setSelection(e.target.value);
    setSelectedAmount("All");
    setSelectedDate('');
    setSelectedOption("All");
  };
  //Category Filter
  const handleOptionChange = (event) => {
    const newOption = event.target.value;
    setSelectedOption(newOption);
    setSelection(newOption);
    setSelectedAmount("All");
    setSelectedDate('');
  };
  const filteredData = selectedOption
    ? expenseData.filter((row) => row.selectedCategory === selectedOption)
    : expenseData;
  //Date Filter
  const handleDateChange = (event) => {
    const newOption = event.target.value;
    setSelectedDate(newOption);
    setSelection(newOption);
    setSelectedAmount("All");
    setSelectedOption("All");
  };
  const filteredDateData = selectedDate
    ? expenseData.filter((row) => row.date == selectedDate)
    : expenseData;
  //Amount filter   
  const handleAmountChange = (event) => {
    const newOption = event.target.value;
    setSelectedAmount(newOption);
    setSelection(event.target.value);
    setSelectedOption("All");
    setSelectedDate('')
  };
  let filteredAmountData;
  switch (selectedAmount) {
    case "less than 1000":
      filteredAmountData = selectedAmount
        ? expenseData.filter((row) => row.amount < 1000)
        : expenseData;
      break;
    case "between 1000 and 3000":
      filteredAmountData = selectedAmount
        ? expenseData.filter((row) => row.amount >= 1000 && row.amount <= 3000)
        : expenseData;
      break;
    case "between 3000 and 5000":
      filteredAmountData = selectedAmount
        ? expenseData.filter((row) => row.amount >= 3000 && row.amount <= 5000)
        : expenseData;
      break;
    case "greater than 5000":
      filteredAmountData = selectedAmount
        ? expenseData.filter((row) => row.amount >= 5000)
        : expenseData;
      break;
    default:
      filteredAmountData = expenseData;
  }
     
  if (Array.isArray(expenseData) && expenseData.length > 0) {
    console.log("filter value",expenseData,filteredData.length)
          if(filteredData.length == 0 || filteredDateData.length == 0 || filteredAmountData.length == 0){
            
      expenseDataRow = (
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td colSpan="5" className="text-center ">
          No expenses recorded.
        </td>
      </tr>
    );
  }
  
 switch(selectedId){
  case selectedAmount:
    expenseData=filteredAmountData;
    break;
    case selectedDate:
      expenseData=filteredDateData;
      break;
      case selectedOption:
        expenseData=filteredData;
        break;
        case sortBy:
          sortBy =="date"?expenseData=[...expenseData].sort(sortByDate):expenseData=[...expenseData].sort(sortByAmount);
          console.log("inside1",selectedId,expenseData)
          break;
            default:
              //expenseData;
 }
 expenseDataRow = expenseData.map((expense) => {totalAmount=totalAmount + parseInt(expense.amount)})
        
      expenseDataRow = expenseData.map((expense) => (
       
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600" key={expense.id}>
        <td class="px-6 py-4">{expense.date}</td>
        <td class="px-6 py-4">₹{expense.amount}</td>
        <td class="px-6 py-4">{expense.selectedCategory}</td>
        <td class="px-6 py-4">{expense.description}</td>
        <td class="px-6 py-4">
          <button class="px-6 py-2 rounded bg-red-700 text-white"
            onClick={() => onDeleteExpense(expense.id)}
            
          >
            Delete
          </button>
        </td>
         
      </tr>
     
    ));
    
  
  } 
  else {
    expenseDataRow = (
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td colSpan="5" className="text-center">
          No expenses recorded.
        </td>
      </tr>
    );
  }

  return (
    <div className="container flex flex-col justify-center mx-auto my-4 w-full p-4">
      <h2 className="text-center text-2xl mb-4 text-white">EXPENSE HISTORY</h2>
     
    <div class="flex items-center justify-between px-4 py-2 space-x-2 border m-2 border-white">
            
      <select value={sortBy} onChange={handleSortChange} class="text-white border border-green-400 rounded p-2 bg-gray-800">
        <option value="date">Sort by Date</option>
        <option value="amount">Sort by Amount</option>
      </select> 
      {/* <h2 className="text-center text-xl mb-4 text-white">Filter </h2> */}
       <input
        name="Select Date"
        type="date"
        value={selectedDate}
        
        onChange={handleDateChange}
        class="text-white border border-green-400 rounded p-2 bg-gray-800"
      />
       
         
      <select
        name="amountfilter"
        value={selectedAmount}
       
        onChange={handleAmountChange}
        class="text-white border border-green-400 rounded p-2 bg-gray-800"
      >
        <option value="">All</option>
        <option value="less than 1000">less than 1000</option>
        <option value="between 1000 and 3000">between 1000 and 3000</option>
        <option value="between 3000 and 5000">between 3000 and 5000</option>
        <option value="greater than 5000">greater than 5000</option>
     
        
      </select> 
     
      <select
        name="filter"
        value={selectedOption}
       
        onChange={handleOptionChange}
        class="text-white border border-green-400 rounded p-2 bg-gray-800"
      >
        <option value="">All</option>
        <option value="Bills & Utilities">Bills & Utilities</option>
        <option value="Dining">Dining</option>
        <option value="Retail Purchase">Retail Purchase</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Travel">Travel</option>
        <option value="Other">Other</option>
        
      </select>
    </div> 
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
     
    <table class="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400">
        <thead class="text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Amount
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>{expenseDataRow}
          
         
        </tbody>
    </table>
    
</div>
 
<h3 className="text-center text-xl text-white font-semibold m-4">
          {`Total Expense : ${totalAmount} `}
        </h3>
 
  </div>

    
  );
};

export default ExpenseTable;
