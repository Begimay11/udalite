import { useState } from "react";
import ExpenseItem from './ExpenseItem';

function Expenses(){
const dummy_expenses = [
    {
      id: 'e1',
      title: 'Lesson',
      date: new Date(2022, 2, 14),
    },
    {
      id: 'e2',
      title: 'Practice',
      date: new Date(2022, 2, 15)
    },
    {
      id: 'e3',
      title: 'Lesson',
      date: new Date(2022, 2, 16),
    },
    {
      id: 'e4',
      title: 'Practice',
      date: new Date(2022, 2, 17),
    },
  ];
  const [expenses,setExpenses]= useState(dummy_expenses)

  const deleteFunction = (id)=> {
    const filteredArray = expenses.filter((el)=> {
      if(el.id !== id){
        // console.log(el);
        return [el]
      }
    })
    setExpenses(filteredArray)
  }

    return <div>
        {expenses.map((el) => (
            <ExpenseItem onDelete = {deleteFunction} id = {el.id} key = {el.id} date={el.date} text = {el.title}/> 
        ))}
        </div>
}
export default Expenses