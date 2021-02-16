import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';
import React, {useEffect, useState} from 'react';

const TodoContext = React.createContext();

function App() {

  // all states:
  const [items, setItems] = useState([])

  const [item, setItem] = useState({
    title:'',
    body:''
  })

  const [editItem, setEditItem] = useState(false);

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setItem( (prev) => {
      return {
        ...prev,
        [name] : value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // add id for the the item
    item.id = uuidv4()
    
    setItems( (prev) => {
      return [...prev, item]
    })
    
    setItem({
      title:'',
      body:''
    })
    // when working with edit items this will be in use, but at the time of add this is not much useful:
    setEditItem(false);
  }

  const clearList = (e) => {
    setItems([]);
  }

  const handleEdit = (id) => {
    item.id = id
    handleDelete(id);

    const selectedItem = items.find( val => val.id === id);
    
    setItem({ 
        title:selectedItem.title,
        body:selectedItem.body
      })

    setEditItem(true);
  }

  const handleDelete = (id) => {
    setItems( items.filter( (val) =>  val.id !== id) );
  }

  return (
    <div className="App">
        <h1> Todo Input </h1>
        <TodoInput item={item} handleChange={handleChange} handleSubmit={handleSubmit} editItem={editItem}/>
        <TodoContext.Provider value={[handleDelete,handleEdit]}>
          <TodoList items={items} clearList={clearList}/>
        </TodoContext.Provider>
    </div>
  );
}

export default App;
export { TodoContext };
