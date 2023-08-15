import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  const [edit, setEdit] = useState()
  const [newvalue, setNewValue] = useState('')

  const today = new Date().getDay()
  const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
 

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {dayName[today]} 🌝</h2>
      </div>
      
        { edit ? <div className="input"> <input type="text" value={newvalue} onChange={(e)=>setNewValue(e.target.value)} />
        <i onClick={(e)=>{setToDos(toDos.filter(item=>{if(item.id===edit.id){item.text=newvalue}return item}));
        setEdit('')
        setNewValue('')
        setToDo('')
      
      }}
          

          

       className="fas fa-plus"></i>
        </div>
              
        :
        <div className="input">
        <input type="text"  value={toDo} onChange={(e)=>{setToDo(e.target.value) }} placeholder="🖊️Add item..." />
      
        <i onClick={()=>{
          if(!toDos.some(item => item.text === toDo || toDo.trim() === '')){
          setToDos([...toDos, {id:Date.now(), text:toDo, status:false}]);
          setToDo('')
          }else{
            alert('Try a different value..!')
          }
          }
        } className="fas fa-plus"></i>
      </div>
      }
      <div className="todos">
      { toDos.map((obj)=>{

       return (
         <div className="todo">
          <div className="left">
            <input  onChange={(e)=>{setToDos(toDos.filter(obj2=>{if(obj2.id===obj.id){obj2.status=e.target.checked}return obj2}))}} value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i onClick={()=>{setEdit(obj); setNewValue(obj.text)}}>E</i>
            <i onClick={()=>{setToDos(toDos.filter(obb=>obb.id !== obj.id) )}} className="fas fa-times">
              
            </i>

          </div>
            
          
        </div> )

       }) }

       {toDos.map((obj)=>{if(obj.status){return ( <h1>{obj.text}</h1> )} return null})}
      </div>
    </div>
  );
}

export default App;