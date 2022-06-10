import React, { useState,useEffect} from 'react'

const References = () => {
  const [patentdata,setpatentData]=useState([])
  
  useEffect(()=>{
    const getData=()=>{
      fetch('patent_references.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          // console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          setpatentData(myJson);
          console.log(myJson);
          console.log(patentdata);
          
          
        });
    }
    getData()
  },[])
  return (
    <div className='reference'>
      <h1>reference</h1>
      <table className='ptable'>
      <tr> <th>Type</th>
        <th>Patent Country</th>
        <th>Patent Number</th></tr>
        </table>
    {patentdata && patentdata.length>0 &&  patentdata.map((pdata)=>{
      return (<table className='ptable'>
        
        <tr>
        <td>{pdata.type}</td>
        <td>{pdata.country_code}</td>
        <td>{pdata.number}</td>
        </tr>
      
      </table>)
       
                

      
    })
    }

</div>
  )
}

export default References;