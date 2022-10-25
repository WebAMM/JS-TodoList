import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBarNew from './Components/navbar/navbar';
import ToDos from './Components/ToDos/ToDos.js';
import Footer from './Components/Footer/Footer';
import AddtoDos from './Components/ToDos/AddToDos';
import { AboutUs } from './Components/AboutUs/AboutUs';
import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  let initList;

  if(localStorage.getItem("todos")===null) {
    initList = []
  }
  else {
    initList = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    // console.log('onDelete methode calls ', todo);
    settodos(todos.filter( (e) => {
      return e!==todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const AddToDo = (title, desc) => {
    let sno;
    if(todos.length===0)
      sno = 0;
    else
      sno = todos[todos.length-1].s_no+1;
    const Mytodo = {
      s_no: sno,
      title: title,
      disc: desc
    }
    settodos([...todos, Mytodo]);
    console.log(Mytodo);
    title = "";
    desc = "";
  }

  const [todos, settodos] = useState( initList);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  return (
    <>
    <Router>
      <Routes>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/">
          <NavBarNew title="Todos Items" searchBarEn={true} />
          <AddtoDos addToDos={AddToDo}/>
          <ToDos todolist={todos} onDelete={onDelete}/>
          <Footer/>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;