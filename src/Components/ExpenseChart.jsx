import React, { useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title,ArcElement ,Tooltip, Legend,ChartDataLabels);

function ExpenseChart({expenses,type}) {
 

  


const uniqueData = Array.from(
     new Set(expenses.map((item) => item.selectedCategory))
   ).map((selectedCategory) => expenses.find((item) => item.selectedCategory === selectedCategory ));
    //console.log(uniqueData);
    const category=['Bills & Utilities','Dining','Retail Purchase','Entertainment','Travel','Other']


 
  const chartData = {
    labels: uniqueData?.map((expense) => expense.selectedCategory),
    datasets: [
      {
        label: 'Expenses',
        data: expenses.map((expense) =>expense.amount),
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
      borderWidth: 2,
      },
    ],
  };

  const barData = {
    labels: expenses?.map((expense) => expense.date),
    datasets: [
      {
        label: 'Expenses',
        data: expenses.map((expense) =>expense.amount),
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
      borderWidth: 2,
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Categrory Chart',
      },
       datalabels: {
        display: true,
        color: 'slate',
        formatter: (value, context) => {
            
            const total = context.dataset.data.reduce((acc, curr) => acc + parseInt (curr), 0);
            const percentage = ((parseInt(value) / total) * 100).toFixed(2);
            
            return `${Math.round(percentage)}%`;
          },
          font: {
            weight: 'bold',
            size: 16,
          },
      },
      
    },
  };
 const barOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Expense Chart',
      },},
    };
  return (
     type=="bar"?(expenses.length>0?<div className='bg-white w-full h-92 border  rounded m-8 p-4'><Bar data={barData} options={barOptions}  /></div>:<div></div>)
    :(expenses.length>0?<div className='bg-white w-full m-8 p-4 flex justify-center h-92'><Doughnut data={chartData} options={chartOptions} /></div>:<div></div>)
);
  //return  (expenses.length>0?<div className='bg-white w-full h-92 m-4 p-4 flex justify-center'><Pie data={chartData}/></div>:<div></div>);
   //return  (expenses.length>0?<div className='bg-white w-full m-8 p-4 flex justify-center h-92'><Doughnut data={chartData}/></div>:<div></div>);
}

export default ExpenseChart;