import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';
import {useState} from 'react';

function App() {

  const [items, setItems] = useState([
    {
    id:uuidv4(),
    title:'First item',
    body:'First body'
  }, 
  {
    id:uuidv4(),
    title:'Second item',
    body:'Second body'
  }
  ])

  const [item, setItem] = useState({
    title:'',
    body:''
  })
  const [body, setBody] = useState('')
  const [editItem, setEditItem] = useState(false)

  const handleChange = (e) =>{
    console.log('handle chnage')
  }

  const handleSubmit = (e) => {
    console.log('handle Submit')
  }

  const clearList = (e) => {
    console.log('Clear list')
  }

  const handleEdit = (id) => {
    console.log(`handle edit ${id}`)
  }

  const handleDelete = (id) => {
    console.log(`handler delete ${id}`)
  }

  return (
    <div className="App">
        <h1> Todo Input </h1>
        <TodoInput item={item} handleChange={handleChange} handleSubmit={handleSubmit} editItem={editItem}/>
        <TodoList items={items} clearList={clearList} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </div>
  );
}

export default App;
