import axios from 'axios';
import { useEffect, useState } from 'react';
import Item from './components/Item'; 

import './App.scss';
import "./styles/item.scss"
import "./styles/details.scss"

function App() {

  const url = "https://jsonplaceholder.typicode.com/users"
  const [user,setUser] = useState([])
  var [prev , setPrev] = useState(0)
  var [next , setNext] = useState(3)
  var [newUser , setNewUSer] = useState([])

  useEffect(()=>{
    const innerFunction = async(url) =>{
      const data = await getUSer(url)
      setUser(data)
      console.log(data);
      const res = data.slice(prev,next)
      setNewUSer(res)
    }

    innerFunction(url)
      
  },[url])

  const getUSer = async(url)=>{
    return await axios.get(url).then((res)=> res.data)
  }


  const prevPage = ()=>{
    
    if(prev>=3){
    setPrev(prev-=3)
    setNext(next-=3)
    const data = user.slice(prev,next)
    setNewUSer(data)
  }
  else{
    alert("No more previous Page")
  }
 
}
  const nextPage = ()=>{

    if(next<=9){
    setNext(next+=3)
    setPrev(prev+=3)
    const data = user.slice(prev,next)
    setNewUSer(data)
    }
    else{
      alert("this is Last Page")
    }
  }

  return (
    <div className="App">
     {
      newUser.map((item)=>(
        <Item key={item.id} info={item}  />
      ))
     }
     <div className='buttons' >
     <button onClick={prevPage}>Prev</button>
     <button onClick={nextPage}>Next</button>
     </div>
    </div>
  );
}

export default App;
