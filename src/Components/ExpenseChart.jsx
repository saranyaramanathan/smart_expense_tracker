import React, { useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title,ArcElement ,Tooltip, Legend);

function ExpenseChart({expenses}) {
//   const [expenses, setExpenses] = useState([
//     { category: 'Food', amount: 50 },
//     { category: 'Transport', amount: 30 },
//     { category: 'Entertainment', amount: 20 },
//   ]);

  const chartData = {
    labels: expenses?.map((expense) => expense.selectedCategory),
    datasets: [
      {
        label: 'Expenses',
        data: expenses.map((expense) => expense.amount),
        //backgroundColor: 'rgba(75, 192, 192, 0.6)',
         backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Expense Chart',
      },
    },
  };

  //return (<div className='bg-white w-full h-92 border  rounded m-4 p-4'><Bar data={chartData} options={chartOptions} /></div>);
  return  (expenses.length>0?<div className='bg-white w-full h-92 m-4 p-4 flex justify-center'><Pie data={chartData}/></div>:<div></div>);
   //return  (<div className='bg-white w-full m-4 p-4 flex justify-center h-92'><Doughnut data={chartData}/></div>);
}

export default ExpenseChart;