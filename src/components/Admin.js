import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Admin() {
    const navigate = useNavigate()
    const [report, setReport] = useState([
    
    ])
    function getReport(){
        axios.get('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/get_table').then(function(response){
            console.log(response.data)
            setReport(response.data)
        })
    }

    useEffect(()=>{
        getReport()
    },[])

    function deleteHandler(){
        axios.delete(`https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/item.php?var=${report.item_id}`)
    }

    function viewHandler(e){
        console.log(report.item_id)
        navigate(`/iteminfo?var=${e}`)
    }

  return (
    <div>
      {report.map((report, index)=>{
        return(
            <div key={index}>
                <br></br>
                <br></br>
                <h1>{report.reporter} reported post: {report.item_id}</h1>
                <button className='LoginButton' style={{backgroundColor:'red'}}onClick={deleteHandler}>Delete</button>
                <button className='LoginButton' onClick={()=>{viewHandler(report.item_id)}}>View Post</button>
                <br></br>
                <br></br>
            </div>
        )
      })}
    </div>
  )
}

export default Admin
