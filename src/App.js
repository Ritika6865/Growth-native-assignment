
////////////////////////////
import logo from './logo.svg';
import './App.css';

import React ,{useState}from 'react'
import axios from "axios";

function App() {

  const [data,setData]=useState(null)
  const [print,setPrint]=useState(false)
  const [image, setImage] = useState('')
  
  const handleChange = (e) => {
    console.log(e.target.files)
    setImage(e.target.files[0])
  }

  const handleApi = () => {
    //call the api
    const url = ''

    const formData = new FormData()
    formData.append('image', image)
    axios.post(url, formData).then(result => {
      console.log(result.data)
      alert('success')
    })
      .catch(error => {
        alert('service error')
        console.log(error)
      })
      function getData(val)
  {
    console.warn(val.target.value)
    setData(val.target.value)
    setPrint(false)
  }
  }
  
  return (
    <div className='App'>
      <br/><br/><br/>
      IMAGE UPLOAD <br/><br/>
      <input type="file" onChange={handleChange} /> 
      
      <button onClick={handleApi} >SUBMIT</button> <br />
      <br/>
      <br/>
      <br/><br/><br/><br/><br/><br/>
     {
      print?
      <h1> {data}{"\n"}</h1>
      :null
     }
     <input type="text" />
     <button onClick={()=>setPrint(true)} >Submit Roll Number</button>
   </div>
  );
}

export default App;